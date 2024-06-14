"use client";

import { useActionState } from "react";
import { loginUser } from "@/app/data/loginUser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  const [message, formAction] = useActionState(loginUser, null);

  return (
    <form action={formAction} className="w-[90%]">
      <div className="flex flex-col my-2">
        <Label className="my-1" htmlFor="email">
          Email
        </Label>
        <Input type="text" name="email" />
      </div>
      <div className="flex flex-col my-2 space-y-1">
        <Label className="" htmlFor="password">
          Password
        </Label>
        <Input type="password" name="password" />
      </div>
      <div className="flex justify-end mt-4">
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
