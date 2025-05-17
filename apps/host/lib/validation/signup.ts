import { z } from "zod";

export const loginSchema = z.object({
  emailAddress: z.string().nonempty("email is required").email("Invalid email address"),
  password: z
    .string()
    .trim()
    .min(8, "password must be at least 8 characters")
    .regex(/[a-z]+/, 'must contain one lowercase character')
    .regex(/[A-Z]+/, 'must contain one uppercase character')
    .regex(/[0-9]+/, 'must contain one number')
    .regex(/[@$!%*?&]+/, 'must contain one special character')
    .regex(/^\S*$/, 'must not contain spaces')
    .nonempty("password is required"),
    firstName: z.string().min(3, 'minimum of 3 characters').nonempty("first name is required"),
    lastName: z.string().min(3, 'minimum of 3 characters').nonempty("last name is required"),
    gender: z.enum([' Male', 'Female'])
});