import Link from "next/link";

export function Header() {
  return (
    <>
      <h1>Aplicação de filmes</h1>
      <ul>
        <li>
          <Link href={"/"}>Início</Link>
        </li>
        <li>
          <Link href={"/filmes"}>Filmes</Link>
        </li>
      </ul>
    </>
  );
}
