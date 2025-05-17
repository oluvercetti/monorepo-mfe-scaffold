"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import AllMenuIcon from "../../public/assets/icons/all-menu";
import NotificationIcon from "../../public/assets/icons/notification";
import SearchIcon from "../../public/assets/icons/search";
import UserIcon from "../../public/assets/icons/user";

// Utility function to get all values from PAGE_ROUTES

// Helper function to check if a path is or belongs to a specific route section
const isRouteActive = (currentPath: string | null, linkPath: string): boolean => {
  if (!currentPath) return false;
  if (currentPath === linkPath) return true;
  // Check if current path is a child of the link path
  return currentPath.startsWith(`${linkPath}/`);
};

// Get parent path for a given path

// The interface is used for type checking, even if some props are used indirectly
/* eslint-disable no-unused-vars */
interface NavbarProps {
  onNavigate: (_path: string, _label: string) => void;
  tabs?: Array<{ path: string; label: string }>;
  onTabSelect?: (_path: string) => void;
}
/* eslint-enable no-unused-vars */

export default function Navbar({ onNavigate }: Readonly<NavbarProps>) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/workbench", label: "Workbench" },
    { href: "/tickets", label: "Tickets" },
    { href: "/service-catalogue", label: "Service Catalogue" },
    { href: "/knowledge-management", label: "Knowledge Management" },
    { href: "/admin", label: "Admin Settings" },
  ];
  const pathname = usePathname();

  const handleMenuClick = (e: React.MouseEvent, path: string, label: string) => {
    // Prevent the default navigation behavior
    e.preventDefault();

    // Always use onNavigate to handle navigation
    // Let the host layout component manage tabs
    onNavigate(path, label);
  };

  return (
    <nav className="border-borderColor flex items-center justify-between border-b bg-[#FFFFFF] px-7 py-4">
      <Link
        href="/"
        className="mr-8 flex items-center"
        onClick={(e) => handleMenuClick(e, "/", "Home")}
      >
        <Image
          src="/assets/images/logo.png"
          alt="Semantix Logo"
          width={100}
          height={24}
          priority
          quality={100}
        />
      </Link>

      <div className="relative flex basis-[10%] items-center">
        <i className="absolute left-1 top-1/2 ml-1 -translate-y-1/2 transform">
          <SearchIcon />
        </i>
        <input
          type="search"
          placeholder="Search for anything..."
          className="text-textSecondary placeholder:text-textSecondary min-w-[300px] rounded-lg border border-[#F5F5F5] bg-[#FCFCFD] py-2 pl-12 text-[14px] leading-[18px]"
        />
      </div>

      <div className="flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleMenuClick(e, link.href, link.label)}
            className={`hover:text-backgroundPrimary rounded-md p-2 text-center text-[14px] font-normal leading-[18px] ${isRouteActive(pathname, link.href) ? "bg-baz-primary100 text-[#1659E6]" : "text-textPrimary"}`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-8">
        <button className="text-textSecondary">
          <NotificationIcon />
        </button>
        <button className="text-backgroundPrimary">
          <AllMenuIcon />
        </button>
        <button className="text-backgroundPrimary">
          <UserIcon />
        </button>
      </div>
    </nav>
  );
}
