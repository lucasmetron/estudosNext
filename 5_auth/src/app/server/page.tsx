import React from "react";
import { auth } from "auth";

const ServerPage = async () => {
  const session = await auth();

  if (!session || !session.user) return <p>Você precisa estar logado</p>;

  return (
    <div>
      <h1>Componente Server autenticado</h1>
    </div>
  );
};

export default ServerPage;
