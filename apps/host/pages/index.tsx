import { Button } from "@repo/ui";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8">Microfrontend Demo</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Tickets</h2>
            <p className="text-muted-foreground mb-4">
              Manage and create support tickets
            </p>
            <Link href="http://localhost:3001" passHref>
              <Button>Open Tickets App</Button>
            </Link>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Admin Settings</h2>
            <p className="text-muted-foreground mb-4">
              Configure system settings and preferences
            </p>
            <Link href="http://localhost:3003" passHref>
              <Button>Open Admin Settings</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
