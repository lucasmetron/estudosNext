import Link from "next/link";
import React from "react";

const TodoNotFound = () => {
  return (
    <div className="w-dvw h-dvh flex items-center justify-center flex-col gap-5">
      <h1 className="font-bold text-2xl">NotFound</h1>
      <Link href={"/"}>Voltar pra a homem</Link>
    </div>
  );
};

export default TodoNotFound;
