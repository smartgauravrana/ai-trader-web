import React from "react";

type Props = {};

function Customers({}: Props) {
  return <div>Customers</div>;
}

export default Customers;
// import { getCustomersList } from "@/lib/customers-db";
// import { Payment, columns } from "./columns";
// import { DataTable } from "./data-table";
// import { PaginatedResponse } from "@/types/PaginatedResponse";
// import { Customer } from "@/models/Customer";

// async function getData(): Promise<PaginatedResponse<Customer>> {
//   // Fetch data from your API here.
//   const data = await getCustomersList();
//   console.log("data: ", data);
//   return data;
//   // return [
//   //   {
//   //     id: "728ed52f",
//   //     amount: 100,
//   //     status: "pending",
//   //     email: "m@example.com",
//   //   },
//   //   // ...
//   // ];
// }

// export default async function CustomersPage() {
//   const data = await getData();

//   return (
//     <div className="container mx-auto py-10">
//       <DataTable columns={columns} data={data.data} />
//     </div>
//   );
// }
