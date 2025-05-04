import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";

const Tickets = dynamic(() => import("tickets/Tickets"), {
  ssr: false,
  loading: () => <div>Loading Tickets...</div>,
});

export default function TicketsPage() {
  return (
    <div>

      <Link href="/" className="text-4xl font-bold mb-8">Microfrontend Dashboard</Link>
      <h1>Tickets</h1>
      <Suspense fallback={<div>Loading Tickets...</div>}>
        <Tickets />
      </Suspense>
    </div>
  );
}
