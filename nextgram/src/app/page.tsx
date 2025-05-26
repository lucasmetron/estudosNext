import { getAllPosts } from "@/actions";
import DataAbouUser from "@/components/DataAbouUser";
import Like from "@/components/Like";
import Image from "next/image";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="bg-white overflow-auto flex flex-col gap-2 w-full h-full items-center justify-start">
      <h1 className=" pt-8 text-black font-bold text-3xl">
        Confira os posts mais recentes
      </h1>

      {posts.length === 0 ? (
        <div>
          <p>{`Não a posts`}</p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-4 items-center justify-start">
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-[50vw] min-w-[300px] h-[50vh] min-h-[500px] border border-gray-300 p-4 rounded flex flex-col gap-2 items-center justify-start"
            >
              <div className="relative w-full h-full">
                <Image
                  alt={post.imageUrl}
                  src={
                    post.imageUrl.startsWith("http")
                      ? post.imageUrl
                      : "/fallback.png"
                  }
                  fill
                  className="object-contain rounded"
                />
              </div>

              <div className="w-full flex flex-col items-start pt-2 justify-between gap-2">
                <p className="text-black ">{post.caption}</p>

                <DataAbouUser userId={post.userId} />

                <Like />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
