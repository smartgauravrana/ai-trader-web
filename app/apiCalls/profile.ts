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
  data: { metadata: OnboardingRequest }
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
