"use client";

// Sempre que usar um hook, preciso estar em um componente client
import { useSearchParams } from "next/navigation";
import React from "react";

function Exemplo() {
  const searchParams = useSearchParams();

  const params = searchParams.get("parametro");
  const hasParams = searchParams.has("parametro");

  return (
    <div>
      <h1>Parametro - {params}</h1>
      {hasParams ? <p>Tem parametro.</p> : <p>Não tem parametro.</p>}
    </div>
  );
}

export default Exemplo;
