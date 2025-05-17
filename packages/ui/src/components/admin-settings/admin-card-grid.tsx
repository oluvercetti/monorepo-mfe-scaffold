import React from "react";

interface AdminCardGridProps {
  children: React.ReactNode;
}

const AdminCardGrid = ({ children }: AdminCardGridProps) => {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">{children}</div>
  );
};

export { AdminCardGrid };
