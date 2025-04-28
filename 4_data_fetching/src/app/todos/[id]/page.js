import React from "react";
import { notFound } from "next/navigation";
import { db } from "@/db";

const TaskToView = async ({ params }) => {
  await new Promise((a) => setTimeout(a, 2000)); //load fake

  const obj = await params;
  const data = await db.todo.findFirst({ where: { id: parseInt(obj.id) } });

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
