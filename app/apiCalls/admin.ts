import { loginRequest } from "@/schemas/login-form";
import { apiCallV2 } from "../actions/actions";

export const inviteAction = async (data: loginRequest) => {
  return apiCallV2({
    endpoint: "/api/admin/invite-user",
    data,
    method: "POST",
  });
};
