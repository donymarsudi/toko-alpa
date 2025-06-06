export default function PromotionElement({ imgUrl, children }) {
  return (
    <div className="w-[95%] lg:w-[350px]">
      <img src={`${imgUrl}`} alt="" className="mx-auto" />
      <p className="text-center text-xl mt-5 md:w-3/4 md:mx-auto">{children}</p>
    </div>
  );
}
