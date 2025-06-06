export default function VisionAndMisionElement({
  containerClass,
  imgUrl,
  title,
  children,
}) {
  return (
    <div
      className={`mt-5 flex flex-col items-center rounded-xl p-10 relative w-full mb-7 md:mb-14 lg:mb-0 lg:w-1/2 ${containerClass}`}
    >
      <img src={imgUrl} alt="" className="w-52 absolute -top-20" />
      <div className="mt-10">
        <h3 className="text-4xl font-semibold text-slate-800 text-center">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
