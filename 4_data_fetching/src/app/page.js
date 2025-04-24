import { db } from "@/db";

export default async function Home() {
  const todos = await db.todo.findMany({
    select: { id: true, titulo: true, descricao: true, status: true },
  });

  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center">
      <div className="w-[70%] mt-5">
        <p>Ir para criação de todo</p>
        <h2 className="font-bold text-lg">Todos!</h2>
      </div>

      {todos.length == 0 ? (
        <div className="w-[70%] flex flex-col items-center justify-center gap-2">
          <p>Não há tarefas</p>
        </div>
      ) : (
        <div className="w-[70%]  flex flex-col gap-5 items-center justify-center">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="w-full flex gap-2 p-4 bg-gray-100 rounded-md shadow-md justify-between items-center"
            >
              <div className="">
                <h2 className="text-md font-bold">Titulo: {todo.titulo}</h2>
                <p>Descrição: {todo.descricao}</p>
                <p>Status: {todo.status}</p>
              </div>

              <div className="flex gap-2">
                <button className=" w-fit bg-blue-500 text-white  px-3 py-2 rounded-md cursor-pointer">
                  Visualizar
                </button>

                <button className=" w-fit bg-yellow-500 text-white  px-3 py-2 rounded-md cursor-pointer">
                  Editar
                </button>

                <button className=" w-fit bg-red-500 text-white  px-3 py-2 rounded-md cursor-pointer">
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
