import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import ProductLayout from "../layouts/ProductLayout";
import Footer from "../layouts/Footer";

export default function ProductsPage() {
  return (
    <div>
      <Header></Header>
      <Hero
        classContainer="h-[40vh] lg:h-[60vh]"
        classContent="lg:text-center mx-auto"
        classOverlay="inset-0"
        classText="mx-auto font-light"
        bgUrl="url('./image/products-img/hero-img.jpg')"
      ></Hero>
      <ProductLayout></ProductLayout>
      <Footer></Footer>
    </div>
  );
}
