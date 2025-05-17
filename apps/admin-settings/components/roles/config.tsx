import { Button } from "@repo/ui/src/components/ui/button";
import { ReactNode } from "react";
export type User = {
  value: string;
  label: string;
};

export type Module = {
  id: string;
  name: string;
};
export type PermissionType = {
  id: string;
  title: string;
  description: string;
};

export type DialogProps = {
  triggerText: string;
  title: string;
  description: string;
  footer?: ReactNode;
  closeBtnText: string;
  actionBtnText: string;
};
export const permissionList: PermissionType[] = [
  {
    description: "Allows users to see all incidents they have access to.",
    id: "1",
    title: "View Incidents",
  },
  {
    description: "Allows users to see all incidents on the system.",
    id: "2",
    title: "View All Incidents",
  },
  {
    description:
      "Provides access to view full details of an incident, including history and updates.",
    id: "3",
    title: "View Incident Details",
  },
  {
    description:
      "Provides access to view full details of an incident, including history and updates.",
    id: "4",
    title: "View Incident Details",
  },
  {
    description:
      "Provides access to view full details of an incident, including history and updates.",
    id: "5",
    title: "View Incident Details",
  },
  {
    description:
      "Provides access to view full details of an incident, including history and updates.",
    id: "6",
    title: "View Incident Details",
  },
  {
    description:
      "Provides access to view full details of an incident, including history and updates.",
    id: "7",
    title: "View Incident Details",
  },
];

export const selectedPermissionList: PermissionType[] = [
  {
    description: "Allows users to see all incidents they have access to.",
    id: "1",
    title: "View Incidents",
  },
  {
    description: "Allows users to see all incidents on the system.",
    id: "2",
    title: "View All Incidents",
  },
  {
    description:
      "Provides access to view full details of an incident, including history and updates.",
    id: "3",
    title: "View Incident Details",
  },
  {
    description:
      "Provides access to view full details of an incident, including history and updates.",
    id: "4",
    title: "View Incident Details",
  },
];

export const modeObj = {
  create: {
    triggerText: "Create",
    title: "Create Role",
    description: "Are you sure you want to create this role?",
    actionBtnText: "Create",
    closeBtnText: "Cancel",
    footer: null,
  },
  update: {
    triggerText: "Update",
    title: "Update Role",
    description: "Are you sure you want to update this role?",
    actionBtnText: "Update",
    closeBtnText: "Cancel",
    footer: null,
  },
  status: {
    triggerText: "Create",
    title: "Role Created",
    description: "You have successfully created this role.",
    actionBtnText: "",
    closeBtnText: "",
    footer: (
      <div className="flex items-center gap-2">
        <Button className="flex-1" variant="default">
          Done
        </Button>
      </div>
    ),
  },
};
export const allUsers: User[] = [
  { value: "1", label: "Daniel Joseph" },
  { value: "2", label: "Moses Ladejobi" },
  { value: "3", label: "John Doe" },
  { value: "4", label: "Jane Smith" },
  { value: "5", label: "Alice Johnson" },
  { value: "6", label: "Bob Brown" },
  { value: "7", label: "Charlie Davis" },
  { value: "8", label: "David Wilson" },
  { value: "9", label: "Eve Taylor" },
];
export const modules: Module[] = [
  { id: "1", name: "Administrator" },
  { id: "2", name: "Asset Management" },
  { id: "3", name: "repo AI" },
  { id: "4", name: "Capacity Management" },
  { id: "5", name: "Demand Management" },
  { id: "6", name: "General" },
  { id: "7", name: "Incident Management" },
  { id: "8", name: "Knowledge Base" },
  { id: "9", name: "Problem Management" },
  { id: "10", name: "Workbench" },
];
