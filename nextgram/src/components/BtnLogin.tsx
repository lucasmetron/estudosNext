import React from "react";
import { auth, signOut, signIn } from "auth";
import Image from "next/image";
import Link from "next/link";
import { getFirstName } from "@/utils/functions";

const BtnLogin = async () => {
  const session = await auth();
  console.log("✌️session --->", session);
  return (
    <div>
      {session && session?.user ? (
        <div className="flex gap-4 items-center justify-center">
          <p>{getFirstName(session?.user?.name || "SemNome")}</p>
          <Image
            className="rounded-2xl"
            src={session?.user?.image || ""}
            width={40}
            height={40}
            alt="Picture of the author"
          />

          <Link href={"/profile"}> Perfil </Link>
          <Link href={"/addPost"}> Criar postagens </Link>
          <Link href={"/myPosts"}> Minhas postagens </Link>

          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button className="px-5 py-2 bg-red-500 rounded-md cursor-pointer transition ease-in hover:bg-blue-600 ">
              Sair
            </button>
          </form>
        </div>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button className="px-5 py-2 bg-blue-500 rounded-md cursor-pointer transition ease-in hover:bg-blue-600 ">
            Entrar
          </button>
        </form>
      )}
    </div>
  );
};

export default BtnLogin;
