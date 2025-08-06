import { FaStar, FaChartLine } from "react-icons/fa";
import { FiClock, FiCopy } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";
import { GoPlus } from "react-icons/go";

export default function Product() {
  const width = Math.floor(Math.random() * 200) + 300;
  const height = Math.floor(Math.random() * 200) + 300;
  const randomSeed = Math.floor(Math.random() * 1000);
  const imageUrl = `https://picsum.photos/seed/${randomSeed}/${350}/${350}`;

  return (
    <div className="bg-white rounded-2xl hover:shadow-md transition-shadow ease-in-out duration-300 hover:cursor-pointer overflow-hidden w-full  mx-auto md:mb-2 mb-1 md:p-3 p-2 border border-zinc-200">
      {/* Imagem */}
      <div className="relative flex justify-start items-center">
        <img
          src={imageUrl}
          alt="Produto aleatório"
          className="w-full rounded-lg object-cover aspect-square bg-white border"
        />
        <div className="absolute top-0 right-0 md:h-8 md:w-8 h-5 w-5 rounded-full flex justify-center items-center m-2 bg-white/20 hover:bg-white/70 transition-colors ease-in-out duration-300 backdrop-blur-lg p-1">
          <GoPlus className="md:text-2xl text-xl" />
        </div>
      </div>

      {/* Título */}
      <h2 className="font-bold text-gray-800 mt-2 line-clamp-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
        iusto quisquam fugit sint doloremque aliquid possimus itaque nam magni
        omnis, quibusdam veritatis facilis fuga molestias. Consequuntur illo
        optio facilis ducimus ut labore saepe. Officia praesentium mollitia vel
        quasi nisi. Voluptatibus.
      </h2>

      {/* Avaliação */}
      <div className="flex items-center flex-wrap gap-1 text-sm text-gray-600 mt-1">
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
