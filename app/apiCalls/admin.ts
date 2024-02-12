import { loginRequest } from "@/schemas/login-form";
import { apiCallV2 } from "../actions/actions";
import { DashboardData } from "@/types/Dashboard";
import { APIResponse } from "@/types/APIResponse";
import { User } from "@/models/User";

export const inviteAction = async (data: loginRequest) => {
  return apiCallV2({
    endpoint: "/api/admin/invite-user",
    data,
    method: "POST",
  });
};

export const getDashboardData = async (): Promise<
  APIResponse<DashboardData>
> => {
  return apiCallV2({
    endpoint: "/api/admin/dashboard",
  });
};

export const getUsers = async (): Promise<APIResponse<User[]>> => {
  return apiCallV2({
    endpoint: "/api/users",
  });
};
