import { z } from "zod";

export const loginSchema = z.object({
  emailAddress: z.string().nonempty("email is required").email("Invalid email address"),
  password: z
    .string()
    .trim()
    .nonempty("password is required"),

});
