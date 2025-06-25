import React from "react";
import { auth } from "auth";
import BtnLogin from "@/components/BtnLogin";
import { addPost } from "@/actions";

const AddPost = async () => {
  const session = await auth();

  if (!session)
    return (
      <div className="w-full h-full flex justify-center items-center flex-col gap-2">
        Unauthorized
        <BtnLogin />
      </div>
    );

  return (
    <div className="bg-white w-full h-full flex flex-col gap-2 overflow-auto justify-start items-center p-4">
      <h1 className="font-bold text-black text-3xl pt-5">Criar novo post</h1>

      <form
        className="flex flex-col gap-4 border rounded p-5 w-50/100 border-gray-300 items-end"
        action={addPost}
      >
        <input type="hidden" name="email" value={session.user.email || ""} />

        <div className="w-full">
          <p className="text-black text-1xl ">Cole o endereço da imagem</p>
          <input
            name="image"
            type="text"
            placeholder="https://example.com/image.jpg"
            className="w-full border rounded border-gray-300 p-2 text-black"
            required
          />
        </div>

        <div className="w-full">
          <p className="text-black text-1xl ">Conteúdo do post</p>
          <textarea
            name="content"
            className="w-full border rounded border-gray-300 p-2 text-black"
            placeholder="Escreva uma descrição para a imagem"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors w-fit"
        >
          Criar post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
