import BtnRedirect from "@/components/BtnRedirect";
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

      {/* Aula 3 - parametros */}
      <div>
        <h1>Acessar Exemplo</h1>
        <Link href="/exemplo?parametro=valor25"> Link: Exemplo</Link>
      </div>

      {/* Aula 4 - Nested routes */}
      <div>
        <h1>Acessar categorias de roupas</h1>
        <Link href="produtos/categorias/roupas"> Link: roupas</Link>

        <h1>Acessar categorias de masculino</h1>
        <Link href="produtos/categorias/masculino"> Link: masculino</Link>

        <h1>Acessar categorias de feminino</h1>
        <Link href="produtos/categorias/feminino"> Link: feminino</Link>
      </div>

      {/* Aula 7 - Nested layout */}
      <div>
        <h1>Dashboard</h1>
        <Link href="/dashboard"> Link: Dashboard</Link>
      </div>

      {/* Aula 8 - useRouter */}
      <div>
        <BtnRedirect />
      </div>

      {/* Aula 9 - Redirect */}
      <div>
        <h1>Profile</h1>
        <Link href="/profile"> Link: Profile</Link>
      </div>
    </div>
  );
}
