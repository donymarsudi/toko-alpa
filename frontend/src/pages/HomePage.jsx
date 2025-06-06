import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Info from "../layouts/Info";
import Video from "../layouts/Video";
import Promotion from "../layouts/Promotion";
import Footer from "../layouts/Footer";
import Button from "../components/element/Button";

export default function HomePage() {
  return (
    <div>
      <Header></Header>
      <Hero
        classContainer="min-h-screen"
        classOverlay="inset-0"
        bgUrl="url('./image/hero-bg.jpg')"
        classContent="lg:text-start"
        Button={
          <Button url="https://wa.me/6285828947377?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda">
            Shop Now
          </Button>
        }
        title="Rasakan Kesegaran Buah Lokal Terbaik"
        desc="Kami berkomitmen dalam menyediakan segala kebutuhan kamu. Mulai dari
          Sayuran segar setiap hari, sampai buah-buahan yang memiliki kualitas
          terjamin. Hingga sampai ke pelukanmu!"
      ></Hero>
      <Info
        title="Melayani Pemesanan dan Pengiriman untuk Area Pontianak dan Sekitarnya"
        buttonUrl="https://wa.me/6285828947377?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda"
        imgUrl="./image/info/1.1.png"
        buttonText="Belanja Sekarang!"
        textOrder="order-2 lg:order-1"
        imgOrder="order-1 lg:order-2"
      >
        Kami melayani pemesanan dan pengiriman untuk area Pontianak dan
        sekitarnya dengan layanan yang cepat, aman, dan terpercaya. Nikmati
        kemudahan berbelanja tanpa harus keluar rumah, cukup pesan dan kami
        antar ke lokasi Anda!
      </Info>
      <Info
        title="Menyediakan Berbagai Jenis Buah dan Sayuran yang Segar dan Berkualitas"
        buttonUrl="https://wa.me/6285828947377?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda"
        imgUrl="./image/info/2.png"
        buttonText="Cobalah Sekarang!"
        textOrder="order-2 lg:order-2"
        imgOrder="order-1 lg:order-1"
      >
        Kami menyediakan berbagai jenis buah dan sayuran segar berkualitas
        tinggi, langsung dari petani terpercaya. Setiap produk dipilih dengan
        cermat untuk memastikan kesegaran, kebersihan, dan rasa terbaik sampai
        ke tangan Anda. Cocok untuk konsumsi harian maupun kebutuhan bisnis
        kuliner Anda!
      </Info>
      <Video></Video>
      <Promotion></Promotion>
      <Footer></Footer>
    </div>
  );
}
