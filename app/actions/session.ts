import { User } from "@/models/User";
import { getCurrentUser } from "../apiCalls/profile";

export async function getSession() {
  try {
    const res = await getCurrentUser();
    return { user: res.data as User };
  } catch (e) {
    return { user: null };
  }
}
