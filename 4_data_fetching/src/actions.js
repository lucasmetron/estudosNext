"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function deleteTodo(formData) {
  const idToTaskToDelete = parseInt(formData.get("id"));

  await db.todo.delete({
    where: { id: idToTaskToDelete },
  });

  redirect("/");
}

export async function getTodos() {
  return await db.todo.findMany({
    select: { id: true, titulo: true, descricao: true, status: true },
    orderBy: { id: "asc" },
  });
}

export async function addTodo(formData) {
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");
  const status = "pendente";

  await db.todo.create({ data: { titulo, descricao, status } });

  redirect("/");
}

export async function findDataById(id) {
  const data = await db.todo.findFirst({ where: { id: parseInt(id) } });

  return data;
}

export async function updateTodo(formData) {
  const id = parseInt(formData.get("id"));
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");
  const status = formData.get("status");

  await db.todo.update({
    where: { id },
    data: { titulo, descricao, status },
  });

  redirect("/");
}
