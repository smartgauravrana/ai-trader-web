import { z } from "zod";

const OnboardingFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  fyersId: z.string().nonempty(),
  fyersAppId: z.string().nonempty(),
  fyersSecretId: z.string().nonempty(),
});

export type OnboardingRequest = z.infer<typeof OnboardingFormSchema>;
export { OnboardingFormSchema };
