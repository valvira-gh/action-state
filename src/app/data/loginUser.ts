"use server";

import { db } from "@/lib/db";
import { validateInputs } from "@/lib/utils";

export const loginUser = async (prevState: any, queryData: FormData) => {
  const email = queryData.get("email") as string;
  const password = queryData.get("password") as string;
  console.log("Email:", email, "Password:", password);

  const validationResult = validateInputs(email, password);
  console.log(validationResult);

  return;
};
