import { Customer, CustomerModel } from "@/models/Customer";
import connectDB from "./db";
import { PaginatedResponse } from "@/types/PaginatedResponse";

interface Filter {
  page?: number;
  limit?: number;
}

export async function getCustomersList(
  filter: Filter = {}
): Promise<PaginatedResponse<Customer>> {
  try {
    await connectDB();

    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;

    const customers = await CustomerModel.find().skip(skip).limit(limit).lean();

    const total = await CustomerModel.countDocuments({}).lean();

    return {
      data: customers,
      page,
      limit,
      total,
    };
  } catch (error) {
    return { error } as any;
  }
}
