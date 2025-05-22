"use server";

import { db } from "./db";

export async function updateUser(formData: FormData) {
  console.log("✌️formData --->", formData);
  const newName = formData.get("name");
  const email = formData.get("email");

  try {
    await db.user.update({
      where: { email: email as string },
      data: { name: newName as string },
    });
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

export async function getUser(email: string) {
  try {
    const user = await db.user.findUnique({
      where: { email: email as string },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}
