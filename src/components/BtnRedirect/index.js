"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BtnRedirect = () => {
  const router = useRouter();

  function sendEmailAndRedirect() {
    // Aqui você pode adicionar a lógica para enviar o e-mail
    console.log("E-mail enviado!");

    // Redireciona para a página de dashboard
    router.push("/dashboard");
  }

  return (
    <div>
      <button onClick={() => sendEmailAndRedirect()}>Finalizar envio</button>
    </div>
  );
};

export default BtnRedirect;
