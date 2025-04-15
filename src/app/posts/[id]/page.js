import Link from "next/link";
import React from "react";

// import { Container } from './styles';

async function PostPage({ params }) {
  const obj = await params;
  console.log("✌️obj --->", obj);

  return (
    <div>
      <h1>PostPage {obj.id} </h1>

      <Link href="/posts">
        <p>Voltar para Posts</p>
      </Link>
    </div>
  );
}

export default PostPage;
