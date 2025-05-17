"use client";

import { Button } from "@repo/ui/src/components/ui/button";
import { Input, Textarea } from "@repo/ui/src/components/ui/forminputs";
import { MultiSelect } from "@repo/ui/src/components/ui/multi-select";
import { Separator } from "@repo/ui/src/components/ui/separators";
import { useEffect, useState } from "react";
import { allUsers, DialogProps, modeObj, PermissionType, User } from "./config";
import CustomDialog from "./CustomDialog";
import Permissions from "./Permissions";

export default function RoleManagement() {
  const [movedPermissions, setMovedPermissions] = useState<PermissionType[]>(
    []
  );
  const [isActionComplete, setIsActionComplete] = useState(false);
  const [roleName, setRoleName] = useState("Incident Manager");
  const [roleDescription, setRoleDescription] = useState(
    "Incoming incident manager for the system to manage all incidents"
  );
  const [mode, setMode] = useState("Create");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([
    { value: "1", label: "Daniel Joseph" },
    { value: "2", label: "Moses Ladejobi" },
  ]);
  const [dialogProps, setDialogProps] = useState<DialogProps>(
    modeObj["create"]
  );

  const handleActionBtnClick = () => {
    const payload = {
      roleName,
      roleDescription,
      selectedUsers,
      movedPermissions,
    };

    console.log(payload);

    // Simulate API call or action
    setTimeout(() => {
      setMode("status");
      setIsActionComplete(true);
    }, 500);
  };

  const handleComplete = () => {
    // Reset everything
    setRoleName("");
    setRoleDescription("");
    setSelectedUsers([]);
    setMode("create");
    setIsActionComplete(false);
  };

  useEffect(() => {
    if (isActionComplete) {
      setDialogProps({
        ...modeObj.status,
        footer: (
          <Button className="flex-1" variant="default" onClick={handleComplete}>
            Done
          </Button>
        ),
      });
    } else {
      setDialogProps({ ...modeObj[mode.toLowerCase()] });
    }
  }, [mode, isActionComplete]);

  return (
    <div className="space-y-6">
      <h1 className="text-md border-b pb-4 font-bold">Create Role</h1>

      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            placeholder="Enter role name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <Textarea
            id="description"
            value={roleDescription}
            onChange={(e) => setRoleDescription(e.target.value)}
            placeholder="Enter the description of this role"
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Users</label>
          <MultiSelect
            options={allUsers}
            onValueChange={(value) =>
              setSelectedUsers(
                allUsers.filter((user) => value.includes(user.value))
              )
            }
            value={selectedUsers.map((user) => user.value)}
            className="w-full"
            defaultValue={selectedUsers.map((user) => user.value)}
            placeholder="Select options"
            variant="inverted"
            animation={2}
            maxCount={6}
          />
        </div>
      </div>
      <Separator />
      <Permissions
        movedPermissions={movedPermissions}
        setMovedPermissions={setMovedPermissions}
      />
      <Separator />
      <div className="flex items-center justify-end space-x-2">
        <Button variant="outline" className="rounded-md px-4 py-2">
          Cancel
        </Button>
        <CustomDialog
          triggerText={dialogProps.triggerText}
          title={dialogProps.title}
          description={dialogProps.description}
          actionBtnText={dialogProps.actionBtnText}
          closeBtnText={dialogProps.closeBtnText}
          footer={dialogProps.footer}
          actionBtnClick={() => handleActionBtnClick()}
        />
      </div>
    </div>
  );
}
