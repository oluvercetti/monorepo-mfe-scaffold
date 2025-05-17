import { SearchIcon } from "lucide-react";

export const AdminHeader = () => {
  return (
    <div className="mb-2 flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold">Admin Settings</h1>
        <select className="rounded border px-3 py-2 text-sm min-w-[184px]">
          <option value="1">All Entities</option>
        </select>
      </div>

      <div className="relative flex basis-[10%] items-center">
        <i className="absolute left-1 top-1/2 ml-1 -translate-y-1/2 transform">
          <SearchIcon className="text-textSecondary h-4 w-4" />
        </i>
        <input
          type="search"
          placeholder="Search"
          className="min-w-[348px] border border-[#F5F5F5] bg-[#FCFCFD] py-2 pl-8 text-[14px] leading-[18px] text-black placeholder:text-black"
        />
      </div>
    </div>
  );
};
