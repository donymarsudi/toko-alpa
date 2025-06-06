import Button from "../../components/element/Button";
export default function Info({
  title,
  imgUrl,
  buttonUrl,
  children,
  buttonText,
  textOrder,
  imgOrder,
}) {
  return (
    <div className="px-5 py-20 text-center w-full flex flex-col md:px-20 lg:text-start lg:flex-row lg:justify-center lg:items-center ">
      <div className={`${textOrder} lg:w-[700px] `}>
        <h2 className="text-3xl font-bold text-slate-900 my-5">{title}</h2>
        <p className="text-slate-800">{children}</p>
        <Button
          classTambahan="text-white block mt-3 w-fit mx-auto lg:mx-0"
          url={`${buttonUrl}`}
        >
          {buttonText}
        </Button>
      </div>
      <div className={`${imgOrder} max-w-[500px] mx-auto`}>
        <img
          src={`${imgUrl}`}
          alt="Pengiriman dan Pemesanan Produk"
          className="w-full"
        />
      </div>
    </div>
  );
}
