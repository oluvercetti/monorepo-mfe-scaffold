import dynamic from "next/dynamic";

const RemoteTicketsApp = dynamic(() => import("tickets/TicketsApp"), { ssr: false });

export default function TicketsRoute() {
  return <RemoteTicketsApp />;
}
