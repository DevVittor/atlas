import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiShieldUserFill, RiFireFill } from "react-icons/ri";

export default function CardSupplier() {
  const [checked, setChecked] = useState(false);

  const handleCardClick = () => {
    setChecked(!checked);
  };

  const handleCheckboxClick = (e) => {
    e.stopPropagation(); // Impede que o clique no checkbox também dispare o clique do card
  };

  return (
    <div
      className="flex justify-between items-start gap-2 rounded-lg hover:cursor-pointer hover:shadow-sm transition-shadow ease-in-out duration-300 border border-zinc-200 bg-white p-4 md:max-h-[150px]"
      onClick={handleCardClick}
    >
      <div className="flex items-start gap-3 overflow-auto">
        <div className="flex justify-center items-center flex-col gap-1.5">
          <div className="rounded-md h-[50px] w-[50px] border border-green-500 bg-green-300 flex justify-center items-center">
            <h2 className="text-green-700 font-bold">MD</h2>
          </div>
          <ol className="flex items-center gap-0.5">
            <li>
              <RiShieldUserFill className="text-blue-500" />
            </li>
            <li>
              <RiFireFill className="text-red-500" />
            </li>
          </ol>
        </div>
        <div className="leading-5">
          <h2 className="font-semibold">Senior UI grafic designer</h2>
          <span className="text-zinc-400 font-light text-sm">Marena Dev</span>
          <ol className="flex items-center flex-wrap md:gap-1.5 gap-1 mt-2">
            <li className="border border-zinc-200 rounded-full bg-white font-medium text-xs text-zinc-500 px-3 py-1">
              Novo
            </li>
            <li className="border border-zinc-200 rounded-full bg-white font-medium text-xs text-zinc-500 px-3 py-1">
              Frete Grátis
            </li>
            <li className="flex items-center gap-1 border border-zinc-200 rounded-full bg-white font-medium text-xs text-zinc-500 px-3 py-1">
              <FaMapMarkerAlt className="text-red-500" />
              Rio de Janeiro/RJ
            </li>
          </ol>
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          checked={checked}
          onClick={handleCheckboxClick}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
    </div>
  );
}
