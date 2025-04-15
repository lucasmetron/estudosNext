"use client";

import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Product({ params }) {
  const router = useRouter();

  const [product, setProduct] = useState(null);

  useLayoutEffect(() => {
    (async () => {
      const value = await params;
      setProduct(value);
    })();
  }, [params]);

  return (
    <div>
      <h1>Produto - {product?.skuProduct || "Sem SKU"} </h1>

      <button onClick={() => router.back()}>Voltar</button>
    </div>
  );
}

export default Product;
