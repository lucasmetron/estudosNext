import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-blue-500 flex items-center justify-between p-5 text-white">
      <p>Lista de tarefas</p>
      <Link href="/todos/create">Criar tarefa</Link>
    </div>
  );
};

export default Header;
