import React from "react";

import TodoForm from "@/components/TodoForm";
import { findDataById } from "@/actions";

export default async function EditTodo({ params }) {
  const value = await params;
  const data = await findDataById(value.id);

  return (
    <div>
      <p>Editando:</p>
      <TodoForm data={data} />
    </div>
  );
}
