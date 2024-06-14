"use client";

import { useActionState } from "react";
import RegisterUserForm from "@/components/register-form";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const RegisterPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Card className="m-10">
        <CardHeader>
          <CardTitle>Register User</CardTitle>
          <CardDescription>
            If you already have an user, go to <br />
            <Link href={"/login"} className="text-blue-500 font-semibold">
              login user.
            </Link>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <RegisterUserForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default RegisterPage;
