"use client";

import { useTicketsStore } from "../../stores/tickets-store";
import { TicketStatus } from "../../types/ticket";

export default function TicketsPage() {
  const { filters, setStatusFilter, setSearchFilter } = useTicketsStore();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tickets</h1>
        <button
          onClick={() => {}}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
        >
          Create Ticket
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search tickets..."
          className="border rounded-md px-3 py-2 w-64"
          value={filters.search}
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <select
          value={filters.status}
          onChange={(e) =>
            setStatusFilter(
              e.target.value as
                | (typeof TicketStatus)[keyof typeof TicketStatus]
                | "all"
            )
          }
          className="border rounded-md px-3 py-2"
        >
          <option value="all">All Status</option>
          {Object.values(TicketStatus).map((status) => (
            <option key={status} value={status}>
              {status.replace("_", " ").toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Create Ticket Modal would go here */}
    </div>
  );
}
