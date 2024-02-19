"use client";

import { pauseTrades } from "@/app/apiCalls/profile";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { User } from "@/models/User";
import { useState } from "react";

type Props = {
  user: User;
};

export function TradeControl({ user }: Props) {
  const [checked, setChecked] = useState(user.metadata?.pauseTrades);
  const clickHandler = async (val: boolean) => {
    try {
      setChecked(val);
      await pauseTrades(user._id, val);
    } catch (e) {
      setChecked(!val);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        disabled={Boolean(!user?.metadata?.accessToken)}
        onCheckedChange={clickHandler}
        checked={checked}
      />
      <Label htmlFor="airplane-mode">Pause Trade</Label>
    </div>
  );
}
