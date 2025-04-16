import React from "react";
import { redirect } from "next/navigation";

const Profile = () => {
  //Se o usuário não estiver logado, redireciona para a página inicial
  const isUserLogged = false;

  if (!isUserLogged) {
    redirect("/");
  }

  return (
    <div>
      <h1>Bem vindo ao seu perfil</h1>
    </div>
  );
};

export default Profile;
