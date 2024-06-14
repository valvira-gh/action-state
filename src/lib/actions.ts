"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { db } from "./db";
const bcrypt = require("bcrypt");
const saltRounds = 10;

const validateInputs = (email: string, password: string) => {
  if (!email || email.trim() === "") {
    return { message: "Email is required", success: false };
  } else if (!password || password.trim() === "") {
    return { message: "Password is required", success: false };
  } else if (email.split("@")[0].length < 2) {
    return { message: "You must provide a valid email", success: false };
  } else if (password.length < 8) {
    return {
      message: "Password must be at least 8 characters long",
      success: false,
    };
  } else if (password.length > 50) {
    return {
      message: "Password must be less than 50 characters long",
      success: false,
    };
  } else if (!email.includes("@")) {
    return {
      message: "You must provide a valid email address",
      success: false,
    };
  } else {
    return { message: "User registered successfully!", success: true };
  }
};

export const registerUser = async (prevState: any, queryData: FormData) => {
  const email = queryData.get("email") as string;
  const password = queryData.get("password") as string;
  console.log("Email:", email, "Password:", password);

  const validationResult = validateInputs(email, password);
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

export const loginUser = async (prevState: any, queryData: FormData) => {
  const email = queryData.get("email") as string;
  const password = queryData.get("password") as string;
  console.log("Email:", email, "Password:", password);

  const validationResult = validateInputs(email, password);
  console.log(validationResult);

  return;
};
