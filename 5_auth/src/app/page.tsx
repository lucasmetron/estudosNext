import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href={"/client"}>Client page</Link>
      <Link href={"/server"}>Server page</Link>
    </div>
  );
}
