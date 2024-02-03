import React from "react";
import { ProfileForm } from "./form";

type Props = {};

function OnboardNewCustomer({}: Props) {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
      <div className="max-w-screen-md mx-auto  border-solid border-2 rounded-md p-4 bg-white">
        <ProfileForm />
      </div>
    </div>
  );
}

export default OnboardNewCustomer;
