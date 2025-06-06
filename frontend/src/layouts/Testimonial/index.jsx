import { useEffect } from "react";

export default function Testimonial() {
  return (
    <div className="px-7 lg:px-20 py-20">
      <h1 className="text-4xl font-bold text-center text-slate-800">
        Testimoni Pelanggan
      </h1>
      <p className="text-center mx-auto w-[95%] mt-5 mb-10 md:w-3/5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aliquid.
        Est impedit doloribus sapiente explicabo! Lorem ipsum dolor sit amet
        consectetur.
      </p>
      <div className="flex gap-8 flex-wrap lg:flex-nowrap">
        <TestimonialElement
          img="1.jpg"
          name="Marlan"
          status="Mahasiswa Universitas Tanjungpura"
          rating={5}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis
          laboriosam reprehenderit quia! Enim aliquid quo labore. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Officiis,
        </TestimonialElement>
        <TestimonialElement
          img="2.jpg"
          name="Jhonathan"
          status="Selebgram"
          rating={4}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis
          laboriosam reprehenderit quia! Enim aliquid quo labore. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Officiis,
        </TestimonialElement>
        <TestimonialElement
          img="3.jpg"
          name="Vincent"
          status="Pegawai Negeri Sipil"
          rating={5}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis
          laboriosam reprehenderit quia! Enim aliquid quo labore. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Officiis,
        </TestimonialElement>
      </div>
    </div>
  );
}

function TestimonialElement({ children, img, name, status, rating }) {
  const starNotFil = 5 - rating;
  useEffect(() => {
    console.log(starNotFil);
  }, []);
  return (
    <div className="relative p-7 bg-slate-50 shadow-md w-full md:w-[47%] lg:w-1/3">
      <p className="mx-5 py-3 font-[400] italic border-b">
        <i className="absolute left-3 top-3 text-2xl bi bi-quote border px-1 rounded-full bg-green-900 text-white"></i>
        {children}
      </p>
      <div className="flex gap-7 mt-3 px-5">
        <div className="w-16 rounded-full">
          <img
            src={`./image/about-img/testimoni/${img}`}
            alt={name}
            className="block w-full rounded-full"
          />
        </div>
        <div className="">
          <h4 className="font-bold text-slate-800">{name}</h4>
          <p className="text-slate-500 text-xs">{status}</p>
          <div className="flex gap-1 mt-1">
            {[...Array(rating)].map((_, index) => (
              <i key={index} className="bi bi-star-fill text-yellow-500"></i>
            ))}
            {starNotFil > 0 &&
              [...Array(starNotFil)].map((_, index) => {
                return (
                  <i key={index} className="bi bi-star text-yellow-500"></i>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
