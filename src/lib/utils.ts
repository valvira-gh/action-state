import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { getUsers } from "@/app/data/getUsers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateInputs = async (email: string, password: string) => {
  const users = await getUsers();
  console.log(users);

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return { message: "User already exists", success: false };
    }
  }

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
  } else if (!email.includes(".")) {
    return {
      message: "You must provide a valid email address",
      success: false,
    };
  } else {
    return { message: "User registered successfully!", success: true };
  }
};
