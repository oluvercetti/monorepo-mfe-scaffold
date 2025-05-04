import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";

const AdminSettings = dynamic(() => import("adminSettings/AdminSettings"), {
  ssr: false,
  loading: () => <div>Loading Admin Settings...</div>,
});

export default function AdminPage() {
  return (
    <div>
      <Link href="/" className="text-4xl font-bold mb-8">
        Microfrontend Dashboard
      </Link>
      <h1>Admin Settings</h1>
      <Suspense fallback={<div>Loading Admin Settings...</div>}>
        <AdminSettings />
      </Suspense>
    </div>
  );
}
