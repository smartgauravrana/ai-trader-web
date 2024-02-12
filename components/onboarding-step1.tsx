"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { OnboardingFormSchema } from "@/schemas/onboarding-form";
import { onboardingStep } from "@/app/apiCalls/profile";
import { User } from "@/models/User";
import { useState } from "react";

const inputs = [
  {
    name: "email",
    label: "Email",
    placeholder: "steve.job99@gmail.com",
  },
  {
    name: "fyersId",
    label: "Fyers Id",
    placeholder: "AGHGHSG",
  },
  {
    name: "pin",
    label: "Pin",
    placeholder: "1234",
  },
  {
    name: "fyersAppId",
    label: "Fyers App ID",
    placeholder: "AGHGHSGH-100",
  },
  {
    name: "fyersSecretId",
    label: "Fyers Secret ID",
    placeholder: "secret3e",
  },
];

type Props = {
  user: User;
};

export function OnboardingStep1({ user }: Props) {
  const [isDisabled, setIsDisabled] = useState(Boolean(user.metadata));

  const form = useForm<z.infer<typeof OnboardingFormSchema>>({
    resolver: zodResolver(OnboardingFormSchema),
    defaultValues: {
      fyersAppId: user.metadata?.fyersAppId || "",
      fyersId: user.metadata?.fyersId || "",
      fyersSecretId: user.metadata?.fyersSecretId || "",
      email: user.email || "",
      pin: user.metadata?.pin || "",
    },
  });

  async function onSubmit(values: z.infer<typeof OnboardingFormSchema>) {
    try {
      const { email, name, ...metadata } = values;
      await onboardingStep(user?._id, { email, metadata });
      setIsDisabled(true);
    } catch (e) {
      alert("Wrong credentials");
    }
  }

  const onEdit = () => setIsDisabled(false);

  return (
    <Card className="w-full sm:w-[380px]">
      <CardHeader>
        <div className="flex justify-between">
          {" "}
          <CardTitle>Fill Fyer App Details</CardTitle>
          <Button onClick={onEdit} variant={"link"}>
            Edit
          </Button>
        </div>

        <CardDescription>Get it from fyers website.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {inputs.map((item, idx) => (
              <FormField
                control={form.control}
                key={idx}
                name={item.name as any}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item.label}</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isDisabled}
                        readOnly={isDisabled}
                        placeholder={item.placeholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <div className="text-right">
              <Button type="submit" disabled={isDisabled}>
                Save
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
