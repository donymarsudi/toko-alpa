// import Button from "../../components/element/Button";
export default function Hero({
  classContainer = "",
  classOverlay = "",
  classContent = "",
  classTitle = "",
  Button = "",
  classText = "",
  bgUrl = "",
  title = "",
  desc = "",
}) {
  return (
    <div
      className={`${classContainer} relative flex flex-col justify-center`}
      style={{
        backgroundImage: bgUrl,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`absolute bg-black opacity-45 ${classOverlay} z-0 `}
      ></div>
      <div
        className={`text-center z-10 text-white max-w-[1400px] md:px-28 lg:px-0 lg:ps-20 lg:w-3/4 ${classContent} `}
      >
        <h1 className={`font-bold text-4xl px-8 lg:p-0 ${classTitle}`}>
          {title}
        </h1>
        <p className={`my-5 px-3 lg:p-0 lg:w-10/12 ${classText}`}>{desc}</p>
        {Button}
      </div>
    </div>
  );
}
