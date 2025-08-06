import { FaShoppingCart, FaStar } from "react-icons/fa";

export default function Card() {
  const width = Math.floor(Math.random() * 200) + 300;
  const height = Math.floor(Math.random() * 200) + 300;
  const randomSeed = Math.floor(Math.random() * 1000);
  const imageUrl = `https://picsum.photos/seed/${randomSeed}/${width}/${height}`;

  return (
    <div className="bg-white rounded-xl border border-gray-200 w-full max-w-sm mx-auto overflow-hidden shadow-sm hover:shadow-md transition mb-3">
      <div className="relative p-4 pb-0">
        <img
          src={imageUrl}
          alt="Produto aleatório"
          className="w-full h-auto rounded-md object-contain bg-white"
        />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>
      </div>

      <div className="px-4 pt-3 pb-4">
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
          Topi Makara UI Denim | Official Merchandise
        </h2>

        <div className="text-sm text-gray-500 mt-1 flex flex-wrap items-center gap-2">
          <span className="text-green-600 font-semibold">$ 7.56</span>
          <span className="text-gray-400">•</span>
          <span>50 Sold</span>
          <span className="text-gray-400">•</span>
          <span>Indonesia, Depok</span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center text-yellow-500 text-sm font-medium gap-1">
            <FaStar className="text-yellow-500" /> 5.0/5.0
          </div>
          <div className="text-sm text-emerald-600 font-medium">UI Store</div>
        </div>

        <button className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md text-sm font-semibold flex items-center justify-center gap-2 transition">
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
}
