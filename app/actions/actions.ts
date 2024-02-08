"use server";
import { cookies } from "next/headers";

interface RequestConfig<T> {
  endpoint: string;
  method?: string;
  headers?: Record<string, string>;
  data?: T;
}

const { API_URL } = process.env;
export async function apiCallV2<T>(
  requestConfig: RequestConfig<T>
): Promise<any> {
  const { endpoint, method = "GET", headers = {}, data } = requestConfig;
  const cookieStore = cookies();
  const cookie = cookieStore.get("jwt");

  try {
    const response = await fetch(API_URL + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(cookie ? { Cookie: `${cookie.name}=${cookie.value}` } : {}),
        ...headers,
      },
      body: data ? JSON.stringify(data) : undefined,
      credentials: "include",
    });

    if (!response.ok) {
      console.error(`Request failed with status code ${response.status}`);
      const data = await response.json();
      console.log("error________________: ", data);
      throw new Error(data?.message || data?.error || "Something went wrong!");
    }

    const cookieRes = response.headers.getSetCookie();
    if (cookieRes.length) {
      const jwtCookie = cookieRes[0].split(";")[0];

      const val = jwtCookie.split("=")[1];
      cookieStore.set("jwt", val, { httpOnly: true, path: "/" });
    }
    return await response.json();
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
}
