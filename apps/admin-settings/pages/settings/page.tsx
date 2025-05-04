"use client";

import { useQuery } from "@tanstack/react-query";
import { useSettingsStore } from "../stores/settings-store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui";
import { Settings, Users, Shield, Mail } from "lucide-react";

export default function AdminSettingsPage() {
  const { activeTab, setActiveTab } = useSettingsStore();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as any)}
      >
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Users
          </TabsTrigger>
          <TabsTrigger value="roles" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Roles
          </TabsTrigger>
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <GeneralSettings />
        </TabsContent>
        <TabsContent value="users">
          <UserSettings />
        </TabsContent>
        <TabsContent value="roles">
          <RoleSettings />
        </TabsContent>
        <TabsContent value="email">
          <EmailSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function GeneralSettings() {
  const { pendingChanges, setPendingChange } = useSettingsStore();

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div>
          <label className="text-sm font-medium">Site Name</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md"
            value={pendingChanges.siteName || ""}
            onChange={(e) => setPendingChange("siteName", e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="maintenanceMode"
            checked={pendingChanges.maintenanceMode || false}
            onChange={(e) =>
              setPendingChange("maintenanceMode", e.target.checked)
            }
          />
          <label htmlFor="maintenanceMode">Maintenance Mode</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="allowUserRegistration"
            checked={pendingChanges.allowUserRegistration || false}
            onChange={(e) =>
              setPendingChange("allowUserRegistration", e.target.checked)
            }
          />
          <label htmlFor="allowUserRegistration">Allow User Registration</label>
        </div>
      </div>
    </div>
  );
}

function UserSettings() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">User Management</h2>
      {/* User management content */}
    </div>
  );
}

function RoleSettings() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Role Management</h2>
      {/* Role management content */}
    </div>
  );
}

function EmailSettings() {
  const { pendingChanges, setPendingChange } = useSettingsStore();
  const emailSettings = pendingChanges.emailSettings || {};

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div>
          <label className="text-sm font-medium">SMTP Host</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md"
            value={emailSettings.smtpHost || ""}
            onChange={(e) =>
              setPendingChange("emailSettings", {
                ...emailSettings,
                smtpHost: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label className="text-sm font-medium">SMTP Port</label>
          <input
            type="number"
            className="w-full mt-1 p-2 border rounded-md"
            value={emailSettings.smtpPort || ""}
            onChange={(e) =>
              setPendingChange("emailSettings", {
                ...emailSettings,
                smtpPort: parseInt(e.target.value, 10),
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
