"use client";

import { useState } from "react";

import { Button } from "@repo/ui/src/components/ui/button";
import { EmptyState } from "@repo/ui/src/components/ui/empty-state";
import { SearchableList } from "@repo/ui/src/components/ui/list";
import { ScrollArea } from "@repo/ui/src/components/ui/scroll-area";
import { Separator } from "@repo/ui/src/components/ui/separators";
import { cn } from "@repo/ui/src/lib/utils";
import { PermissionType, modules, permissionList } from "./config";
const emptyStateIcon = "/icons/empty.svg";

export default function Permissions({ movedPermissions, setMovedPermissions }) {
  const [selectedItems, setSelectedItems] = useState<PermissionType[]>([]);
  const [selectedModuleId, setSelectedModuleId] = useState<string>("");
  const [permissions, setPermissions] =
    useState<PermissionType[]>(permissionList);
  const handleModuleSelect = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    // Filter permissions based on selected module
    // setPermissions(permissionList.filter(p => p.moduleId === moduleId));
  };
  const handleSelectedPermissions = (item, checked) => {
    if (checked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((val) => val.id !== item.id));
    }
  };
  const moveSelected = () => {
    const newPermissions = selectedItems.filter(
      (item) => !movedPermissions.some((existing) => existing.id === item.id)
    );
    setMovedPermissions([...movedPermissions, ...newPermissions]);
  };

  const deleteMovedPermission = (item) => {
    const _res = movedPermissions.filter((val) => val.id !== item.id);
    setMovedPermissions(_res);
  };
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
    const searchTermLower = searchTerm.toLowerCase();
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchTermLower)
    );
    setItems(filtered);
  };

  const filteredPermissions = (searchTerm) =>
    filterPermissionsBySearch(
      permissions,
      searchTerm,
      setPermissions,
      permissionList
    );

  const filterMovedPermissions = (searchTerm) =>
    filterPermissionsBySearch(
      movedPermissions,
      searchTerm,
      setMovedPermissions,
      movedPermissions
    );
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-bold">Permissions</h2>
      <div className="flex rounded-md border">
        <div className="w-3/5 p-4">
          <div className="">
            <div className="pb-2 pe-4">
              <h3 className="text-md font-bold">Permission List</h3>
            </div>
            <Separator className="mb-6 mt-2" />

            <div className="flex space-x-4">
              <div className="w-2/5">
                <h3 className="text-md mb-4 pe-4 font-bold">Modules</h3>
                <ScrollArea className="h-[630px]">
                  <div className="space-y-4">
                    {modules.map((module) => (
                      <div
                        key={module.id}
                        onClick={() => handleModuleSelect(module.id)}
                        className={cn(
                          "cursor-pointer rounded-lg border p-2 px-4 text-sm font-bold",
                          selectedModuleId === module.id
                            ? "bg-primary-100 border-primary-600 text-primary-600"
                            : "hover:bg-primary-100"
                        )}
                      >
                        {module.name}{" "}
                        {selectedModuleId === module.id && (
                          <span>{"(3/10)"}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <div className="border-l">
                <div className="h-full">
                  <div
                    className={cn(
                      "pb-4",
                      permissions.length ? "border-b" : "h-full"
                    )}
                  >
                    <SearchableList
                      searchPlaceholder="Search permission list by permission title"
                      header="Related Permissions"
                      onSearch={(value) => filteredPermissions(value)}
                      showCheckbox
                      showSelectedCount
                      selectedItems={selectedItems.map((val) => val.id)}
                      onCheckChange={(item, checked) =>
                        handleSelectedPermissions(item, checked)
                      }
                      showHeader
                      className="px-6"
                      emptyStateComponent={
                        <EmptyState
                          title="No Related Permissions"
                          subtitle="No related permissions found. Select a permission from the list to view related permissions."
                          image={`${emptyStateIcon}`}
                        />
                      }
                      items={permissions}
                      scrollAreaClassName="h-[500px]"
                    />
                  </div>
                  {permissions.length ? (
                    <div className="flex items-center justify-end space-x-2 p-6">
                      <Button
                        disabled={selectedItems.length ? false : true}
                        variant="outline"
                        className="rounded-md px-4 py-2"
                        onClick={() => setSelectedItems([])}
                      >
                        Unselect All
                      </Button>
                      <Button
                        disabled={selectedItems.length ? false : true}
                        variant="default"
                        className="bg-primary-600 rounded-md px-4 py-2 text-white"
                        onClick={() => moveSelected()}
                      >
                        Move Selected
                      </Button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 border-l px-4 py-6">
          <SearchableList
            onDelete={(item) => deleteMovedPermission(item)}
            onSearch={(value) => filterMovedPermissions(value)}
            showCheckbox={false}
            header="Selected Permissions"
            showSelectedCount={true}
            selectedItems={movedPermissions.map((val) => val.id)}
            showHeader
            searchPlaceholder="Search permission list by permission title"
            scrollAreaClassName="h-[600px]"
            emptyStateComponent={
              <EmptyState
                className="flex-1 bg-neutral-100"
                title="No Related Permissions"
                subtitle="No related permissions found. Select a permission from the list to view related permissions."
                image={`${emptyStateIcon}`}
              />
            }
            items={movedPermissions}
          />
        </div>
      </div>
    </div>
  );
}
