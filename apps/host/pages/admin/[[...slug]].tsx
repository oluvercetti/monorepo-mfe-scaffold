import dynamic from "next/dynamic";

const RemoteAdminApp = dynamic(() => import("adminSettings/AdminApp"), { ssr: false });

export default function AdminRoute() {
  return <RemoteAdminApp />;
}
