import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Footer from "../layouts/Footer";

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      <Header></Header>
      <Hero
        classContainer="h-[40vh] lg:h-[60vh]"
        classContent="lg:text-center mx-auto"
        classOverlay="inset-0"
        bgUrl="url('./image/contact/hero-bg.jpg')"
        title="Mari Terhubung!"
        classTitle="text-4xl font-semibold tracking-[.5rem] md:text-7xl md:tracking-[1rem]"
      ></Hero>
      <ContactLayout></ContactLayout>
      <Footer></Footer>
    </div>
  );
}

function ContactLayout() {
  return (
    <div className="px-5 py-20 lg:px-20">
      <div className="flex flex-wrap md:ps-10 lg:items-center md:items-start md:flex-nowrap">
        <div className="w-full md:w-1/2 lg:w-2/5">
          <img
            src="./image/contact/contact-img.jpg"
            alt="Mari Terhubung!"
            className="w-full"
          />
        </div>
        <div className="w-full mt-14 md:mt-0 md:ps-14 md:w-2/5 lg:w-1/2">
          <h3 className="font-bold text-slate-800 text-xl">Hubungi Kami</h3>
          <p className="mt-5">
            Pertanyaan dan saran mengenai layanan kami silahkan mengisi form
            yang tersedia di bawah.
          </p>
          <p className="mt-5">
            Tanggapan atas pertanyaan dan saran akan di proses secepatnya di
            hari kerja: Senin – jum’at jam 9:00 – 18:00.
          </p>
          <h4 className="font-bold text-[1.1rem] mt-5 text-slate-800">
            Kantor Kami
          </h4>
          <p>
            Jl. Ampera Gg. Bulan No.Samping, Sungai Bangkong, Kec. Pontianak
            Kota, Kota Pontianak, Kalimantan Barat 78115
          </p>
        </div>
      </div>
      <div className="mt-20">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}

function ContactForm() {
  function getMessage(e) {
    e.preventDefault();
    const FORM_DATA = new FormData(e.target);
    const DATA = Object.fromEntries(FORM_DATA);
    fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DATA),
    })
      .then((data) => data.json())
      .then((data) => alert(data.success || data.error))
      .catch(() =>
        alert("Gagal Mengirim Data! Sepertinya Ada Kesalahan Dari Data Server")
      );
  }

  return (
    <div className="w-full py-5 px-5 rounded-md mx-auto md:w-10/12 md:py-10 md:shadow-md lg:w-9/12 lg:px-28">
      <form onSubmit={getMessage} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Nama"
          required
          name="nama"
          className="bg-slate-100 p-2 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          className="bg-slate-100 p-2 outline-none"
        />
        <input
          type="text"
          placeholder="Subjek"
          required
          name="subjek"
          className="bg-slate-100 p-2 outline-none"
        />
        <textarea
          name="pesan"
          cols="30"
          rows="10"
          placeholder="Pesan"
          required
          className="bg-slate-100 p-2 outline-none"
        ></textarea>
        <button className="bg-green-700 hover:bg-green-600 text-white font-bold rounded-md p-2">
          Kirim
        </button>
      </form>
    </div>
  );
}
