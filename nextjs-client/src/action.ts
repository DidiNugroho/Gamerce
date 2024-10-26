"use server"
import { cookies } from "next/headers";

export async function logoutUser() {
  const cookieStore = cookies();
  cookieStore.set("Authorization", "", { expires: new Date(0) });
}


