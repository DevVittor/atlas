import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-obsidian-green/90 bg-obsidian-green">
      {/* Barra principal */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Botão de menu no mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="text-zinc-100 md:hidden"
        >
          <Menu size={28} />
        </button>

        {/* Logo centralizada */}
        <Link to="/" className="flex-1 text-center">
          <h1 className="text-zinc-100 text-2xl font-bold">
            K<span className="text-yellow-400">az</span>oo
          </h1>
        </Link>

        {/* Espaço para ícones do lado direito (carrinho, perfil, etc.) */}
        <div className="w-[28px]"></div>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="md:hidden bg-obsidian-green border-t border-obsidian-green/70">
          <ol className="flex flex-col p-3 text-zinc-100 gap-3 text-lg font-medium">
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/categorias" onClick={() => setOpen(false)}>
                Categorias
              </Link>
            </li>
            <li>
              <Link to="/produtos" onClick={() => setOpen(false)}>
                Produtos
              </Link>
            </li>
            <li>
              <Link to="/fornecedores" onClick={() => setOpen(false)}>
                Fornecedores
              </Link>
            </li>
          </ol>
        </nav>
      )}

      {/* Menu desktop */}
      <nav className="hidden md:flex justify-center gap-6 py-3 bg-obsidian-green text-zinc-100 font-medium">
        <Link to="/">Início</Link>
        <Link to="/categorias">Categorias</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/fornecedores">Fornecedores</Link>
      </nav>
    </header>
  );
}
