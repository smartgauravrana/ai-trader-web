import { CustomerModel } from "@/models/Customer";
import connectDB from "./db";

interface Filter {
  page?: number;
  limit?: number;
}

export async function getCustomersList(filter: Filter = {}) {
  try {
    await connectDB();

    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;

    const customers = await CustomerModel.find()
      .skip(skip)
      .limit(limit)
      .lean()
      .exec();

    const total = await CustomerModel.countDocuments({});

    return {
      data: customers,
      page,
      limit,
      total,
    };
  } catch (error) {
    return { error };
  }
}
