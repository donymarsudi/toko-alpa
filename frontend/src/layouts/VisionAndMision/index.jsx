import VisionAndMisionElement from "../../components/element/VisionAndMisionElement";

export default function VisionAndMision() {
  return (
    <div className="flex flex-wrap gap-10 pt-16 px-7 md:px-14 lg:flex-nowrap lg:px-28 xl:px-52">
      <VisionAndMisionElement
        containerClass="bg-red-100"
        imgUrl="./image/about-img/visi.png"
        title="Visi"
      >
        <p className="font-light text-justify mt-5 w-10/12 mx-auto">
          Untuk menjadi preferensi utama pelanggan dengan mengutamakan kualitas
          produk yang dijual, serta pelayanan yang memuaskan pelanggan
          berbelanja.
        </p>
      </VisionAndMisionElement>
      <VisionAndMisionElement
        containerClass="bg-slate-100"
        imgUrl="./image/about-img/misi.png"
        title="Misi"
      >
        <p className="font-light text-justify mt-5 w-10/12 mx-auto">
          <span className="block mt-8 my-3">
            Menjaga kualitas produk dengan menjaga kesegaran dan kualitas harga
            yang bersaing
          </span>
          <span className="block my-3">
            Pelayanan yang optimal menjadi prioritas kami, guna kepuasan
            pelanggan berbelanja
          </span>
          <span className="block my-3">
            Menjadi teman baik pelanggan, untuk terciptanya keharmonisan antara
            kamu dan kami
          </span>
        </p>
      </VisionAndMisionElement>
    </div>
  );
}
