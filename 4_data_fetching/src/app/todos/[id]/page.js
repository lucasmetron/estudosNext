import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

const TaskToView = async ({ params }) => {
  const obj = await params;

  const data = await db.todo.findFirst({ where: { id: parseInt(obj.id) } });
  console.log("✌️data --->", data);

  if (!data) {
    return notFound();
  }

  return (
    <div>
      <p>{data?.titulo || "Sem dado"}</p>
      <p>{data?.descricao || "Sem dado"}</p>
      <p>{data?.status || "Sem dado"}</p>
    </div>
  );
};

export default TaskToView;
