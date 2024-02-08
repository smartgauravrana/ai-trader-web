import { z } from "zod";
export const loginFormSchema = z.object({
  phone: z
    .string()
    .min(10, "It should be of 10 digits")
    .max(10, "It should be of 10 digits"),
  password: z.string().nonempty("It cannot be empty"),
});

export type loginRequest = z.infer<typeof loginFormSchema>;
