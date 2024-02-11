import { z } from "zod";

const OnboardingFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().nonempty("Email is required"),
  fyersId: z.string().nonempty("Fyers Id is required"),
  fyersAppId: z.string().nonempty("Fyers App Id is required"),
  fyersSecretId: z.string().nonempty("Fyers Secret Id is required"),
  pin: z.string().nonempty("Pin is required"),
});

export type OnboardingRequest = z.infer<typeof OnboardingFormSchema>;
export { OnboardingFormSchema };
