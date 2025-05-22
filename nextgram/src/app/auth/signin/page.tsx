"use client";

import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="bg-white w-full h-full flex justify-start items-center p-5 flex-col gap-5">
      <h1 className="text-black text-2xl font-bold">
        Acesse ou crie uma conta nas opções disponíveis
      </h1>

      <button
        onClick={() => {
          signIn("google", { callbackUrl: "/" });
        }}
        className="border-2 border-black rounded-md py-2 px-5 text-center text-black flex gap-2 items-center cursor-pointer"
      >
        <FaGoogle />
        <p>
          Entre com o <b>Google</b>
        </p>
      </button>
    </div>
  );
}
