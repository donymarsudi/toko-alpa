import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerClose, setHeaderClose] = useState(true);
  const [opacity, setOpacity] = useState(0);

  const toggleOpenMenu = (e) => {
    setMenuOpen((prev) => !prev);
    setHeaderClose((prev) => !prev);
  };

  const toggleCloseMenu = (e) => {
    setMenuOpen((prev) => !prev);
    setHeaderClose((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const opc = Math.min(window.scrollY / 150, 1);
      setOpacity(opc);
    });
  }, [opacity]);

  return (
    <header
      className={`fixed min-w-full top-0 z-20 lg:py-3 lg:px-14`}
      style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}
    >
      <div className="max-w-[1800px] mx-auto">
        <div
          className={`flex items-center py-2 justify-between ${
            headerClose ? "flex" : "hidden"
          }`}
        >
          <a href="/" className="w-14 relative lg:w-24">
            <img
              src="./image/navbar/logo-alpa.png"
              alt=""
              className="w-full absolute -top-5 left-3 lg:-top-3 lg:left-0"
            />
          </a>
          <span
            className="px-5 me-3 border cursor-pointer lg:hidden"
            onClick={toggleOpenMenu}
          >
            <i className="bi bi-list font-semibold text-2xl cursor-pointer text-white mix-blend-difference"></i>
          </span>
          <div
            className={`flex flex-col absolute pt-5 transition-all ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } items-center gap-10 inset-0 bg-slate-800 min-h-screen text-white mix-blend-difference lg:gap-12 lg:static lg:flex-row lg:bg-transparent lg:translate-x-0 lg:min-h-0 lg:pt-0`}
          >
            <i
              className="bi bi-x-circle text-3xl border-b lg:hidden"
              onClick={toggleCloseMenu}
            ></i>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/product">Products</a>
            <a href="/location">Location</a>
            <a href="/contact">Contact Us</a>
            <a
              href="https://wa.me/6285828947377?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda"
              className="bg-green-400 rounded-3xl text-white px-3 py-1 w-fit lg:hidden"
            >
              Mulai Berbelanja!
            </a>
          </div>
          <a
            href="https://wa.me/6285828947377?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda"
            className="bg-green-400 rounded-3xl text-white px-3 py-1 w-fit mix-blend-normal hidden lg:block"
            style={{ color: "white" }}
          >
            Mulai Berbelanja!
          </a>
        </div>
        <div
          className={`flex flex-col absolute pt-5 transition-all ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } items-center gap-10 inset-0 bg-slate-800 min-h-screen text-white mix-blend-difference lg:hidden`}
        >
          <i
            className="bi bi-x-circle text-3xl border-b lg:hidden"
            onClick={toggleCloseMenu}
          ></i>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/product">Products</a>
          <a href="/location">Location</a>
          <a href="/contact">Contact Us</a>
          <a
            href="https://wa.me/6285828947377?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda"
            className="bg-green-400 rounded-3xl text-white px-3 py-1 w-fit lg:hidden"
          >
            Mulai Berbelanja!
          </a>
        </div>
      </div>
    </header>
  );
}
