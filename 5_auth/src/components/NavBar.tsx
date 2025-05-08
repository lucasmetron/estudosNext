import React from "react";
import { auth, signIn, signOut } from "auth";
import Link from "next/link";

// import { Container } from './styles';

const NavBar: React.FC = async () => {
  const session = await auth();

  return (
    <div className="w-100% bg-gray-900 flex items-center justify-between p-5">
      <Link href={"/"}>
        <p className="font-bold text-1xl">Home</p>
      </Link>

      <div>
        {session && session?.user ? (
          <div className="w-auto flex gap-5 items-center">
            <p>{session?.user?.name || "Sem nome"}</p>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button className="px-4 py-2 bg-red-600 rounded-md font-bold cursor-pointer hover:opacity-70 transition-all ease-in">
                Logout
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
            <button className="px-4 py-2 bg-blue-600 rounded-md font-bold cursor-pointer hover:opacity-70 transition-all ease-in">
              Entrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NavBar;
