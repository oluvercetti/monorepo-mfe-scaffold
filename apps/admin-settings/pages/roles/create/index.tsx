"use client";

import { Card } from "@repo/ui/src/components/ui/card";
import RoleManagement from "../../../components/roles/RoleManagement";

export default function CreateRole() {
  return (
    <Card className="border-0 p-10">
      <RoleManagement />
    </Card>
  );
}
