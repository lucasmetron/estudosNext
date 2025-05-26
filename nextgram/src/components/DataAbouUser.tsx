import { getUserById } from "@/actions";
import Image from "next/image";
import React from "react";

interface DataAbouUserProps {
  userId: string;
}

const DataAbouUser = async ({ userId }: DataAbouUserProps) => {
  const user = await getUserById(userId);

  return (
    <div className="w-full flex items-center justify-start gap-2">
      {user ? (
        <>
          <Image
            src={user.image ?? ""}
            alt={user.name ?? ""}
            width={40}
            height={40}
            className="rounded-3xl"
          />

          <p className="text-black">{user.name}</p>
        </>
      ) : (
        <p className="">Usuário desconhecido</p>
      )}
    </div>
  );
};

export default DataAbouUser;
