"use client";

import { useQuery } from "@tanstack/react-query";
import { ticketsApi } from "../api/tickets";
import { useTicketsStore } from "../stores/tickets-store";
import { useState } from "react";
import { Ticket, TicketPriority, TicketStatus } from "../types/ticket";
import { format } from "date-fns";

export default function TicketsPage() {
  const { filters, setStatusFilter, setSearchFilter } = useTicketsStore();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const { data: tickets = [], isLoading } = useQuery({
    queryKey: ["tickets"],
    queryFn: ticketsApi.getAll,
  });

  const filteredTickets = tickets.filter((ticket) => {
    const matchesStatus =
      filters.status === "all" || ticket.status === filters.status;
    const matchesSearch =
      ticket.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      ticket.description.toLowerCase().includes(filters.search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  if (isLoading) {
    return <div>Loading tickets...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tickets</h1>
        <button
          onClick={() => setIsCreateModalOpen(true)}
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
            setStatusFilter(e.target.value as TicketStatus | "all")
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

      <div className="grid gap-4">
        {filteredTickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>

      {/* Create Ticket Modal would go here */}
    </div>
  );
}

function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold">{ticket.title}</h3>
        <div className="flex gap-2">
          <span
            className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(
              ticket.priority
            )}`}
          >
            {ticket.priority}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
              ticket.status
            )}`}
          >
            {ticket.status.replace("_", " ")}
          </span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-2">{ticket.description}</p>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>
          Created: {format(new Date(ticket.createdAt), "MMM d, yyyy")}
        </span>
        {ticket.assignedTo && <span>Assigned to: {ticket.assignedTo}</span>}
      </div>
    </div>
  );
}

function getPriorityColor(priority: keyof typeof TicketPriority) {
  const colors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-blue-100 text-blue-800",
    high: "bg-orange-100 text-orange-800",
    urgent: "bg-red-100 text-red-800",
  };
  return colors[priority];
}

function getStatusColor(status: keyof typeof TicketStatus) {
  const colors = {
    open: "bg-blue-100 text-blue-800",
    in_progress: "bg-yellow-100 text-yellow-800",
    resolved: "bg-green-100 text-green-800",
    closed: "bg-gray-100 text-gray-800",
  };
  return colors[status];
}
