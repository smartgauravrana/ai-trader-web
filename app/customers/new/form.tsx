"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CustomerStatus } from "@/types/Customer";

const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  phone: z.string().nonempty("Phone is required"),
  email: z.string().email("email is required"),
  fyersId: z.string().nonempty("Fyers Account Id is required"),
  fyersAppId: z.string().nonempty("Fyers App Id is required"),
  fyersSecretId: z.string().nonempty("Fyers Secret Id is required"),
  // botToken: z.string().optional(),
  fyersPin: z.string().nonempty("Fyers Pin is required"),
  fyersRedirectUrl: z.string().nonempty("Fyers Redirect Url is required"),
  // telegramBotToken: z.string().optional(),
  // telegramNotificationChannel: z.string().optional(),
  // status: z.string().optional(),
});
type InputFieldType = { name: string; label: string; placeholder: string };
const inputFields: InputFieldType[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "",
  },
  {
    name: "fyersId",
    label: "Fyers Id",
    placeholder: "",
  },
  {
    name: "fyersAppId",
    label: "Fyers App Id",
    placeholder: "",
  },
  {
    name: "fyersSecretId",
    label: "Fyers Secret Id",
    placeholder: "",
  },
  {
    name: "fyersPin",
    label: "Fyers Pin",
    placeholder: "",
  },
  {
    name: "fyersRedirectUrl",
    label: "Fyers Redirect Url",
    placeholder: "",
  },
];

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      fyersId: "",
      fyersAppId: "",
      fyersSecretId: "",
      // botToken: "",
      fyersPin: "",
      fyersRedirectUrl: "",
      // telegramBotToken: "",
      // telegramNotificationChannel: "",
      // status: CustomerStatus.ACTIVE,
      // status: CustomerStatus.ACTIVE,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    try {
      const response = await fetch("/api/customers", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      // Handle response if necessary
      const data = await response.json();
      // ...
    } catch (error) {
      // Capture the error message to display to the user

      console.error(error);
    } finally {
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {inputFields.map((input, idx) => (
          <FormField
            key={idx}
            control={form.control}
            name={input.name as any}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{input.label}</FormLabel>
                <FormControl>
                  <Input placeholder={input.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
