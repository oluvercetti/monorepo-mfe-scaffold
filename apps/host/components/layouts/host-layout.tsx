import { inter } from "@repo/ui/src/styles/font";
import Head from "next/head";
import { useRouter } from "next/router";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { PAGE_ROUTES } from "../../lib/constants/page-routes";
import Navbar from "../ui/navbar";
import TabNavigation from "../ui/tab-navigation";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}
export interface Tab {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

// Get the parent route information for a given path
const getParentRouteInfo = (path: string) => {
  // Check if this is a dynamic nested route
  const pathSegments = path.split("/").filter(Boolean);
  if (pathSegments.length >= 1) {
    // Get first segment as the potential parent route
    const possibleParentPath = `/${pathSegments[0]}`;

    // Check if this is a known parent route defined in PAGE_ROUTES
    for (const [key, value] of Object.entries(PAGE_ROUTES)) {
      if (value === possibleParentPath) {
        // Transform route key like "KNOWLEDGE_MANAGEMENT" to "Knowledge Management"
        const formattedLabel = key
          .split("_")
          .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
          .join(" ");

        return {
          parentPath: possibleParentPath,
          parentLabel:
            formattedLabel === "Admin" ? "Admin Settings" : formattedLabel,
        };
      }
    }
  }

  // No parent found
  return null;
};

// Helper to get base path and clean dynamic segments
const getBasePathAndLabel = (
  path: string
): { basePath: string; cleanPath: string; defaultLabel: string } => {
  const segments = path.split("/").filter(Boolean);
  const basePath = segments.length > 0 ? `/${segments[0]}` : path;

  // Clean dynamic segments like [[...slug]] from the path
  const cleanSegments = segments.map((segment) =>
    segment.replace(/\[\[\.\.\..*?\]\]/, "").replace(/\[.*?\]/, "")
  );
  const cleanPath =
    cleanSegments.length > 0 ? `/${cleanSegments.join("/")}` : path;

  // Generate default label from the last clean segment
  const lastSegment = cleanSegments[cleanSegments.length - 1] || "Unknown";
  const defaultLabel = lastSegment
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return { basePath, cleanPath, defaultLabel };
};

// Helper to deduplicate tabs
const deduplicateTabs = (tabs: Tab[]): Tab[] => {
  const seen = new Set<string>();
  const uniqueTabs: Tab[] = [];

  for (const tab of tabs) {
    const { basePath } = getBasePathAndLabel(tab.path);
    if (!seen.has(basePath)) {
      seen.add(basePath);
      uniqueTabs.push(tab);
    }
  }

  return uniqueTabs;
};

const HostLayout: React.FC<LayoutProps> = ({
  children,
  title = "repo - Service Management",
}) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const [tabs, setTabs] = useState<Tab[]>([{ path: "/", label: "Home" }]);
  const [activeTab, setActiveTab] = useState("/");
  const isNavigatingRef = useRef(false);

  // Initialize tabs based on current route
  useEffect(() => {
    // Skip if we're navigating programmatically
    if (isNavigatingRef.current) {
      isNavigatingRef.current = false;
      return;
    }

    if (currentPath === "/") {
      setActiveTab("/");
      return;
    }

    // Clean up the current path and get base information
    const { basePath, cleanPath, defaultLabel } =
      getBasePathAndLabel(currentPath);

    setTabs((prevTabs) => {
      // First check if we already have a tab for this base path
      const existingTabIndex = prevTabs.findIndex((tab) => {
        const { basePath: tabBasePath } = getBasePathAndLabel(tab.path);
        return tabBasePath === basePath;
      });

      if (existingTabIndex >= 0) {
        // Update existing tab with new path but keep the label
        const newTabs = [...prevTabs];
        newTabs[existingTabIndex] = {
          ...newTabs[existingTabIndex],
          path: cleanPath,
        };
        return deduplicateTabs(newTabs);
      }

      // If no existing tab, check for parent route
      const parentRouteInfo = getParentRouteInfo(currentPath);

      // Create new tab with either parent label or default label
      const newTab = {
        path: cleanPath,
        label: parentRouteInfo ? parentRouteInfo.parentLabel : defaultLabel,
      };

      return deduplicateTabs([...prevTabs, newTab]);
    });

    setActiveTab(cleanPath);
  }, [currentPath]);

  const handleTabChange = (path: string) => {
    // Set the flag to indicate we're navigating programmatically
    isNavigatingRef.current = true;

    // Ensure we're updating the active tab first
    setActiveTab(path);

    // Then navigate to the path
    router.push(path);
  };

  const handleTabClose = (path: string) => {
    if (path === "/") return; // Can't close home tab
    // Find the index of the tab being closed
    const tabIndex = tabs.findIndex((tab) => tab.path === path);

    // If tab not found, do nothing
    if (tabIndex === -1) {
      return;
    }

    // Create a copy of the tabs array
    const newTabs = [...tabs];

    // Check if we're closing the active tab
    const closingActiveTab = path === activeTab;

    // Remove the tab at the found index
    newTabs.splice(tabIndex, 1);

    // If we're closing the active tab, determine which tab to navigate to next
    if (closingActiveTab) {
      // If there are tabs to the right, go to the tab that would now be at the same index
      // Otherwise go to the tab to the left (which is now the last tab)
      const nextTabIndex =
        tabIndex < newTabs.length ? tabIndex : newTabs.length - 1;

      if (nextTabIndex >= 0) {
        const nextTab = newTabs[nextTabIndex];

        // Set the flag to indicate we're navigating programmatically
        isNavigatingRef.current = true;

        // Update active tab and navigate
        setActiveTab(nextTab.path);
        router.push(nextTab.path);
      }
    }

    // Update the tabs state
    setTabs(newTabs);
  };

  const handleNavigate = (path: string, label: string) => {
    isNavigatingRef.current = true;
    const { cleanPath } = getBasePathAndLabel(path);

    // Check if this exact tab already exists
    const existingTabIndex = tabs.findIndex((tab) => {
      const { basePath: tabBasePath } = getBasePathAndLabel(tab.path);
      const { basePath: newBasePath } = getBasePathAndLabel(path);
      return tabBasePath === newBasePath;
    });

    if (existingTabIndex >= 0) {
      // Update existing tab
      const newTabs = [...tabs];
      newTabs[existingTabIndex] = {
        ...newTabs[existingTabIndex],
        path: cleanPath,
        label,
      };
      setTabs(deduplicateTabs(newTabs));
      setActiveTab(cleanPath);
      router.push(path);
    } else {
      // Create new tab
      setTabs((prevTabs) =>
        deduplicateTabs([...prevTabs, { path: cleanPath, label }])
      );
      setActiveTab(cleanPath);
      router.push(path);
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="repo Service Management Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`antialiased ${inter.className}`}>
        <div className="flex min-h-screen flex-col">
          <Navbar
            onNavigate={handleNavigate}
            tabs={tabs}
            onTabSelect={handleTabChange}
          />
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            onTabClose={handleTabClose}
          />
          <main className="flex-grow flex-1 bg-[#F9FAFB]">{children}</main>
        </div>
      </main>
    </>
  );
};

export default HostLayout;
