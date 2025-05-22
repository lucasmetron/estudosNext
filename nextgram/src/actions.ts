"use server";

import { db } from "./db";

export async function updateUser(formData: FormData) {
  console.log("✌️formData --->", formData);
  const newName = formData.get("name");
  const email = formData.get("email");
  const urlImg = formData.get("urlImg");

  const newObjToSave: { name: string; image?: string } = {
    name: newName as string,
    image: urlImg as string,
  };

  if (newObjToSave.image === "") {
    delete newObjToSave.image;
  }

  try {
    await db.user.update({
      where: { email: email as string },
      data: newObjToSave,
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
