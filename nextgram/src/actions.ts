"use server";

import { db } from "./db";

export async function updateUser(formData: FormData) {
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

export async function addPost(formData: FormData) {
  let isSuccess = false;
  const image = formData.get("image") as string;
  const content = formData.get("content") as string;
  const email = formData.get("email") as string;

  if (!image || !content || !email) {
    throw new Error("All fields are required");
  }

  const user = await db.user.findUnique({ where: { email: email as string } });

  if (!user) {
    throw new Error("User not found");
  }

  await db.post
    .create({
      data: {
        imageUrl: image,
        caption: content,
        userId: user.id,
      },
    })
    .then(() => {
      isSuccess = true;
    })
    .catch(() => {
      isSuccess = false;
    });

  return isSuccess;
}
