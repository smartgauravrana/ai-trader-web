import React from "react";

import AdminProtected from "@/components/admin-protected";
import { getSession } from "../actions/session";
import CustomersList from "@/components/customers-list";

export default async function CustomersPage() {
  const { user } = await getSession();

  return (
    <div className="container mx-auto py-10">
      <AdminProtected user={user}>
        <CustomersList />
      </AdminProtected>
    </div>
  );
}
