"use client";

import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CategoryPage({ params }) {
  const router = useRouter();

  const [categorie, setCategorie] = useState(null);

  useLayoutEffect(() => {
    (async () => {
      const value = await params;
      setCategorie(value);
    })();
  }, [params]);

  return (
    <div className="flex flex-col gap-1">
      <h1>CategoryPage</h1>

      <Link href={`/produtos/categorias/produto/${categorie?.categoria}`}>
        Ver o produto - {categorie?.categoria}
      </Link>

      <button
        className="size-fit border-2 border-amber-100 cursor-pointer"
        onClick={() => router.back()}
      >
        Voltar
      </button>
    </div>
  );
}

export default CategoryPage;
