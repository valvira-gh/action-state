"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { validateInputs } from "@/lib/utils";

const bcrypt = require("bcrypt");
const saltRounds = 10;

export const registerUser = async (prevState: any, queryData: FormData) => {
  const email = queryData.get("email") as string;
  const password = queryData.get("password") as string;
  console.log("Email:", email, "Password:", password);

  const validationResult = await validateInputs(email, password);
  console.log(validationResult);

  if (!validationResult.success) {
    return validationResult.message;
  }

  // hash the password
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log(hashedPassword);

  const user = await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  console.log(user);

  revalidatePath("/login");
  redirect("/login");

  return validationResult.message;
};
