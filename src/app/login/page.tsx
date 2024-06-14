"use client";

import { useActionState } from "react";
import LoginForm from "@/components/login-form";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const LoginPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Card className="m-10">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            If you don't have an account <br />
            <Link href={"/register"} className="text-blue-500 font-semibold">
              register user
            </Link>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginPage;
