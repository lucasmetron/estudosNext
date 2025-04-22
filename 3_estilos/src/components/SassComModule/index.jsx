import React from "react";
import style from "./style.module.sass"; // Importando o CSS

const SassComModule = () => {
  return (
    <div className={style.container}>
      <div>
        <p>Cabeçalho</p>
      </div>
      <p>Conteudo principal</p>
    </div>
  );
};

export default SassComModule;
