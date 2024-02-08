// import { apiCall } from "@/lib/api-call";

import { apiCallV2 } from "../actions/actions";

export const getCurrentUser = async () => {
  return apiCallV2({
    endpoint: "/api/users/me",
  });
};
