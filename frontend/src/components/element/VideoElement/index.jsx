import Button from "../Button";
export default function VideoElement({ title, buttonText, url, vidSrc }) {
  return (
    <div className="relative w-full md:w-10/12 lg:w-[48%]">
      <video src={`${vidSrc}`} typeof="video/mp4" autoPlay muted loop></video>
      <div className="absolute inset-0 flex flex-col justify-end items-center">
        <h3 className="text-white text-xl text-center w-10/12 md:text-2xl">
          {title}
        </h3>
        <Button classTambahan="mt-5 mb-3 text-white rounded" url={`${url}`}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
