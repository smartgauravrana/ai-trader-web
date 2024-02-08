import { loginRequest } from "@/schemas/login-form";
import { apiCallV2 } from "../actions/actions";

export const loginAction = async (data: loginRequest) => {
  return apiCallV2({
    endpoint: "/api/login",
    data,
    method: "POST",
  });
};
