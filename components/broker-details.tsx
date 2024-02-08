"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "@/schemas/login-form";
import { loginAction } from "@/app/apiCalls/login";
import { InviteFormSchema } from "@/schemas/invite";
import { inviteAction } from "@/app/apiCalls/admin";

export function BrokerDetails() {
  const form = useForm<z.infer<typeof InviteFormSchema>>({
    resolver: zodResolver(InviteFormSchema),
    defaultValues: {
      phone: "",
      password: "",
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof InviteFormSchema>) {
    try {
      await inviteAction(values);
      alert("User created successfully!");
      form.reset();
    } catch (e) {
      alert("Something went wrong!");
    }
  }
  return (
    <div className="grid gap-4 py-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Steve Jobs" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="93848xxxxx" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="secret" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-right">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
