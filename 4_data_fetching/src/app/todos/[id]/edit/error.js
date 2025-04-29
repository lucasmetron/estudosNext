"use client";

import Link from "next/link";
import React from "react";

const EditTodoError = () => {
  return (
    <div>
      <h1>Erro ao editar, tente novamente mais tarde</h1>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default EditTodoError;
