import React from "react";
import Link from "next/link";

import { findDataById, updateTodo } from "@/actions";

export default async function EditTodo({ params }) {
  const value = await params;
  const data = await findDataById(value.id);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-1">
      <h1 className="p-10 text-2xl">Criação do Todo</h1>

      <form
        action={updateTodo}
        className="w-md flex flex-col gap-4 shadow-lg p-4 bg-white rounded-md"
      >
        <input type="hidden" name="id" value={data?.id} />
        <input type="hidden" name="status" value={data?.status} />

        <label htmlFor="titulo" className="text-lg flex flex-col">
          Titulo
          <input
            id="titulo"
            name="titulo"
            required
            type="text"
            defaultValue={data?.titulo}
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
            defaultValue={data?.descricao}
            className="w-full px-4 border-2 border-gray-300 p-2 rounded-md mt-1 h-32"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 rounded-md p-2 text-white cursor-pointer"
        >
          Editar Todo
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
}
