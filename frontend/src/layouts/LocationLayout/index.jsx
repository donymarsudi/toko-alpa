export default function LocationLayout() {
  return (
    <div className="px-10 py-10 md:px-20 md:py-20">
      <h2 className="text-center mx-auto text-xl lg:w-10/12 ">
        Toko Alpa, jual buah dan sayur, import dan lokal. Tempat nyaman dan
        bersih. Order via WA bisa diantar dari toko terdekat (free delivery
        untuk jarak maksimal 3 km dari toko).
      </h2>
      <div className="flex flex-wrap mt-16">
        <div className="w-full mb-16 lg:mb-0 lg:w-1/4 xl:w-1/3">
          <img
            src="./image/location/location-img.jpg"
            alt="Toko Alpa"
            className="w-full"
          />
          <div className="mt-5">
            <h3 className="font-bold leading-5 mb-2">
              Toko Alpa Kota Baru (Toko Pusat) - Pontianak, Kalimantan Barat
            </h3>
            <p className="leading-5">
              Jl. Ampera Gg. Bulan No.Samping, Sungai Bangkong, Kec. Pontianak
              Kota, Kota Pontianak, Kalimantan Barat 78115
            </p>
            <a
              href="https://maps.app.goo.gl/PJBYFFsSxtdXDtLt5"
              className="text-[.9rem] text-green-500 font-semibold mt-1"
              target="_blank"
            >
              Buka Di Peta
            </a>
            <h4 className="mt-9 font-bold">Melayani Pemesanan Online</h4>
            <p className=" mt-1">
              Wa Order:{" "}
              <a
                href="https://wa.me/6285828947377?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda"
                className="text-green-500 font-semibold"
                target="_blank"
              >
                0858-2894-7377
              </a>
            </p>
            <p className="">
              Waktu Buka:{" "}
              <span className="font-semibold">
                Senin s/d Minggu (6 Pagi s/d 9 Malam)
              </span>
            </p>
          </div>
        </div>
        <div className="w-full gap-5 flex flex-wrap lg:ps-16 lg:w-9/12 xl:w-2/3">
          <LocationElement bgColor="bg-slate-100"></LocationElement>
          <LocationElement bgColor="bg-slate-100 lg:bg-white"></LocationElement>
          <LocationElement bgColor="bg-slate-100 lg:bg-white"></LocationElement>
          <LocationElement bgColor="bg-slate-100"></LocationElement>
        </div>
      </div>
    </div>
  );
}

function LocationElement({ bgColor }) {
  return (
    <div className={`w-full h-fit p-8 lg:w-[47%] ${bgColor}`}>
      <h3 className="font-bold leading-5 mb-2">
        Toko Alpa Cabang Siantan - Pontianak, Kalimantan Barat
      </h3>
      <p className="leading-5">
        Gg. Selat Makasar No.73, Siantan Tengah, Kec. Pontianak Utara, Kota
        Pontianak, Kalimantan Barat 78243
      </p>
      <a
        href="https://maps.app.goo.gl/PJBYFFsSxtdXDtLt5"
        className="text-[.9rem] text-green-500 font-semibold mt-1"
        target="_blank"
      >
        Buka Di Peta
      </a>
      <h4 className="font-bold mt-9">Melayani Pemesanan Online</h4>
      <p className=" mt-1">
        Wa Order:{" "}
        <a
          href="https://wa.me/6285828947377?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda"
          className="text-green-500 font-semibold"
          target="_blank"
        >
          0857-5205-5271
        </a>
      </p>
      <p className="">
        Waktu Buka:{" "}
        <span className="font-semibold">
          Senin s/d Minggu (6 Pagi s/d 9 Malam)
        </span>
      </p>
    </div>
  );
}
