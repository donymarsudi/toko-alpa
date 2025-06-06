import { useState, useEffect } from "react";
import Button from "../../components/element/Button/index";

export default function ProductLayout() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [buah, setBuah] = useState([]);
  const [sayuran, setSayuran] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((res) => ALL_PRODUCTS(res))
      .catch((err) => console.log(err));
  }, []);

  function ALL_PRODUCTS(products) {
    const buahBuahan = products.filter((product) => {
      return product.category === "buah";
    });
    const sayuran = products.filter((product) => {
      return product.category === "sayuran";
    });
    setBuah(buahBuahan);
    setSayuran(sayuran);
  }

  const tabs = [
    {
      id: "tab1",
      label: "Buah",
      content: buah,
    },
    {
      id: "tab2",
      label: "Sayuran",
      content: sayuran,
    },
    {
      id: "tab3",
      label: "Hampers",
      content: [
        {
          name: "Mangga Kalimantan 1 kg",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus suscipit iure corrupti culpa accusamus beatae ad laboriosam quisquam, aspernatur ea! Nam ex officia cumque dolore corporis eum earum pariatur repudiandae?",
          price: 15000,
        },
      ],
    },
  ];

  return (
    <div className="px-7 py-20 md:px-10 lg:px-20">
      <div className="text-center">
        <h2 className="text-[30px] font-[700] text-slate-800 mb-3 max-w-[350px] mx-auto leading-9">
          Berbagai Produk Berkualitas untuk Anda
        </h2>
        <p className="text-[15px] max-w-[400px] mx-auto">
          Pilihan buah dan sayuran yang terjaga kualitas serta kesegarannya,
          untuk kamu dan keluarga.
        </p>
        <div className="flex mx-auto mt-12 justify-center w-80 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2 text-sm font-medium transition duration-200 ${
                activeTab === tab.id
                  ? "border-b-2 border-green-500 bg-slate-50 text-green-500"
                  : "text-gray-600 hover:text-green-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap px-4 py-10 gap-8 h-fit lg:gap-5">
        {tabs
          .find((tab) => tab.id === activeTab)
          ?.content.map((product) => (
            <div
              className="w-full p-4 rounded-md shadow-md bg-white md:w-[47%] lg:w-[30%]"
              key={product._id}
            >
              <h3 className="font-semibold text-lg text-green-700">
                {product.name}
              </h3>
              <img
                src={`./image/products-img/products/${product.category}/${product.image}`}
                alt={product.name}
                className="my-4 w-full h-40 object-cover mx-auto"
              />
              <p className="text-sm text-gray-600 mt-2">{product.desc}</p>
              <div className="flex justify-between items-center">
                <p className="mt-4 font-bold text-green-500">
                  Rp {product.price.toLocaleString()}
                </p>
                <Button
                  url="https://wa.me/6285828947377?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda"
                  classTambahan="ml-auto mt-4 px-5 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Beli
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
