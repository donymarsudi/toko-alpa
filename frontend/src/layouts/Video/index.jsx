import VideoElement from "../../components/element/VideoElement";

export default function Video() {
  return (
    <div className="px-3 pt-10 md:px-7 lg:px-20 lg:pt-20">
      <h2 className="text-center font-bold text-2xl text-slate-800 md:mx-auto lg:w-2/3">
        Alpa adalah Salah Satu Toko Buah Terkenal Di Pontianak yang Berkomitmen
        Memberikan Kualitas Produk dan Layanan Terbaik Kepada Pelanggan.
      </h2>
      <div className="flex justify-center mt-10 flex-wrap gap-5">
        <VideoElement
          title="Pengemasan Aman dan Kualitas Produk Terjamin"
          buttonText="Order Now"
          url="https://wa.me/6285828947377?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda"
          vidSrc="./video/1.mp4"
        />
        <VideoElement
          title="Pelayanan Ramah, Kepuasan Pelanggan Diutamakan"
          buttonText="Location"
          url="/location"
          vidSrc="./video/2.mp4"
        />
        <VideoElement
          title="Dipanen Langsung dari Petani Terpercaya"
          buttonText="Our Products"
          url="/product"
          vidSrc="./video/3.mp4"
        />
        <VideoElement
          title="Dikelola dengan Baik untuk Menghasilkan Produk Berkualitas Tinggi"
          buttonText="Custom Hampers"
          url="/hampers"
          vidSrc="./video/4.mp4"
        />
      </div>
    </div>
  );
}
