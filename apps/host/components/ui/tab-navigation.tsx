"use client";
import { Home, X } from "lucide-react";
import React, { memo, useCallback } from "react";
import type { Tab } from "../layouts/host-layout";

// The interface is used for type checking, even if some props are used indirectly
/* eslint-disable no-unused-vars */
interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (_path: string) => void;
  onTabClose: (_path: string) => void;
}
/* eslint-enable no-unused-vars */

function TabNavigation({ tabs, activeTab, onTabChange, onTabClose }: Readonly<TabNavigationProps>) {
  // Handler to ensure tab selection works consistently
  const handleTabClick = useCallback(
    (path: string) => {
      if (path !== activeTab) {
        // Call the parent's tab change handler with the tab's path
        onTabChange(path);
      }
    },
    [activeTab, onTabChange]
  );

  // Dedicated handler for tab close
  const handleCloseTab = useCallback(
    (e: React.MouseEvent, path: string) => {
      // Prevent event bubbling to parent elements
      e.preventDefault();
      e.stopPropagation();

      // Call the parent's close handler
      onTabClose(path);
    },
    [onTabClose]
  );

  return (
    <div className="bg-[#1659e6] text-white">
      <div className="px-4">
        <div className="hide-scrollbar flex overflow-x-auto">
          {tabs.map((tab) => (
            <div
              key={tab.path}
              className={`flex cursor-pointer items-center whitespace-nowrap rounded-t-md px-4 py-2 ${
                activeTab === tab.path ? "mt-2 bg-[#F9FAFB] text-[#333333]" : "hover:bg-blue-600"
              }`}
              onClick={() => handleTabClick(tab.path)}
            >
              {tab.path === "/" ? (
                <Home className="h-6 w-12" />
              ) : (
                <div className="flex min-w-[100px] items-center justify-between gap-4 px-4">
                  {tab.icon && <div className="mr-2">{tab.icon}</div>}
                  <span>{tab.label}</span>
                  {/* Close button with improved event handling */}
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label={`Close ${tab.label} tab`}
                    className={`ml-2 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full ${activeTab === tab.path ? "hover:bg-gray-200" : "hover:bg-blue-100"}`}
                    onClick={(e) => handleCloseTab(e, tab.path)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleCloseTab(e as unknown as React.MouseEvent, tab.path);
                      }
                    }}
                  >
                    <X
                      className={`h-4 w-4 rounded-full border p-[2px] ${activeTab === tab.path ? "border-[#808080] text-[#808080]" : "bg-transparent"}`}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(TabNavigation);
