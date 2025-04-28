import Link from "next/link";
import React from "react";

import { addTodo } from "@/actions";

const TodoPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-1">
      <h1 className="p-10 text-2xl">Criação do Todo</h1>

      <form
        action={addTodo}
        className="w-md flex flex-col gap-4 shadow-lg p-4 bg-white rounded-md"
      >
        <label htmlFor="titulo" className="text-lg flex flex-col">
          Titulo
          <input
            id="titulo"
            name="titulo"
            required
            type="text"
            placeholder="Digite o título"
            className="border-2  px-4 border-gray-300 p-2 rounded-md mt-1"
          />
        </label>

        <label htmlFor="descricao" className="text-lg flex flex-col">
          Descrição
          <textarea
            id="descricao"
            name="descricao"
            required
            type="text"
            placeholder="Digite a descrição"
            className="w-full px-4 border-2 border-gray-300 p-2 rounded-md mt-1 h-32"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 rounded-md p-2 text-white cursor-pointer"
        >
          Criar Todo
        </button>
      </form>

      <Link
        href="/"
        className="w-md bg-green-500 rounded-md p-2 text-white cursor-pointer flex justify-center items-center mt-4"
      >
        Home
      </Link>
    </div>
  );
};

export default TodoPage;
