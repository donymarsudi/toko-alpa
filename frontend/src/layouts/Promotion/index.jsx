import PromotionElement from "../../components/element/PromotionElement";

export default function Promotion() {
  return (
    <div className="px-8 md:px-24 pb-20 mt-8">
      <div className="flex flex-wrap gap-10 justify-evenly">
        <PromotionElement imgUrl="./image/promotion/1.png">
          Banyak pilihan buah import dan lokal berkualitas seperti anggur, apel,
          jeruk, kiwi, mangga, alpukat, pisang, nanas, melon, dll.
        </PromotionElement>
        <PromotionElement imgUrl="./image/promotion/2-1.jpg">
          Di Alpa, kini tersedia sayuran segar cocok untuk masak, hotpot atau
          salad untuk jenis sayur tertentu.
        </PromotionElement>
        <PromotionElement imgUrl="./image/promotion/3-1.jpg">
          Pesan hampers buah sekarang! Cocok untuk ulang tahun, Ibu baru
          melahirkan, pasien dalam penyembuhan, pembukaan kantor atau hari raya.
          Isi parcel bisa sesuai permintaan.
        </PromotionElement>
      </div>
    </div>
  );
}
