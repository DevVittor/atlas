import CardSupplier from "./CardSupplier";

export default function DetailsProduct() {
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
          <div className="border-l border-zinc-200 flex flex-col flex-wrap gap-3 flex-grow min-h-screen md:px-3 md:py-10 px-3 pb-3">
            <div className="flex justify-between flex-col flex-wrap">
              <h2 className="">
                <b className="text-2xl">Fornecedores:</b> 20 resultados
              </h2>
              <h2>R$ 245,90 - R$ 384,90</h2>
            </div>
            <div className="flex justify-between items-center gap-2 flex-wrap">
              <div className="">
                <input
                  className="px-3 py-1 rounded-md font-medium bg-[#f9f9f9] border border-zinc-200 outline-none"
                  type="search"
                  name=""
                  id=""
                  placeholder="Buscar por fornecedores"
                />
              </div>
              <div className="">
                <select
                  className="px-3 py-1 rounded-md outline-none bg-[#f9f9f9] border border-zinc-200 font-medium text-zinc-500 hover:cursor-pointer"
                  name=""
                  id=""
                >
                  <option value="">Destacados</option>
                  <option value="">Verificados</option>
                  <option value="">Novidades</option>
                  <option value="">Populares</option>
                  <option value="">Menor Preço</option>
                  <option value="">Maior Preço</option>
                  <option value="">Mais Próximo</option>
                  <option value="">Melhor Avaliado</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {Array.from({ length: 20 }).map((_, index) => (
                <CardSupplier key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
