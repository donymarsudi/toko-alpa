import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import VisionAndMision from "../layouts/visionAndMision";
import Testimonial from "../layouts/Testimonial";
import Footer from "../layouts/Footer/index";

export default function AboutPage() {
  return (
    <div>
      <Header></Header>
      <Hero
        classContainer="h-[75vh]"
        classContent="lg:text-center mx-auto"
        classOverlay="inset-0"
        classText="mx-auto font-light"
        title="Kenali Siapa Kami"
        desc="Alpa Pontianak adalah toko buah dan sayuran segar yang menghadirkan beragam pilihan buah lokal dan impor berkualitas untuk memenuhi kebutuhan harian Anda. Kami berkomitmen menyajikan buah-buahan segar, sehat, dan bergizi langsung dari petani dan distributor terpercaya. Belanja mudah, cepat, dan hemat hanya di Alpa Pontianak!"
        bgUrl="url('./image/about-hero-bg.jpg')"
      ></Hero>
      <VisionAndMision></VisionAndMision>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}
