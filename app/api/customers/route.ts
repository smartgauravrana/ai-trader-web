import { getCustomersList } from "@/lib/customers-db";
import connectDB from "@/lib/db";
import { createErrorResponse } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await connectDB();

    const page_str = request.nextUrl.searchParams.get("page");
    const limit_str = request.nextUrl.searchParams.get("limit");

    const page = page_str ? parseInt(page_str, 10) : 1;
    const limit = limit_str ? parseInt(limit_str, 10) : 10;

    const { data, total, error } = await getCustomersList({ page, limit });

    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      data,
      total,
    };
    return NextResponse.json(json_response);
  } catch (error: any) {
    return createErrorResponse(error.message, 500);
  }
};
