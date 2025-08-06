import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b-2 border-obsidian-green/95">
      <div className="flex justify-center items-center gap-3 flex-col w-full py-10 px-5 bg-obsidian-green">
        <Link to="/">
          <h1 className="text-zinc-100 text-7xl font-bold ">
            K<span className="text-yellow-400">az</span>oo
          </h1>
        </Link>
        <ol className="flex items-center justify-center flex-wrap gap-2 text-zinc-100 font-medium">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/categorias">Categorias</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/fornecedores">Fornecedores</Link>
          </li>
        </ol>
      </div>
    </header>
  );
}
