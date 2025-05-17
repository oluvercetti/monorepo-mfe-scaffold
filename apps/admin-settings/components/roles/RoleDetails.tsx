"use client";

import { Button } from "@repo/ui/src/components/ui/button";
import { EmptyState } from "@repo/ui/src/components/ui/empty-state";
import { SearchableList } from "@repo/ui/src/components/ui/list";
import { Separator } from "@repo/ui/src/components/ui/separators";
import { useState } from "react";
import { PermissionType, permissionList } from "./config";
const emptyStateIcon = "/icons/empty.svg";

export default function RoleDetails({ id }) {
  const [permissions, setPermissions] =
    useState<PermissionType[]>(permissionList);

  const filterPermissionsBySearch = (
    items,
    searchTerm,
    setItems,
    originalItems
  ) => {
    if (!searchTerm) {
      setItems(originalItems);
      return;
    }
    console.log(id);
    const searchTermLower = searchTerm.toLowerCase();
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchTermLower)
    );
    setItems(filtered);
  };
  const filterAssignedPermissions = (searchTerm) =>
    filterPermissionsBySearch(
      permissions,
      searchTerm,
      setPermissions,
      permissionList
    );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <h3 className="text-md font-bold">Role Name</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline">Edit</Button>
          <Button variant="destructive">Deactivate Role</Button>
        </div>
      </div>

      <p className="text-xs">
        Responsible for managing and resolving incidents efficiently to minimize
        business disruptions.
      </p>
      <Separator />

      <div className="">
        <SearchableList
          className="rounded-md border px-6 py-4"
          onSearch={(value) => filterAssignedPermissions(value)}
          showCheckbox={false}
          showHeader
          searchPlaceholder="Search permission list by permission title"
          scrollAreaClassName="min-h-[300px]"
          emptyStateComponent={
            <EmptyState
              className="flex-1 bg-neutral-100"
              title="No Related Permissions"
              subtitle="No related permissions found. Select a permission from the list to view related permissions."
              image={`${emptyStateIcon}`}
            />
          }
          items={permissions}
        />
      </div>
    </div>
  );
}
