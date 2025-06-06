import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import LocationLayout from "../layouts/LocationLayout";
import Footer from "../layouts/Footer";

export default function LocationPage() {
  return (
    <div>
      <Header></Header>
      <Hero
        classContainer="h-[40vh] lg:h-[60vh]"
        classContent="lg:text-center mx-auto"
        classOverlay="inset-0"
        bgUrl="url('./image/location/hero-bg.jpg')"
        title="Store Location"
        classTitle="text-4xl font-[300] tracking-[.5rem] md:text-7xl md:tracking-[1rem]"
      ></Hero>
      <LocationLayout></LocationLayout>
      <Footer></Footer>
    </div>
  );
}
