import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui";

export default function AdminSettingsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Admin Settings</h1>

        <Tabs defaultValue="general" className="w-full">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <div className="p-4 border rounded-lg mt-4">
              <h2 className="text-2xl font-semibold mb-4">General Settings</h2>
              <Button>Save Changes</Button>
            </div>
          </TabsContent>
          <TabsContent value="security">
            <div className="p-4 border rounded-lg mt-4">
              <h2 className="text-2xl font-semibold mb-4">Security Settings</h2>
              <Button>Update Security</Button>
            </div>
          </TabsContent>
          <TabsContent value="notifications">
            <div className="p-4 border rounded-lg mt-4">
              <h2 className="text-2xl font-semibold mb-4">
                Notification Preferences
              </h2>
              <Button>Save Preferences</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
