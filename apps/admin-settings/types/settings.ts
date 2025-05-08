import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  role: z.string(),
  isActive: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const roleSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  permissions: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const systemSettingsSchema = z.object({
  siteName: z.string(),
  maintenanceMode: z.boolean(),
  allowUserRegistration: z.boolean(),
  defaultUserRole: z.string(),
  sessionTimeout: z.number(),
  maxLoginAttempts: z.number(),
  emailSettings: z.object({
    smtpHost: z.string(),
    smtpPort: z.number(),
    smtpUser: z.string(),
    smtpPassword: z.string(),
    senderEmail: z.string(),
  }),
});

export type User = z.infer<typeof userSchema>;
export type Role = z.infer<typeof roleSchema>;
export type SystemSettings = z.infer<typeof systemSettingsSchema>;
