import { BsHandbag } from "react-icons/bs";
import Foto from "../assets/cam.png";

export default function Test() {
  return (
    <div className="bg-[#f9f9f9] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 p-3">
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          className="bg-black flex flex-col gap-3 p-4 rounded-xl"
          key={index}
        >
          <div className="bg-zinc-900 rounded-xl relative flex justify-center items-end">
            <img
              className="rounded-xl object-cover h-[200px]"
              src={Foto}
              alt=""
            />
            <div className="absolute flex justify-center items-center gap-2 mb-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div className="bg-zinc-200 h-[10px] w-[10px] rounded-full border border-zinc-100"></div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 flex-wrap text-zinc-100 text-lg font-semibold">
            <h2>AirPods Pro 2</h2>
            <h2>$250.00</h2>
          </div>
          <div className="">
            <p className="text-left text-pretty leading-5 text-zinc-400 font-light text-sm line-clamp-3">
              Experience unprecedented sound with pro-level Active Noise
              Cancellation, Footnote ³ Adaptive Audio for the right mix of noise
              control in any environme...
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="">
              <h3 className="font-medium text-zinc-100">Color - White</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-red-500 rounded-full border-2 border-zinc-200 h-[30px] w-[30px]"></div>
              <div className="bg-green-500 rounded-full border-2 border-zinc-200 h-[30px] w-[30px]"></div>
              <div className="bg-purple-500 rounded-full border-2 border-zinc-200 h-[30px] w-[30px]"></div>
              <div className="bg-blue-500 rounded-full border-2 border-zinc-200 h-[30px] w-[30px]"></div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <button className="px-3 py-1 rounded-lg text-zinc-100 font-medium border border-zinc-800 flex-grow">
              More details
            </button>
            <button className="flex items-center gap-2 justify-center px-3 py-1 rounded-lg font-bold border border-white bg-white flex-grow">
              <BsHandbag />
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
