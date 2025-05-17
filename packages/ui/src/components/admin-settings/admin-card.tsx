import Link from "next/link";
import React from "react";

interface AdminCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const AdminCard = ({ title, description, icon, href }: AdminCardProps) => {
  return (
    <Link
      href={href}
      className="block cursor-pointer rounded-lg border bg-white p-6 shadow-sm transition hover:bg-[#f3f3f397] hover:shadow-none hover:border-transparent"
    >
      <div className="flex flex-col gap-2">
        <div className="mb-2">{icon}</div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </Link>
  );
};

export { AdminCard };
