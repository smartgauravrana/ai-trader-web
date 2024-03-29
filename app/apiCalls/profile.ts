// import { apiCall } from "@/lib/api-call";

import { OnboardingRequest } from "@/schemas/onboarding-form";
import { apiCallV2 } from "../actions/actions";

export const getCurrentUser = async () => {
  return apiCallV2({
    endpoint: "/api/users/me",
  });
};

export const onboardingStep = async (
  userId: string,
  data: { email: string; metadata: any }
) => {
  return apiCallV2({
    endpoint: `/api/users/${userId}`,
    data,
    method: "PUT",
  });
};

export const getBrokerLoginUrl = async () => {
  return apiCallV2({
    endpoint: "/api/broker/login-url",
  });
};

export const pauseTrades = async (userId: string, isPaused: boolean) => {
  return apiCallV2({
    endpoint: `/api/users/${userId}`,
    data: {
      pauseTrades: isPaused,
    },
    method: "PUT",
  });
};
