"use client";
import React from "react";
import { BrokerDetails } from "./broker-details";
import { Button } from "./ui/button";
import { OnboardingStep1 } from "./onboarding-step1";
import { OnboardingStep2 } from "./onboarding-step2";
import useSWR from "swr";
import { getCurrentUser } from "@/app/apiCalls/profile";

function OnboardingSteps() {
  const { data, error, isLoading } = useSWR("/api/users/me", getCurrentUser);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <h2 className="mb-4">Please complete below steps to start growing!</h2>

      <div className="flex justify-around">
        <OnboardingStep1 user={data.data} />

        <OnboardingStep2 user={data.data} />
      </div>
    </div>
  );
}

export default OnboardingSteps;
