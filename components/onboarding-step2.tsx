"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { User } from "@/models/User";
import { getBrokerLoginUrl } from "@/app/apiCalls/profile";

type Props = {
  user: User;
};

type CardProps = React.ComponentProps<typeof Card>;

export function OnboardingStep2({
  className,
  user,
  ...props
}: CardProps & Props) {
  const clickHandler = async () => {
    try {
      const res = await getBrokerLoginUrl();
      window.location.href = res.data;
    } catch (e) {
      alert(e);
    }
  };
  return (
    <Card
      className={cn("w-full sm:w-[380px] mt-6 sm:mt-0", className)}
      {...props}
    >
      <CardHeader>
        <CardTitle>Login with Fyers</CardTitle>
        <CardDescription>Need to automatically create Orders.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          Status:{" "}
          <Badge
            variant={user.metadata?.accessToken ? "default" : "destructive"}
            className="ml-4"
          >
            {user.metadata?.accessToken ? "Linked" : " Not Linked"}
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        {!user.metadata?.accessToken && (
          <Button className="mt-2" onClick={clickHandler}>
            {" "}
            Click to Link Account
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
