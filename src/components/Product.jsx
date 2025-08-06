import { FaStar, FaChartLine } from "react-icons/fa";
import { FiClock, FiCopy } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";
import { GoPlus } from "react-icons/go";

export default function Product() {
  const width = Math.floor(Math.random() * 200) + 300;
  const height = Math.floor(Math.random() * 200) + 300;
  const randomSeed = Math.floor(Math.random() * 1000);
  const imageUrl = `https://picsum.photos/seed/${randomSeed}/${width}/${height}`;

  return (
    <div className="bg-white rounded-2xl hover:shadow-md transition-shadow ease-in-out duration-300 hover:cursor-pointer overflow-hidden w-full  mx-auto mb-2 p-3 border border-zinc-200">
      {/* Imagem */}
      <div className="relative flex justify-start items-center">
        <img
          src={imageUrl}
          alt="Produto aleatório"
          className="w-full rounded-lg object-contain bg-white border"
        />
        <div className="absolute top-0 right-0 h-8 w-8 rounded-full flex justify-center items-center m-2 bg-white/20 hover:bg-white/70 transition-colors ease-in-out duration-300 backdrop-blur-lg p-1">
          <GoPlus className="text-2xl" />
        </div>
      </div>

      {/* Título */}
      <h2 className="font-bold text-gray-800 mt-2 line-clamp-2">
        PURSHE Mini Projector, Mini B...
      </h2>

      {/* Avaliação */}
      <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
        <span className="text-yellow-500 flex items-center gap-1">
          <FaStar />
          4.3
        </span>
        <span className="text-gray-400">|</span>
        <span
          className="text-gray-500 flex items-center gap-1"
          title="Avaliações"
        >
          <MdOutlineTextsms />
          61
        </span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-500 flex items-center gap-1" title="Estoque">
          📦 203
        </span>
        <span className="text-gray-400">|</span>
        <span
          className="text-gray-500 flex items-center gap-1"
          title="Fornecedores"
        >
          <IoStorefront />
          54
        </span>
        <span className="text-gray-400">|</span>
        <span
          className="text-gray-500 flex items-center gap-1"
          title="Entregadores"
        >
          🛵 98
        </span>
      </div>

      {/* Preço + Receita */}
      <div className="mt-2">
        <div className="text-sm text-gray-500">Preço</div>
        <div className="text-base font-semibold text-gray-800">
          R$41.32 - R$ 67.44
        </div>
      </div>

      <div className="mt-2">
        <div className="text-sm text-gray-500">Receita</div>
        <div className="text-base font-semibold text-green-600 flex items-center gap-1">
          R$12,694,845 <FaChartLine />
        </div>
      </div>

      {/* Rodapé */}
      <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <FiCopy />
          <span>BOCRYVL494</span>
        </div>
        <div className="flex items-center gap-1">
          <FiClock />
          <span>1 ano</span>
        </div>
      </div>
    </div>
  );
}
