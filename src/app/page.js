import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10 flex-col">
      {/* Aula 1 - navegaçao */}
      <div>
        <h1>Home</h1>
        <Link href="/sobre"> Link: Sobre</Link>
      </div>

      {/* Aula 2 - Dados dinamicos*/}
      <div>
        <h1>Acessar Posts</h1>
        <Link href="/posts"> Link: Posts</Link>
      </div>

      {/* Aula 3- parametros */}
      <div>
        <h1>Acessar Exemplo</h1>
        <Link href="/exemplo?parametro=valor25"> Link: Exemplo</Link>
      </div>
    </div>
  );
}
