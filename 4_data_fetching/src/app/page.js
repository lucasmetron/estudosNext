import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-md flex flex-col gap-5">
      <h1>Home</h1>

      <Link
        href="/todos/create"
        className="w-full bg-green-500 p-2 rounded-md text-center text-white"
      >
        Todo Page
      </Link>
    </div>
  );
}
