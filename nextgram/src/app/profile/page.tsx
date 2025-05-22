import React from "react";
import Image from "next/image";

import { auth } from "auth";
import BtnLogin from "@/components/BtnLogin";
import { updateUser, getUser } from "@/actions";

const Profile = async () => {
  const session = await auth();
  const user = await getUser(session?.user?.email || "");

  if (!session)
    return (
      <div className="w-full h-full flex justify-center items-center flex-col gap-2">
        Unauthorized
        <BtnLogin />
      </div>
    );

  return (
    <div className="bg-white w-full h-full flex flex-col gap-10 items-center justify-start pt-10">
      <p className="text-black font-bold text-2xl">{`Perfil de ${user?.name}`}</p>

      <Image
        src={user?.image || "/default-profile.png"}
        alt={session?.user?.name || "Sem nome"}
        width={200}
        height={200}
        style={{ borderRadius: "5px" }}
      />

      <form
        action={updateUser}
        className=" flex w-4/10 flex-col gap-2 items-center justify-start border-2 border-gray-300 rounded-md p-3"
      >
        <input
          id="email"
          name="email"
          defaultValue={user?.email || ""}
          type="hidden"
        />
        <div className="w-full flex flex-col gap-0.5">
          <label className="text-black">Nome</label>
          <input
            defaultValue={user?.name?.trimEnd() || ""}
            type="text"
            name="name"
            id="name"
            className="w-full border-2 border-gray-300 rounded-md text-black py-2 px-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="text-black">Selecione uma imagem</label>

          {/* Input oculto */}
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="hidden"
            accept="image/*"
          />

          {/* Label como botão */}
          <label
            htmlFor="file-upload"
            className="inline-block px-4 py-2 bg-green-600 text-white text-center rounded cursor-pointer hover:bg-green-700"
          >
            Escolher imagem
          </label>
        </div>

        <div className="w-full flex justify-end pt-2">
          <button
            className="bg-blue-500 px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
            type="submit"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
