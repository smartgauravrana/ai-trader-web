import { z } from "zod";
export const InviteFormSchema = z.object({
  name: z.string().min(1, "It should be of minimum 1 digits"),
  phone: z
    .string()
    .min(10, "It should be of 10 digits")
    .max(10, "It should be of 10 digits"),
  password: z.string().nonempty("It cannot be empty"),
});

export type InviteRequest = z.infer<typeof InviteFormSchema>;
