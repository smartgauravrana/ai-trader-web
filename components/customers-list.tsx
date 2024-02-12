import React from "react";
import { getUsers } from "@/app/apiCalls/admin";
import { columns } from "@/app/customers/columns";
import { DataTable } from "@/app/customers/data-table";

type Props = {};

async function CustomersList({}: Props) {
  const data = await getUsers();
  return <DataTable columns={columns} data={data.data} />;
}

export default CustomersList;
