import { useState } from "react";
import CardSupplier from "./CardSupplier";
import { IoIosArrowDown } from "react-icons/io";

export default function DetailsProduct() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="flex justify-center items-center gap-5 flex-grow">
      <section className="flex-grow flex justify-center">
        <div className="flex justify-center flex-wrap gap-5 flex-grow max-w-7xl">
          <div className="flex items-center flex-col gap-3 md:px-3 md:py-10 p-3">
            <div className="md:h-[450px] bg-zinc-200 md:w-[450px] flex justify-center items-center">
              <img
                className=""
                src="https://images.pexels.com/photos/33292126/pexels-photo-33292126.jpeg"
                alt=""
              />
            </div>
            <div className="max-w-2xl">
              <h2 className="font-bold text-2xl">Descrição</h2>
              <p className="text-pretty leading-5 font-light text-zinc-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis aspernatur natus itaque eius iste. Molestias
                quibusdam at quas exercitationem recusandae pariatur. Voluptas,
                delectus omnis. Repellat consequatur nesciunt aliquam
                repudiandae reprehenderit. Delectus accusantium reiciendis unde
                libero, quam laudantium eos maxime odit voluptatum fugiat
                recusandae molestias quasi. Optio vitae quod rem error qui eaque
                fugiat sint hic, ad ipsam dicta modi eligendi perferendis dolore
                quis ducimus. Hic minus architecto, iste sunt porro explicabo
                ipsa nobis rerum sint quia officiis, quo incidunt facilis soluta
                ex itaque repellat facere? Suscipit perferendis, dolorem
                temporibus natus deleniti magnam, fugiat eum non blanditiis
                perspiciatis, veniam quas nobis.
              </p>
            </div>
          </div>
          <div className="border-l border-zinc-200 flex flex-col flex-wrap gap-3 flex-grow md:px-3 md:py-10 px-3 pb-3">
            {openModal && (
              <div className="fixed inset-0 flex justify-center backdrop-blur-lg bg-white/30 items-end py-3 z-10 overflow-auto">
                <div className="flex flex-col gap-2 overflow-auto w-full mt-4 p-2 bg-white h-[450px]">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <CardSupplier key={index} />
                  ))}
                </div>
              </div>
            )}
            {!openModal && (
              <div
                className="bg-blue-500 text-zinc-100 h-[40px] right-0 left-0 mx-3 rounded-xl p-2 text-center flex justify-center items-center gap-2 shadow-sm fixed bottom-5"
                onClick={() => setOpenModal(!openModal)}
              >
                <span className="font-semibold">Fornecedores</span>
                <IoIosArrowDown />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
