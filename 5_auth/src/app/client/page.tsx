"use client";

import React from "react";
import { useSession } from "next-auth/react";

const ClientPage = () => {
  const { data: session } = useSession();

  if (!session || !session.user) return <p>Você precisa estar logado</p>;

  return (
    <div>
      <h1>Componente Client autenticado</h1>
    </div>
  );
};

export default ClientPage;
