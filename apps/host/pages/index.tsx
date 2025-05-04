"use client";

import Link from "next/link";
import { Button } from "@repo/ui";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <p className="text-4xl font-bold mb-8">Microfrontend Dashboard</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-card rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Tickets</h2>
          <Link href="/tickets">
            <Button>Open Tickets</Button>
          </Link>
        </div>

        <div className="p-6 bg-card rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Admin Settings</h2>
          <Link href="/admin">
            <Button>Open Admin Settings</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
