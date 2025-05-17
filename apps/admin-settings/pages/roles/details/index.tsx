"use client";

import { Card } from "@repo/ui/src/components/ui/card";
import RoleDetails from "../../../components/roles/RoleDetails";

export default function CreateRole() {
  return (
    <Card className="border-0 p-10">
      <RoleDetails id={2} />
    </Card>
  );
}
