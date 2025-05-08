import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Ticket, TicketStatus } from "../types/ticket";

type TicketStatusValue =
  | (typeof TicketStatus)[keyof typeof TicketStatus]
  | "all";

interface TicketsState {
  filters: {
    status: TicketStatusValue;
    search: string;
  };
  setStatusFilter: (status: TicketStatusValue) => void;
  setSearchFilter: (search: string) => void;
  selectedTicket: Ticket | null;
  setSelectedTicket: (ticket: Ticket | null) => void;
}

export const useTicketsStore = create<TicketsState>()(
  devtools(
    (set) => ({
      filters: {
        status: "all",
        search: "",
      },
      setStatusFilter: (status) =>
        set((state) => ({
          filters: { ...state.filters, status },
        })),
      setSearchFilter: (search) =>
        set((state) => ({
          filters: { ...state.filters, search },
        })),
      selectedTicket: null,
      setSelectedTicket: (ticket) => set({ selectedTicket: ticket }),
    }),
    {
      name: "tickets-store",
    }
  )
);
