import berita1 from '../../assets/images/berita1.jpg';
import berita2 from '../../assets/images/berita2.jpg';
import berita3 from '../../assets/images/berita3.jpg';
import berita4 from '../../assets/images/berita4.jpg';
import berita5 from '../../assets/images/berita5.jpg';
import berita6 from '../../assets/images/berita6.jpg';
import berita7 from '../../assets/images/berita7.jpg';
import berita8 from '../../assets/images/berita8.jpg';
import berita9 from '../../assets/images/berita9.jpg';
import berita10 from '../../assets/images/berita10.jpg';
import berita11 from '../../assets/images/berita11.jpg';
import berita12 from '../../assets/images/berita12.jpg';
import berita13 from '../../assets/images/berita13.jpg';
import berita14 from '../../assets/images/berita14.jpg';
import berita15 from '../../assets/images/berita15.jpg';
import berita16 from '../../assets/images/berita16.jpg';
import berita17 from '../../assets/images/berita17.jpg';
import berita18 from '../../assets/images/berita18.jpg';
import berita19 from '../../assets/images/berita19.jpg';
import berita20 from '../../assets/images/berita20.jpg';
import berita21 from '../../assets/images/berita21.jpg';
import berita22 from '../../assets/images/berita22.jpg';
import berita23 from '../../assets/images/berita23.jpg';
import berita24 from '../../assets/images/berita24.jpg';
import berita25 from '../../assets/images/berita25.jpg';
import berita26 from '../../assets/images/berita26.jpg';
import berita27 from '../../assets/images/berita27.jpg';
import berita28 from '../../assets/images/berita28.jpg';
import berita29 from '../../assets/images/berita29.jpg';
import berita30 from '../../assets/images/berita30.jpg';
import berita31 from '../../assets/images/berita31.jpg';
import berita32 from '../../assets/images/berita32.jpg';
import berita33 from '../../assets/images/berita33.jpg';
import berita34 from '../../assets/images/berita34.jpg';
import berita35 from '../../assets/images/berita35.jpg';
import berita36 from '../../assets/images/berita36.jpg';
import berita37 from '../../assets/images/berita37.jpg';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import Kampanye from './Kampanye';
import { motion } from "framer-motion";

const news = [
  {
    title: 'Kaesang Ajak Generasi Zilenial Coblos Yang Baju Biru',
    img: berita37,
    link: 'https://inilahjateng.com/kaesang-ajak-generasi-zilenial-coblos-yang-baju-biru/'
  },
  {
    title: 'Rumah Perlindungan Tiap Kecamatan, Solusi Luthfi-Yasin Tekan Angka Kekerasan Anak dan Ibu di Jateng',
    img: berita36,
    link: 'https://bahterajateng.com/rumah-perlindungan-tiap-kecamatan-solusi-luthfi-yasin-tekan-angka-kekerasan-anak-dan-ibu-di-jateng/'
  },
  {
    title: 'Arus Bawah Prabowo dan Jokowi Deklarasi Dukung Luthfi-Yasin',
    img: berita35,
    link: 'https://inilahjateng.com/arus-bawah-prabowo-dan-jokowi-deklarasi-dukung-luthfi-yasin/'
  },
  {
    title: 'Cagub Jateng Ahmad Luthfi : Debat Bukan Sekadar Bicara tapi ‘Scientific Problem Solving’ untuk Jateng',
    img: berita34,
    link: 'https://solo.kilat.com/politik/103013886373/cagub-jateng-ahmad-luthfi-debat-bukan-sekadar-bicara-tapi-scientific-problem-solving-untuk-jateng'
  },
  {
    title: 'Prabowo dan Jokowi Dukung Penuh Luthfi-Yasin untuk Jawa Tengah Terintegrasi',
    img: berita33,
    link: 'https://jateng.tribunnews.com/2024/11/05/prabowo-dan-jokowi-dukung-penuh-luthfi-yasin-untuk-jawa-tengah-terintegrasi'
  },
  {
    title: 'Prabowo dan Jokowi Dukung Luthfi-Yasin, Jateng Siap Sambut Era Pembangunan Linear',
    img: berita32,
    link: 'https://bahterajateng.com/prabowo-dan-jokowi-dukung-luthfi-yasin-jateng-siap-sambut-era-pembangunan-linear/'
  },
  {
    title: 'Jokowi Tanggapi Survei Luthfi-Taj Yasin Kalah dari Andika-Hendi: Yang Bimbang Dibuat Tidak Bimbang',
    img: berita31,
    link: 'https://www.merdeka.com/politik/jokowi-tanggapi-survei-luthfi-taj-yasin-kalah-dari-andika-hendi-yang-bimbang-dibuat-tidak-bimbang-228500-mvk.html?page=2'
  },
  {
    title: 'Survei Terkini LSI Denny JA: Luthfi-Yasin 46,8%, Andika-Hendi 28,2%',
    img: berita30,
    link: 'https://www.heloindonesia.com/pilkada/33660/survei-terbaru-lsi-denny-ja-di-pilgub-jateng-luthfi-yasin-468-persen-ungguli-andika-hendi-282-persen'
  },
  {
    title: 'Survei Terbaru LSI Denny JA di Pilgub Jateng: Luthfi-Yasin 46,8 Persen Ungguli Andika-Hendi 28,2 Persen',
    img: berita29,
    link: 'https://www.heloindonesia.com/pilkada/33660/survei-terbaru-lsi-denny-ja-di-pilgub-jateng-luthfi-yasin-468-persen-ungguli-andika-hendi-282-persen'
  },
  {
    title: 'Pedagang Pasar Burung Kartini Semarang Curhat ke Cagub Ahmad Luthfi: Sepinya Pengunjung hingga Tingginya Retribusi',
    img: berita28,
    link: 'https://bahterajateng.com/pedagang-pasar-burung-kartini-semarang-curhat-ke-cagub-ahmad-luthfi-sepinya-pengunjung-hingga-tingginya-retribusi/'
  },
  {
    title: 'Debat Pilgub Jateng 2024: Ahmad Luthfi : Kami Bangun Jawa Tengah Sesuai Perintah Pak Jokowi dan Pak Prabowo',
    img: berita27,
    link: 'https://www.jatengnetwork.com/jateng/28413846266/debat-pilgub-jateng-2024-ahmad-luthfi-kami-bangun-jawa-tengah-sesuai-perintah-pak-jokowi-dan-pak-prabowo'
  },
  {
    title: 'Debat Perdana Pilgub, Taj Yasin Maimoen Pimpin Doa Bersama di Posko Pemenangan Semarang',
    img: berita26,
    link: 'Dhttps://wartabengawan.news/headline/jelang-debat-perdana-pilgub-taj-yasin-maimoen-pimpin-doa-bersama-di-posko-pemenangan-semarang/'
  },
  {
    title: 'Kader Golkar Wonosobo Solid Menangkan Ahmad Luthfi-Gus Yasin',
    img: berita25,
    link: 'https://www.suarapembaruan.news/politik/53672332/kader-golkar-wonosobo-solid-menangkan-ahmad-luthfi-gus-yasin'
  },
  {
    title: 'Pilgub Jateng 2024: Hadiri Kalioso Bersholawat, Ahmad Luthfi Dinobatkan sebagai Bapak Santri Jawa Tengah',
    img: berita24,
    link: 'https://www.jatengnetwork.com/jateng/28413817324/pilgub-jateng-2024-hadiri-kalioso-bersholawat-ahmad-luthfi-dinobatkan-sebagai-bapak-santri-jawa-tengah'
  },
  {
    title: 'Kiai NU Jateng Siap Mobilisasi Dukungan untuk Kemenangan Luthfi-Yasin',
    img: berita23,
    link: 'https://www.suarapembaruan.news/politik/53668147/kiai-nu-jateng-siap-mobilisasi-dukungan-untuk-kemenangan-luthfi-yasin'
  },
  {
    title: 'Kampanye Kreatif Cagub Ahmad Luthfi-Taj Yasin',
    img: berita22,
    link: 'https://inilahjateng.com/kampanye-kreatif-cagub-ahmad-luthfi-taj-yasin/'
  },
  {
    title: 'Masya Allah, Gus Yasin Ikut Haul Habib Ali Solo dari Teras Rumah Warga',
    img: berita21,
    link: 'https://solo.kilat.com/politik/103013805444/masya-allah-gus-yasin-ikut-haul-habib-ali-solo-dari-teras-rumah-warga'
  },
  {
    title: 'Bibit Waluyo: Presiden Prabowo Pilih Luthfi, Tegak Lurus Sukseskan Program Presiden',
    img: berita20,
    link: 'https://bahterajateng.com/bibit-waluyo-presiden-prabowo-pilih-luthfi-tegak-lurus-sukseskan-program-presiden/'
  },
  {
    title: 'Gus Ali Watucongol Deklarasikan Dukungan untuk Paslon Nomor 2 Luthfi-Gus Yasin',
    img: berita19,
    link: 'https://emsatunews.co.id/2024/10/gus-ali-watucongol-deklarasikan-dukungan-untuk-paslon-nomor-2-luthfi-gus-yasin.html'
  },
  {
    title: 'Ratusan Emak-Emak Relawan Luthfi-Yasin Sambut Jokowi di Solo',
    img: berita18,
    link: 'https://www.suarapembaruan.news/nasional/53660799/ratusan-emak-emak-relawan-luthfi-yasin-sambut-jokowi-di-solo'
  },
  {
    title: 'Luthfi-Yasin Turut Sambut Jokowi Bareng Warga di Solo',
    img: berita17,
    link: 'https://inilahjateng.com/luthfi-yasin-turut-sambut-jokowi-bareng-warga-di-solo/'
  },
  {
    title: 'Kunjungi Kampung Batik Kauman Pekalongan, Ahmad Luthfi Temukan Persoalan Ini',
    img: berita16,
    link: 'https://sleman.inews.id/read/508166/kunjungi-kampung-batik-kauman-pekalongan-ahmad-luthfi-temukan-persoalan-ini/all'
  },
  {
    title: 'Ahmad Luthfi Berkomitmen Wujudkan Jawa Tengah Sebagai Sumber Penghidupan, Dukungan PGRI Jateng Terhadap Nasib Guru Honorer',
    img: berita15,
    link: 'https://www.zonasi.id/ahmad-luthfi-berkomitmen-wujudkan-jawa-tengah-sebagai-sumber-penghidupan-dukungan-pgri-jateng-terhadap-nasib-guru-honorer/'
  },
  {
    title: 'Pesan Penting Cagub Jateng Ahmad Luthfi ke Generasi Zilenial: “Jawa Tengah Jadi Sumber Penghidupan, Bukan Tempat Mudik Lagi',
    img: berita14,
    link: 'https://bahterajateng.com/pesan-penting-cagub-jateng-ahmad-luthfi-ke-generasi-zilenial-jawa-tengah-jadi-sumber-penghidupan-bukan-tempat-mudik-lagi/'
  },
  {
    title: 'Ngopeni Petani Hutan Pati, Cagub Ahmad Luthfi: Ekspor Petai ke Jepang',
    img: berita13,
    link: 'https://inilahjateng.com/ngopeni-petani-hutan-pati-cagub-ahmad-luthfi-ekspor-petai-ke-jepang/'
  },
  {
    title: 'PPP Jateng Sumbang 1,5 juta Suara untuk Kemenangan Luthfi-Yasin',
    img: berita12,
    link: 'https://jatengpos.co.id/ppp-jateng-akan-sumbang-15-juta-suara-untuk-kemenangan-luthfi-yasin/bejan/'
  },
  {
    title: 'Ada Apa? Cawagub Gus Yasin Tiba-tiba Kabur Naik Motor Sama Isterinya',
    img: berita11,
    link: 'https://jatengpos.co.id/ada-apa-cawagub-gus-yasin-tiba-tiba-kabur-naik-motor-sama-isterinya/bejan/'
  },
  {
    title: 'Gerindra Sebut Pertemuan Prabowo-Megawati Untungkan Ahmad Luthfi di Pilgub Jateng',
    img: berita10,
    link: 'https://indoraya.news/gerindra-sebut-pertemuan-prabowo-megawati-untungkan-ahmad-luthfi-di-pilgub-jateng'
  },
  {
    title: 'Sekjend Gerindra Sebut Cagub Ahmad Luthfi Pilihan Prabowo',
    img: berita9,
    link: 'https://inilahjateng.com/sekjend-gerindra-sebut-cagub-ahmad-luthfi-pilihan-prabowo/'
  },
  {
    title: 'Dua Ponpes Terbesar Brebes dengan 10.000 Santri Siap Menangkan Paslon 2 Luthfi-Yasin',
    img: berita8,
    link: 'https://jateng.akurat.co/news/1335187866/dua-ponpes-terbesar-brebes-dengan-10000-santri-siap-menangkan-paslon-2-luthfi-yasin'
  },
  {
    title: 'Gus Iqdam Puji Kesabaran Ahmad Luthfi dalam Menghadapi Cobaan Hidup',
    img: berita7,
    link: 'https://bahterajateng.com/gus-iqdam-puji-kesabaran-ahmad-luthfi-dalam-menghadapi-cobaan-hidup/'
  },
  {
    title: 'Menangkan Luthfi-Yasin, Jaringan Perempuan Nahdliyin Tegal Gerilya Door to Door',
    img: berita6,
    link: 'https://inilahjateng.com/menangkan-luthfi-yasin-jaringan-perempuan-nahdliyin-tegal-gerilya-door-to-door/'
  },
  {
    title: 'Para Kyai dan Masyarakat Brebes Tegak Lurus Dukung Gus Yasin',
    img: berita1,
    link: 'https://www.kabarno.com/para-kyai-dan-masyarakat-brebes-tegak-lurus-dukung-gus-yasin/?amp=1'
  },
  {
    title: 'Belok Arah! Relawan Andika Perkasa Soloraya Pilih Dukung Ahmad Luthfi-Taj Yasin',
    img: berita2,
    link: 'https://surakarta.suara.com/read/2024/10/10/233559/belok-arah-relawan-andika-perkasa-soloraya-pilih-dukung-ahmad-luthfi-taj-yasin'
  },
  {
    title: 'Ahmad Luthfi & Taj Yasin Bakal Genjot Kesejahteraan Guru Agama',
    img: berita3,
    link: 'https://news.detik.com/berita/d-7583085/ahmad-luthfi-taj-yasin-bakal-genjot-kesejahteraan-guru-agama'
  },
  {
    title: 'Cagub Ahmad Luthfi Ngaji Bareng Gus Iqdam di Kalipepe Land Boyolali',
    img: berita4,
    link: 'https://news.detik.com/berita/d-7583085/ahmad-luthfi-taj-yasin-bakal-genjot-kesejahteraan-guru-agama'
  },
  {
    title: 'Unik, Di Banyumas Cagub Ahmad Luthfi Gelar Lomba Mancing',
    img: berita5,
    link: 'https://inilahjateng.com/unik-di-banyumas-cagub-ahmad-luthfi-gelar-lomba-mancing/#google_vignette'
  },
];

function Berita() {

  const Scale = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 2.0 },
    viewport: { once: true },
  };

  const Motionx = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.5, ease: "easeInOut" },
    viewport: { once: true },
  };

  return (
    <section id='news'>
      <div className="grid grid-cols-1 bg-white md:my-36 my-20">
        <div className="xl:mx-20 mx-4 space-y-4 md:space-y-8">
          <motion.div {...Scale}>
            <div className='space-y-1 md:space-y-2'>
              <h1 className="text-black text-center text-4xl md:text-6xl font-extrabold">Berita Terkini</h1>
              <div className='p-1 md:p-2 bg-blue-700 md:w-1/2 w-3/4 mx-auto rounded-l-3xl rounded-r-3xl'></div>
            </div>
          </motion.div>
          <div className='md:flex justify-between'>
            <div className="flex overflow-x-scroll space-x-2 md:space-x-4">
              {news.map((item, index) => (
                <motion.div key={index} {...Motionx}>
                  <a href={item.link} target='_blank' rel="noopener noreferrer">
                    <div className='bg-gray-100 relative w-64 md:w-80 flex-shrink-0 rounded-3xl'>
                      <img className='w-full rounded-t-3xl h-48' src={item.img} alt={item.title} />
                      <h1 className='p-3 text-black text-xs md:text-sm font-bold' style={{ textAlign: "justify" }}>
                        {item.title}
                      </h1>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div {...Motionx}>
            <div className='md:p-2 p-1 bg-orange-500 hover:scale-125 hover:delay-100 duration-100 rounded-xl px-3 w-fit mx-auto'>
              <Link className='flex justify-center' to='/news'>
                <h1 className='text-white text-base md:text-xl font-light my-auto'>Lihat Selengkapnya</h1>
                <MdArrowOutward className='text-white w-6 md:w-8 h-6 md:h-8' />
              </Link>
            </div>
          </motion.div>
        </div>
        <Kampanye />
      </div>
    </section>
  );
}

export default Berita;
