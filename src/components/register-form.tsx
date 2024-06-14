"use client";

import { useActionState } from "react";
import { registerUser } from "@/app/data/registerUser";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";

const RegisterUserForm = () => {
  const [message, formAction] = useActionState(registerUser, null);

  return (
    <form action={formAction}>
      <div className="flex flex-col mt-1">
        <Label className="my-1" htmlFor="email">
          Email
        </Label>
        <Input type="text" name="email" />
      </div>
      <div className="flex flex-col my-1">
        <Label className="my-1" htmlFor="password">
          Password
        </Label>
        <Input type="password" name="password" />
      </div>
      <div className="flex flex-col items-end mt-3">
        <div className="w-[100%] mb-2">
          {message && (
            <p
              className={`${
                message === "User registered successfully!"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default RegisterUserForm;
