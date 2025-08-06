export default function CardProduct() {
  const width = Math.floor(Math.random() * 200) + 300; // 300–500
  const height = Math.floor(Math.random() * 200) + 300; // 300–500
  const randomSeed = Math.floor(Math.random() * 1000);
  const imageUrl = `https://picsum.photos/seed/${randomSeed}/${width}/${height}`;

  return (
    <div className="bg-white rounded-2xl hover:shadow-md transition-shadow ease-in-out duration-300 hover:cursor-pointer overflow-hidden w-full max-w-sm mx-auto mb-3">
      <div className="relative">
        <img
          src={imageUrl}
          alt="Imagem aleatória"
          className="w-full object-cover aspect-auto"
        />
        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full shadow">
          Flash
        </span>
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 leading-5 line-clamp-2">
          Lebanese Lemon Garlic Chicken
        </h2>
        <p className="text-gray-500 text-sm mt-1 line-clamp-3 leading-5">
          A fragrant and spicy stir-fry with fresh Thai basil, chilies, and
          tender chicken served.
        </p>

        <div className="flex items-center text-gray-500 text-sm mt-3 gap-4">
          <div className="flex items-center gap-1">
            <span>⭐</span> <span>4.3</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📦</span> <span>44</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🛵</span> <span>20</span>
          </div>
        </div>

        <button className="mt-4 w-full bg-black text-white py-2 rounded-full text-sm font-semibold hover:bg-gray-900 transition">
          R$ 345,90 - R$ 454,90
        </button>
      </div>
    </div>
  );
}
