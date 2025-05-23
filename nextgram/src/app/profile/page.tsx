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
        encType="multipart/form-data"
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

        <div className="w-full flex flex-col gap-0.5">
          <label className="text-black">Url da imagem</label>
          <input
            type="text"
            name="urlImg"
            id="urlImg"
            className="w-full border-2 border-gray-300 rounded-md text-black py-2 px-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="w-full flex justify-end pt-2">
          <button
            name=""
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
