import Link from "next/link";
import React from "react";

// import { Container } from './styles';

function Posts() {
  const postsId = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-10 flex-col">
      <h1>Blog</h1>
      <ul>
        {postsId.map((post) => (
          <li key={post}>
            <Link href={`/posts/${post}`}>Post - {post}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
