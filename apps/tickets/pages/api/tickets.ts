import { repoAxiosInstance } from "@repo/shared";
import { Ticket, createTicketSchema } from "../../types/ticket";
import { z } from "zod";

const BASE_URL = "/api/tickets";

export const ticketsApi = {
  getAll: async () => {
    const response = await repoAxiosInstance.get<Ticket[]>(BASE_URL);
    return response.data;
  },

  getById: async (id: string) => {
    const response = await repoAxiosInstance.get<Ticket>(`${BASE_URL}/${id}`);
    return response.data;
  },

  create: async (data: z.infer<typeof createTicketSchema>) => {
    const response = await repoAxiosInstance.post<Ticket>(BASE_URL, data);
    return response.data;
  },

  update: async (id: string, data: Partial<Ticket>) => {
    const response = await repoAxiosInstance.patch<Ticket>(
      `${BASE_URL}/${id}`,
      data
    );
    return response.data;
  },

  delete: async (id: string) => {
    await repoAxiosInstance.delete(`${BASE_URL}/${id}`);
  },
};
