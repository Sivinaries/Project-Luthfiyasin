import { useState } from 'react';
import bg from '../../assets/images/bg.png';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const newsData = [
  {
    date: '15 November 2024',
    title: 'Gerindra Minta Kader Genjot Kemenangan Luthfi-Yasin di Pilgub Jateng',
    link: 'https://inilahjateng.com/gerindra-minta-kader-genjot-kemenangan-luthfi-yasin-di-pilgub-jateng/'
  },
  {
    date: '15 November 2024',
    title: 'Kaesang Ajak Generasi Zilenial Coblos Yang Baju Biru',
    link: 'https://inilahjateng.com/kaesang-ajak-generasi-zilenial-coblos-yang-baju-biru/'
  },
  {
    date: '15 November 2024',
    title: 'Kaesang Perkenalkan Kartu Zilenial, Program Istimewa Luthfi-Yasin',
    link: 'https://inilahjateng.com/kaesang-perkenalkan-kartu-zilenial-program-istimewa-luthfi-yasin/#google_vignette'
  },
  {
    date: '15 November 2024',
    title: 'Kaesang Perkenalkan Kartu Zilenial, Program Istimewa Luthfi-Yasin untuk Anak Muda Jateng',
    link: 'https://www.suarapembaruan.news/nasional/53696139/kaesang-perkenalkan-kartu-zilenial-program-istimewa-luthfi-yasin-untuk-anak-muda-jateng'
  },
  {
    date: '15 November 2024',
    title: 'Tindak Lanjut Debat ke-2, Ahmad Luthfi Realisasikan Jamban Gratis untuk Warga',
    link: 'https://www.suarapembaruan.news/politik/53696144/tindak-lanjut-debat-ke-2-ahmad-luthfi-realisasikan-jamban-gratis-untuk-warga'
  },
  {
    date: '14 November 2024',
    title: 'Tokoh Lintas Agama Dukung Luthfi-Yasin, Tingkatkan Toleransi di Jateng',
    link: 'https://solo.suaramerdeka.com/jawa-tengah/0513946624/tokoh-lintas-agama-dukung-luthfi-yasin-tingkatkan-toleransi-di-jateng'
  },
  {
    date: '14 November 2024',
    title: 'Gen Z Unggul Teknologi, Cagub Ahmad Luthfi Ajak Melek Politik',
    link: 'https://inilahjateng.com/gen-z-unggul-teknologi-cagub-ahmad-luthfi-ajak-melek-politik/'
  },
  {
    date: '14 November 2024',
    title: '3.000 Lebih Gen Z dan Millenial Siap Menangkan Luthfi-Yasin',
    link: 'https://inilahjateng.com/3-000-lebih-gen-z-dan-millenial-siap-menangkan-luthfi-yasin/#google_vignette'
  },
  {
    date: '13 November 2024',
    title: 'Rumah Perlindungan Tiap Kecamatan, Solusi Luthfi-Yasin Tekan Angka Kekerasan Anak dan Ibu di Jateng',
    link: 'https://bahterajateng.com/rumah-perlindungan-tiap-kecamatan-solusi-luthfi-yasin-tekan-angka-kekerasan-anak-dan-ibu-di-jateng/'
  },
  {
    date: '12 November 2024',
    title: 'Bangga Produk Lokal, Cagub Ahmad Luthfi Beli Kursi Roda Elektrik untuk Putranya',
    link: 'https://inilahjateng.com/bangga-produk-lokal-cagub-ahmad-luthfi-beli-kursi-roda-elektrik-untuk-putranya/'
  },
  {
    date: '12 November 2024',
    title: 'Gus Yusuf Sebut Jokowi akan Turun di Tegal Dukung Luthfi-Yasin',
    link: 'https://sleman.inews.id/read/518626/gus-yusuf-sebut-jokowi-akan-turun-di-tegal-dukung-luthfi-yasin?utm_medium=sosmed&utm_source=whatsapp'
  },
  {
    date: '12 November 2024',
    title: 'Joss! Tiga Ponpes Besar Mranggen Demak Siap Menangkan Luthfi-Yasin',
    link: 'https://bahterajateng.com/joss-tiga-ponpes-besar-mranggen-demak-siap-menangkan-luthfi-yasin/'
  },
  {
    date: '11 November 2024',
    title: 'Cagub Ahmad Luthfi Usulkan Subsidi Pangan Murah dan Fasilitas Kesehatan Gratis Atasi Kemiskinan Jateng',
    link: 'https://joglosemarnews.com/2024/11/cagub-ahmad-luthfi-usulkan-subsidi-pangan-murah-dan-fasilitas-kesehatan-gratis-atasi-kemiskinan-jateng/'
  },
  {
    date: '11 November 2024',
    title: 'Luthfi Serukan Falsafah Ibu Bumi dan Gus Yasin Tutup Debat dengan Lagu lir-Ilir',
    link: 'https://solo.suaramerdeka.com/jawa-tengah/0513920381/luthfi-serukan-falsafah-ibu-bumi-dan-gus-yasin-tutup-debat-dengan-lagu-lir-ilir'
  },
  {
    date: '11 November 2024',
    title: 'Luthfi Serukan Falsafah Ibu Bumi dan Gus Yasin Tutup Debat dengan Lagu lir-Ilir',
    link: 'https://solo.suaramerdeka.com/jawa-tengah/0513920381/luthfi-serukan-falsafah-ibu-bumi-dan-gus-yasin-tutup-debat-dengan-lagu-lir-ilir'
  },
  {
    date: '10 November 2024',
    title: 'Ahmad Luthi dan Taj Yasin Pamer Batik dan Sepatu Buatan UMKM saat Debat Kedua Pilkada Jawa Tengah',
    link: 'https://www.suara.com/kotaksuara/2024/11/10/222207/ahmad-luthi-dan-taj-yasin-pamer-batik-dan-sepatu-buatan-umkm-saat-debat-kedua-pilkada-jawa-tengah?utm_source=whatsapp&utm_medium=share'
  },
  {
    date: '10 November 2024',
    title: 'UMKM Binaan Muslimat Karanganyar: Gus Yasin Diharapkan Memimpin Jawa Tengah',
    link: 'https://solo.kilat.com/politik/103013917397/umkm-binaan-muslimat-karanganyar-gus-yasin-diharapkan-memimpin-jawa-tengah'
  },
  {
    date: '10 November 2024',
    title: 'Kunjungi Pendeta Obaja di Solo, Luthfi-Yasin Diharapkan jadi Memimpin Jateng',
    link: 'https://bahterajateng.com/kunjungi-pendeta-obaja-di-solo-luthfi-yasin-diharapkan-jadi-memimpin-jateng/'
  },
  {
    date: '10 November 2024',
    title: 'Gus Yasin Hadiri Pengajian Muslimat NU Karanganyar',
    link: 'https://solo.suaramerdeka.com/solo-raya/0513915406/gus-yasin-hadiri-pengajian-muslimat-nu-karanganyar'
  },
  {
    date: '9 November 2024',
    title: 'Arus Bawah Prabowo dan Jokowi Deklarasi Dukung Luthfi-Yasin',
    link: 'https://inilahjateng.com/arus-bawah-prabowo-dan-jokowi-deklarasi-dukung-luthfi-yasin/'
  },
  {
    date: '9 November 2024',
    title: 'Bawaslu Jateng, Terdapat 35 Laporan Siber Mengandung Ujaran Kebencian Saling Serang ',
    link: 'https://www.kabarno.com/bawaslu-jateng-terdapat-35-laporan-siber-mengandung-ujaran-kebencian-saling-serang/?amp=1'
  },
  {
    date: '9 November 2024',
    title: 'Pesan Presiden Prabowo Jelang Debat Kedua Pilkada Jateng: Hanya Luthfi-Yasin yang Mampu Bikin Jawa Tengah Maju',
    link: 'https://bahterajateng.com/pesan-presiden-prabowo-jelang-debat-kedua-pilkada-jateng-hanya-luthfi-yasin-yang-mampu-bikin-jawa-tengah-maju/'
  },
  {
    date: '9 November 2024',
    title: 'Hadiri Pengajian Akbar Muslimat NU Karanganyar, Gus Yasin Minta Doa dan Dukungan',
    link: 'https://bahterajateng.com/hadiri-pengajian-akbar-muslimat-nu-karanganyar-gus-yasin-minta-doa-dan-dukungan/'
  },
  {
    date: '7 November 2024',
    title: 'Ahmad Luthfi Diserang Fitnah Bertubi-Tubi, KH Mahfud Hamid Serukan Hal Ini di Pilgub Jateng 2024',
    link: 'https://solo.kilat.com/politik/103013899587/ahmad-luthfi-diserang-fitnah-bertubi-tubi-kh-mahfud-hamid-serukan-hal-ini-di-pilgub-jateng-2024'
  },
  {
    date: '7 November 2024',
    title: 'Ahmad Luthfi Diserang Fitnah Bertubi-Tubi, KH Mahfud Hamid Serukan Hal Ini di Pilgub Jateng 2024',
    link: 'https://solo.kilat.com/politik/103013899587/ahmad-luthfi-diserang-fitnah-bertubi-tubi-kh-mahfud-hamid-serukan-hal-ini-di-pilgub-jateng-2024'
  },
  {
    date: '7 November 2024',
    title: 'Komunitas Vespa Jepara Siap Menangkan Luthfi-Yasin',
    link: 'https://inilahjateng.com/komunitas-vespa-jepara-siap-menangkan-luthfi-yasin/'
  },
  {
    date: '7 November 2024',
    title: 'Persatuan Sekolah Swasta se Jawa Tengah Siap Menangkan Luthfi-Yasin',
    link: 'https://www.kabarno.com/persatuan-sekolah-swasta-se-jawa-tengah-siap-menangkan-luthfi-yasin/?amp=1'
  },
  {
    date: '6 November 2024',
    title: 'KH. Abdul Mu’thi: Pilih Pemimpin yang Luwes dan Dekat dengan Umat',
    link: 'https://bahterajateng.com/kh-abdul-muthi-pilih-pemimpin-yang-luwes-dan-dekat-dengan-umat/'
  },
  {
    date: '6 November 2024',
    title: 'Kiai Mahfud Purworejo Pesan Pilih Gubernur yang Bajunya Biru dan Pakai Peci',
    link: 'https://suarabaru.id/2024/11/06/kiai-mahfud-purworejo-pesan-pilih-gubernur-yang-bajunya-biru-dan-pakai-peci'
  },
  {
    date: '6 November 2024',
    title: 'Ahmad Luthfi: Debat Pilgub Bukan Sekadar Bicara tapi ‘Scientific Problem Solving’ untuk Jateng',
    link: 'https://bahterajateng.com/ahmad-luthfi-debat-pilgub-bukan-sekadar-bicara-tapi-scientific-problem-solving-untuk-jateng/'
  },
  {
    date: '5 November 2024',
    title: 'Pondok Al Kautsar Kajen Pati Dukung Luthfi-Yasin Menang',
    link: 'https://solo.kilat.com/politik/103013886434/pondok-al-kautsar-kajen-pati-dukung-luthfi-yasin-menang'
  },
  {
    date: '5 November 2024',
    title: 'Cagub Jateng Ahmad Luthfi : Debat Bukan Sekadar Bicara tapi ‘Scientific Problem Solving’ untuk Jateng',
    link: 'https://solo.kilat.com/politik/103013886373/cagub-jateng-ahmad-luthfi-debat-bukan-sekadar-bicara-tapi-scientific-problem-solving-untuk-jateng'
  },
  {
    date: '5 November 2024',
    title: 'Prabowo dan Jokowi Dukung Penuh Luthfi-Yasin untuk Jawa Tengah Terintegrasi',
    link: 'https://jateng.tribunnews.com/2024/11/05/prabowo-dan-jokowi-dukung-penuh-luthfi-yasin-untuk-jawa-tengah-terintegrasi'
  },
  {
    date: '4 November 2024',
    title: 'Jokowi Tanggapi Hasil Survei Litbang Kompas: Undecided Voters Harus Dibuat Yakin',
    link: 'https://bahterajateng.com/jokowi-tanggapi-hasil-survei-litbang-kompas-undecided-voters-harus-dibuat-yakin/'
  },
  {
    date: '4 November 2024',
    title: 'Jokowi Tanggapi Hasil Survei Litbang Kompas: Undecided Voters Harus Dibuat Yakin',
    link: 'https://bahterajateng.com/jokowi-tanggapi-hasil-survei-litbang-kompas-undecided-voters-harus-dibuat-yakin/'
  },
  {
    date: '4 November 2024',
    title: 'Andika - Hendi Ungguli Luthfi - Yasin Versi Survey Litbang Kompas, Jokowi Angkat Bicara',
    link: 'https://solo.kilat.com/politik/103013880183/andika-hendi-ungguli-luthfi-yasin-versi-survey-litbang-kompas-jokowi-angkat-suara'
  },
  {
    date: '4 November 2024',
    title: 'Ahmad Luthfi Resmikan Jembatan Sepanjang 100 Meter di Wonogiri, Siswa Tak Pelu Lagi Memutar dan Naik Perahu Seberangi Sungai',
    link: 'https://solo.kilat.com/politik/103013877846/ahmad-luthfi-resmikan-jembatan-sepanjang-100-meter-di-wonogiri-siswa-tak-pelu-lagi-memutar-dan-naik-perahu-seberangi-sungai'
  },
  {
    date: '4 November 2024',
    title: 'Tanggapi Survei Litbang Kompas, Ini Kata Tim Pakar Luthfi-Yasin',
    link: 'https://inilahjateng.com/tanggapi-survei-litbang-kompas-ini-kata-tim-pakar-luthfi-yasin/'
  },
  {
    date: '3 November 2024',
    title: 'Masivkan Nama Paslon Ahmad Luthfi-Taj Yasin, Senam Sehat Digelar Di Slogohimo',
    link: 'https://portalika.com/masivkan-nama-paslon-ahmad-luthfi-taj-yasin-senam-sehat-digelar-di-slogohimo/'
  },
  {
    date: '3 November 2024',
    title: 'Deklarasi di Kandang Banteng, Ribuan Relawan Samber Nyowo Solo Siap Menangkan Luthfi-Yasin',
    link: 'https://www.beritamerdekaonline.com/2024/11/deklarasi-di-kandang-banteng-ribuan-relawan-samber-nyowo-solo-siap-menangkan-luthfi-yasin/'
  },
  {
    date: '3 November 2024',
    title: 'Kegiatan Jalan Sehat Ahmad Luthfi Berhasil Gerakkan Ekonomi Desa',
    link: 'https://www.beritamerdekaonline.com/2024/11/kegiatan-jalan-sehat-ahmad-luthfi-berhasil-gerakkan-ekonomi-desa/'
  },
  {
    date: '3 November 2024',
    title: 'Ribuan Relawan Samber Nyowo Solo Siap Menangkan Ahmad Luthfi-Taj Yasin di Kandang Banteng',
    link: 'https://sleman.inews.id/read/514834/ribuan-relawan-samber-nyowo-solo-siap-menangkan-ahmad-luthfi-taj-yasin-di-kandang-banteng?utm_medium=sosmed&utm_source=whatsapp'
  },
  {
    date: '3 November 2024',
    title: 'Cagub Jateng Ahmad Luthfi: Demokrasi Tidak Boleh Memaksa, Menyakiti Dan Memfitnah',
    link: 'https://beritawonogiri.com/cagub-jateng-ahmad-luthfi-demokrasi-tidak-boleh-memaksa-menyakiti-dan-memfitnah/'
  },
  {
    date: '3 November 2024',
    title: 'Jebol Kandang Banteng Solo, Massa Relawan Sambernyawa Siap Menangkan Ahmad Luthfi di Pilgub Jateng 2024',
    link: 'https://jateng.disway.id/read/702166/jebol-kandang-banteng-solo-massa-relawan-sambernyawa-siap-menangkan-ahmad-luthfi-di-pilgub-jateng-2024'
  },
  {
    date: '3 November 2024',
    title: 'Gus Yasin Disambut Ribuan Orang di Batang, Janji Bangun Sekolah Disabilitas',
    link: 'https://jatengpos.co.id/gus-yasin-disambut-ribuan-orang-di-batang-janji-bangun-sekolah-disabilitas/bejan/'
  },
  {
    date: '2 November 2024',
    title: 'Cagub Jateng Ahmad Luthfi Sebut Belum Ada Jadwal Kampanye Bersama Jokowi',
    link: 'https://solopos.espos.id/cagub-jateng-ahmad-luthfi-sebut-belum-ada-jadwal-kampanye-bersama-jokowi-2020615'
  },
  {
    date: '2 November 2024',
    title: 'Cagub Jateng Ahmad Luthfi Sebut Belum Ada Jadwal Kampanye Bersama Jokowi',
    link: 'https://solopos.espos.id/cagub-jateng-ahmad-luthfi-sebut-belum-ada-jadwal-kampanye-bersama-jokowi-2020615'
  },
  {
    date: '2 November 2024',
    title: 'Pesan Damai Cagub Ahmad Luthfi di Solo, Relawan Siapkan 5 PPS Per TPS',
    link: 'https://bahterajateng.com/pesan-damai-cagub-ahmad-luthfi-di-solo-relawan-siapkan-5-pps-per-tps/'
  },
  {
    date: '2 November 2024',
    title: 'Tim Hukum Luthfi-Yasin Laporkan Dugaan Penggalangan Kades ke Bawaslu Jateng, Siapkan Bukti 13 Saksi',
    link: 'https://bahterajateng.com/tim-hukum-luthfi-yasin-laporkan-dugaan-penggalangan-kades-ke-bawaslu-jateng-siapkan-bukti-13-saksi/'
  },
  {
    date: '2 November 2024',
    title: 'Tim Hukum Luthfi-Yasin Lengkapi Berkas di Bawaslu Jateng',
    link: 'https://inilahjateng.com/tim-hukum-luthfi-yasin-lengkapi-berkas-di-bawaslu-jateng/'
  },
  {
    date: '2 November 2024',
    title: 'Tim Hukum Luthfi-Yasin Lengkapi Berkas di Bawaslu Jateng',
    link: 'https://inilahjateng.com/tim-hukum-luthfi-yasin-lengkapi-berkas-di-bawaslu-jateng/'
  },
  {
    date: '2 November 2024',
    title: 'Bibit Waluyo : Panggung Debat Dikuasai Luthfi-Yasin, Score-nya Menang Telak',
    link: 'https://jatengpos.co.id/bibit-waluyo-panggung-debat-dikuasai-luthfi-yasin-score-nya-menang-telak/bejan/'
  },
  {
    date: '2 November 2024',
    title: 'Survei Terbaru LSI Denny JA di Pilgub Jateng: Luthfi-Yasin 46,8 Persen Ungguli Andika-Hendi 28,2 Persen',
    link: 'https://www.heloindonesia.com/pilkada/33660/survei-terbaru-lsi-denny-ja-di-pilgub-jateng-luthfi-yasin-468-persen-ungguli-andika-hendi-282-persen'
  },
  {
    date: '1 November 2024',
    title: 'Ribuan Relawan Akar Rumput Boyolali Siap Menangkan Luthfi - Taj Yasin',
    link: 'https://solo.suaramerdeka.com/solo-raya/0513860517/ribuan-relawan-akar-rumput-boyolali-siap-menangkan-luthfi-taj-yasin'
  },
  {
    date: '1 November 2024',
    title: 'Ngopeni UMKM, Cagub Ahmad Luthfi Ngobrol Bareng Tukang Cukur',
    link: 'https://inilahjateng.com/ngopeni-umkm-cagub-ahmad-luthfi-ngobrol-bareng-tukang-cukur/'
  },
  {
    date: '1 November 2024',
    title: 'Pedagang Pasar Burung Kartini Curhat ke Cagub Ahmad Luthfi, Begini Solusi yang Ditawarkannya',
    link: 'https://www.zonasi.id/pedagang-pasar-burung-kartini-curhat-ke-cagub-ahmad-luthfi-begini-solusi-yang-ditawarkannya/'
  },
  {
    date: '30 Oktober 2024',
    title: 'Debat Pilgub Jateng 2024, Ahmad Luthfi Ungkap Program Digitalisasi Desa, Keluarkan Kartu Zilenial untuk Generasi Z',
    link: 'https://solo.kilat.com/politik/103013846306/debat-pilgub-jateng-2024-ahmad-luthfi-ungkap-program-digitalisasi-desa-keluarkan-kartu-zilenial-untuk-generasi-z'
  },
  {
    date: '30 Oktober 2024',
    title: 'Ahmad Luthfi Kritik Solusi Internet Andika, Soroti Permasalahan Nelayan',
    link: 'https://inilahjateng.com/ahmad-luthfi-kritik-solusi-internet-andika-soroti-permasalahan-nelayan/'
  },
  {
    date: '30 Oktober 2024',
    title: 'Pendukung Paslon 01 Ganggu Penyampaian Visi Misi Cagub Ahmad Luthfi, Moderator Turun Tangan',
    link: 'https://solo.kilat.com/politik/103013846140/pendukung-paslon-01-ganggu-penyampaian-visi-misi-cagub-ahmad-luthfi-moderator-turun-tangan'
  },
  {
    date: '30 Oktober 2024',
    title: 'Debat Panas Pilkada Jateng, Luthfi-Taj Yasin Paparkan 11 Komitmen Demi Kesejahteraan Masyarakat',
    link: 'https://jateng.tribunnews.com/2024/10/30/debat-panas-pilkada-jateng-luthfi-taj-yasin-paparkan-11-komitmen-demi-kesejahteraan-masyarakat'
  },
  {
    date: '30 Oktober 2024',
    title: 'Ahmad Luthfi Janji Rumah Layak Huni dan Sanitasi Lengkap, ‘Ora Ono Sing Tak Tinggal’',
    link: 'https://solo.kilat.com/politik/103013845939/ahmad-luthfi-janji-rumah-layak-huni-dan-sanitasi-lengkap-ora-ono-sing-tak-tinggal'
  },
  {
    date: '30 Oktober 2024',
    title: 'Debat Perdana Pilgub, Taj Yasin Maimoen Pimpin Doa Bersama di Posko Pemenangan Semarang',
    link: 'https://solo.kilat.com/politik/103013845416/debat-perdana-pilgub-taj-yasin-maimoen-pimpin-doa-bersama-di-posko-pemenangan-semarang'
  },
  {
    date: '29 Oktober 2024',
    title: 'Gus Yusuf Ajak Kiai Jepara Menangkan Luthfi-Yasin',
    link: 'https://inilahjateng.com/gus-yusuf-ajak-kiai-jepara-menangkan-luthfi-yasin/'
  },
  {
    date: '29 Oktober 2024',
    title: 'Pengamat Undip Wahid: Wajar Jokowi dan Prabowo Pilih Luthfi-Yasin',
    link: 'https://www.suarapembaruan.news/nasional/53671972/pengamat-undip-wahid-wajar-jokowi-dan-prabowo-pilih-luthfi-yasin'
  },
  {
    date: '28 Oktober 2024',
    title: 'Nasdem Karanganyar Bakal All Out Menangkan Ilyas-Tri Haryadi dan Ahmad Luthfi-Taj Yasin',
    link: 'https://solo.suaramerdeka.com/solo-raya/0513825579/nasdem-karanganyar-bakal-all-out-menangkan-ilyas-tri-haryadi-dan-ahmad-luthfi-taj-yasin'
  },
  {
    date: '28 Oktober 2024',
    title: 'Tim Hukum Luthfi-Yasin Laporkan Dugaan Kades dan Camat, Bagi-Bagi Duit Rp 60-an Juta',
    link: 'https://bahterajateng.com/tim-hukum-luthfi-yasin-laporkan-dugaan-kades-dan-camat-bagi-bagi-duit-rp-60-an-juta/'
  },
  {
    date: '28 Oktober 2024',
    title: 'Tim Hukum Luthfi-Yasin Laporkan Dugaan Kades dan Camat, Bagi-Bagi Duit Rp 60-an Juta',
    link: 'https://bahterajateng.com/tim-hukum-luthfi-yasin-laporkan-dugaan-kades-dan-camat-bagi-bagi-duit-rp-60-an-juta/'
  },
  {
    date: '27 Oktober 2024',
    title: 'Partai Pengusung Optimis Luthfi-Yasin Menang 60 Persen',
    link: 'https://inilahjateng.com/partai-pengusung-optimis-luthfi-yasin-menang-60-persen/'
  },
  {
    date: '27 Oktober 2024',
    title: 'Hadiri Pengajian di Tegal, Gus Yasin Didoakan Puluhan Ribu Orang Memimpin Jawa Tengah',
    link: 'https://jatengpos.co.id/hadiri-pengajian-di-tegal-gus-yasin-didoakan-puluhan-ribu-orang-memimpin-jawa-tengah/arif/'
  },
  {
    date: '27 Oktober 2024',
    title: 'Ratusan Emak-Emak Jelita Kedu Kumpul di Magelang Siap Menangkan Luthfi-Yasin',
    link: 'https://jatengpos.co.id/ratusan-emak-emak-jelita-kedu-kumpul-di-magelang-siap-menangkan-luthfi-yasin-2/arif/'
  },
  {
    date: '27 Oktober 2024',
    title: 'Di depan MUI Jateng, Gus Yasin “Pamerkan” Program Pesantren Obah Mendunia',
    link: 'https://jatengpos.co.id/di-depan-mui-jateng-gus-yasin-pamerkan-program-pesantren-obah-mendunia/arif/'
  },
  {
    date: '26 Oktober 2024',
    title: 'Pengamat Politik Undip: Luthfi-Yasin Punya Kelebihan Segala-galanya',
    link: 'https://jatengpos.co.id/pengamat-politik-undip-luthfi-yasin-punya-kelebihan-segala-galanya/bejan/'
  },
  {
    date: '26 Oktober 2024',
    title: 'Nawal Yasin, Isteri Gus Yasin Ajak Emak-Emak Melek Politik Hadapi Pilkada',
    link: 'https://jatengpos.co.id/nawal-yasin-isteri-gus-yasin-ajak-emak-emak-melek-politik-hadapi-pilkada/bejan/'
  },
  {
    date: '26 Oktober 2024',
    title: 'Gembleng Kader Nasdem Solo, Gus Yasin : Hasil Survey Positif Harus Terus Dijaga!',
    link: 'https://solo.kilat.com/politik/103013817762/gembleng-kader-nasdem-solo-gus-yasin-hasil-survey-positif-harus-terus-dijaga'
  },
  {
    date: '26 Oktober 2024',
    title: 'Tanpa Mahar, Nasdem All Out Menangkan Luthfi-Yasin',
    link: 'https://inilahjateng.com/tanpa-mahar-nasdem-all-out-menangkan-luthfi-yasin/'
  },
  {
    date: '26 Oktober 2024',
    title: 'Cagub Ahmad Luthfi Dinobatkan sebagai Bapak Santri Jawa Tengah pada Hari Santri 2024',
    link: 'https://www.beritamerdekaonline.com/2024/10/cagub-ahmad-luthfi-dinobatkan-sebagai-bapak-santri-jawa-tengah-pada-hari-santri-2024/'
  },
  {
    date: '25 Oktober 2024',
    title: 'Kiai Khos se-Jateng Dukung Luthfi-Yasin: Cocok Program Pendidikan dan Pesantren',
    link: 'https://www.beritamerdekaonline.com/2024/10/kiai-khos-se-jateng-dukung-luthfi-yasin-cocok-program-pendidikan-dan-pesantren/'
  },
  {
    date: '25 Oktober 2024',
    title: 'Kiai Khos se-Jateng Dukung Luthfi-Yasin: Cocok Program Pendidikan dan Pesantren',
    link: 'https://www.beritamerdekaonline.com/2024/10/kiai-khos-se-jateng-dukung-luthfi-yasin-cocok-program-pendidikan-dan-pesantren/'
  },
  {
    date: '25 Oktober 2024',
    title: '25 Kyai Khos Sepakat Dukung Luthfi-Yasin di Pilgub Jateng',
    link: 'https://www.zonasi.id/25-kyai-khos-sepakat-dukung-luthfi-yasin-di-pilgub-jateng/'
  },
  {
    date: '25 Oktober 2024',
    title: 'Kampanye Kreatif Cagub Ahmad Luthfi-Taj Yasin',
    link: 'https://inilahjateng.com/kampanye-kreatif-cagub-ahmad-luthfi-taj-yasin/'
  },
  {
    date: '24 Oktober 2024',
    title: 'Pilgub Jateng 2024: Berjalan Kaki Satu Kilometer, Taj Yasin Hadiri Haul Habib Ali di Solo',
    link: 'https://www.jatengnetwork.com/jateng/28413804833/pilgub-jateng-2024-berjalan-kaki-satu-kilometer-taj-yasin-hadiri-haul-habib-ali-di-solo'
  },
  {
    date: '24 Oktober 2024',
    title: 'Masya Allah, Gus Yasin Ikut Haul Habib Ali Solo dari Teras Rumah Warga',
    link: 'https://solo.kilat.com/politik/103013805444/masya-allah-gus-yasin-ikut-haul-habib-ali-solo-dari-teras-rumah-warga'
  },
  {
    date: '23 Oktober 2024',
    title: 'Bibit Waluyo: Presiden Prabowo Pilih Luthfi, Tegak Lurus Sukseskan Program Presiden',
    link: 'https://bahterajateng.com/bibit-waluyo-presiden-prabowo-pilih-luthfi-tegak-lurus-sukseskan-program-presiden/'
  },
  {
    date: '23 Oktober 2024',
    title: 'Cagub Ahmad Luthfi di Depan Purnawirawan TNI-Polri: “Adik Saya TNI, Adik Pak Andika Polisi, Kita Tetap Berdamai',
    link: 'https://inilahjateng.com/cagub-ahmad-luthfi-di-depan-purnawirawan-tni-polri-adik-saya-tni-adik-pak-andika-polisi-kita-tetap-berdamai/'
  },
  {
    date: '23 Oktober 2024',
    title: 'Hadapi Tantangan Zaman, Gus Yasin Ajak Santri Harus Melek Teknologi',
    link: 'https://solo.kilat.com/politik/103013796910/hadapi-tantangan-zaman-gus-yasin-ajak-santri-harus-melek-teknologi'
  },
  {
    date: '22 Oktober 2024',
    title: 'Semarang Bersholawat, Gus Yasin Ajak Santri Isi Tantangan Zaman',
    link: 'https://inilahjateng.com/semarang-bersholawat-gus-yasin-ajak-santri-isi-tantangan-zaman/'
  },
  {
    date: '22 Oktober 2024',
    title: 'Berjuang Bersama Masyarakat Magelang, Ahmad Luthfi: Maju Terus Tak Pernah Mundur',
    link: 'https://radarmagelang.jawapos.com/mungkid/685225243/berjuang-bersama-masyarakat-magelang-ahmad-luthfi-maju-terus-tak-pernah-mundur'
  },
  {
    date: '22 Oktober 2024',
    title: 'Ikut Upacara Hari Santri Nasional, Gus Yasin Minta Santri Mendunia dengan Pesantren Obah',
    link: 'https://www.suaramerdeka.com/semarang-raya/0413788206/ikut-upacara-hari-santri-nasional-gus-yasin-minta-santri-mendunia-dengan-pesantren-obah'
  },
  {
    date: '22 Oktober 2024',
    title: 'Cagub Ahmad Luthfi Pastikan Pemimpin Jateng Bukan Ndoro, Tapi Pelayanan Masyarakat ',
    link: 'https://emsatunews.co.id/2024/10/cagub-ahmad-luthfi-pastikan-pemimpin-jateng-bukan-ndoro-tapi-pelayanan-masyarakat.html'
  },
  {
    date: '22 Oktober 2024',
    title: 'Gus Ali Watucongol Deklarasikan Dukungan untuk Paslon Nomor 2 Luthfi-Gus Yasin',
    link: 'https://emsatunews.co.id/2024/10/gus-ali-watucongol-deklarasikan-dukungan-untuk-paslon-nomor-2-luthfi-gus-yasin.html'
  },
  {
    date: '21 Oktober 2024',
    title: 'Bukan Ndoro, Cagub Ahmad Luthfi: Saya Pelayan Rakyat',
    link: 'https://inilahjateng.com/bukan-ndoro-cagub-ahmad-luthfi-saya-pelayan-rakyat/'
  },
  {
    date: '21 Oktober 2024',
    title: 'Sambut Jokowi Pulang Kampung Di Solo, Luthfi-Yasin Dapatkan Perintah Khusus Bila Terpilih Pimpin Jateng',
    link: 'https://www.rmoljawatengah.id/sambut-jokowi-pulang-kampung-di-solo-luthfi-yasin-dapatkan-perintah-khusus-bila-terpilih-pimpin-jateng'
  },
  {
    date: '21 Oktober 2024',
    title: 'Ahmad Luthfi Sungkem ke Jokowi, Ungkap Pesan di Jateng',
    link: 'https://www.suarapembaruan.news/politik/53660787/ahmad-luthfi-sungkem-ke-jokowi-ungkap-pesan-di-jateng'
  },
  {
    date: '21 Oktober 2024',
    title: 'Ratusan Emak-Emak Relawan Luthfi-Yasin Sambut Jokowi di Solo',
    link: 'https://www.suarapembaruan.news/nasional/53660799/ratusan-emak-emak-relawan-luthfi-yasin-sambut-jokowi-di-solo'
  },
  {
    date: '20 Oktober 2024',
    title: 'Pasangan Luthfi-Yasin Bareng Warga Kompak Tunggu Kehadiran Jokowi di Rumah Solo',
    link: 'https://bahterajateng.com/pasangan-luthfi-yasin-bareng-warga-kompak-tunggu-kehadiran-jokowi-di-rumah-solo/'
  },
  {
    date: '20 Oktober 2024',
    title: 'Sambut Jokowi, Luthfi-Yasin Disambut Antusias Warga',
    link: 'https://inilahjateng.com/sambut-jokowi-luthfi-yasin-disambut-antusias-warga/'
  },
  {
    date: '20 Oktober 2024',
    title: 'Ribuan Kader PKB Janji Menangkan Ahmad Luthfi-Gus Yasin',
    link: 'https://poskita.co/2024/10/20/ribuan-kader-pkb-janji-menangkan-ahmad-luthfi-gus-yasin/'
  },
  {
    date: '19 Oktober 2024',
    title: 'Konsolidasi di Magelang, Kader PKB “Baiat” Menangkan Luthfi-Yasin',
    link: 'https://inilahjateng.com/konsolidasi-di-magelang-kader-pkb-baiat-menangkan-luthfi-yasin/'
  },
  {
    date: '19 Oktober 2024',
    title: 'Pilgub Jateng, Relawan Optimistis Ahmad Luthfi-Taj Yasin Menang 70 Persen di Kota Pekalongan',
    link: 'https://sleman.inews.id/read/508222/pilgub-jateng-relawan-optimistis-ahmad-luthfi-taj-yasin-menang-70-persen-di-kota-pekalongan'
  },
  {
    date: '19 Oktober 2024',
    title: 'Gus Yasin Silaturahmi ke Ponpes Nurul Ummah Karanganyar, Kyai M. Sholeh Doakan Kemenangan di Pilgub Jateng 2024',
    link: 'https://solo.kilat.com/politik/103013770278/gus-yasin-silaturahmi-ke-ponpes-nurul-ummah-karanganyar-kyai-m-sholeh-doakan-kemenangan-di-pilgub-jateng-2024'
  },
  {
    date: '19 Oktober 2024',
    title: 'Ahmad Luthfi dan Taj Yasin Miliki Pengalaman 5 Tahun Memimpin Jateng, Jelita Purwokerto : Jaminan Paket Komplit!',
    link: 'https://solo.kilat.com/politik/103013770540/ahmad-luthfi-dan-taj-yasin-miliki-pengalaman-5-tahun-memimpin-jateng-jelita-purwokerto-jaminan-paket-komplit'
  },
  {
    date: '19 Oktober 2024',
    title: 'Menangkan Cagub Ahmad Luthfi, Gus Yusuf Sebut Nama Prabowo Subianto',
    link: 'https://bahterajateng.com/menangkan-cagub-ahmad-luthfi-gus-yusuf-sebut-nama-prabowo-subianto/'
  },
  {
    date: '19 Oktober 2024',
    title: 'Ahmad Luthfi Serukan Regenerasi Pekerja Batik demi Selamatkan Warisan Budaya',
    link: 'https://bahterajateng.com/ahmad-luthfi-serukan-regenerasi-pekerja-batik-demi-selamatkan-warisan-budaya/'
  },
  {
    date: '19 Oktober 2024',
    title: 'Hadiri Acara Ahmad Luthfi Mendengar, Cagub Jateng Berikan Solusi Masalah Air Bersih',
    link: 'https://www.suarakarya.id/politik/26013768744/hadiri-acara-ahmad-luthfi-mendengar-cagub-jateng-berikan-solusi-masalah-air-bersih'
  },
  {
    date: '19 Oktober 2024',
    title: 'Cagub Jateng Ahmad Luthfi Soroti Pentingnya Regenerasi Pengrajin Batik Pekalongan',
    link: 'https://www.suarakarya.id/politik/26013767710/cagub-jateng-ahmad-luthfi-soroti-pentingnya-regenerasi-pengrajin-batik-pekalongan'
  },
  {
    date: '19 Oktober 2024',
    title: 'Gus Yasin Minta Jelita Purwokerto Selalu Teriak Luthfi-Yasin Menang',
    link: 'https://bahterajateng.com/gus-yasin-minta-jelita-purwokerto-selalu-teriak-luthfi-yasin-menang-setiap-ketemu-orang/'
  },
  {
    date: '19 Oktober 2024',
    title: 'Cegah Rob di Pesisir Pantai Utara Jateng, Ahmad Luthfi Hidupkan Program Mageri Segara',
    link: 'https://sleman.inews.id/read/508177/cegah-rob-di-pesisir-pantai-utara-jateng-ahmad-luthfi-hidupkan-program-mageri-segara/all'
  },
  {
    date: '18 Oktober 2024',
    title: 'Cagub Jateng Ahmad Luthfi Serukan Regenerasi Ngopeni dan Selamatkan Warisan Budaya',
    link: 'https://www.kabarno.com/cagub-jateng-ahmad-luthfi-serukan-regenerasi-ngopeni-dan-selamatkan-warisan-budaya/?amp=1'
  },
  {
    date: '18 Oktober 2024',
    title: 'PGRI Jateng Titipkan Nasib Guru Honorer kepada Ahmad Luthfi dan Taj Yasin',
    link: 'https://solo.kilat.com/politik/103013762964/pgri-jateng-titipkan-nasib-guru-honorer-kepada-ahmad-luthfi-dan-taj-yasin'
  },
  {
    date: '18 Oktober 2024',
    title: 'Gus Yasin Ternyata Kecanduan Ini di Pekalongan, Selalu Mampir Jika Ada Kesempatan',
    link: 'https://solo.kilat.com/politik/103013762851/gus-yasin-ternyata-kecanduan-ini-di-pekalongan-selalu-mampir-jika-ada-kesempatan'
  },
  {
    date: '18 Oktober 2024',
    title: 'Warga Pekalongan Dirikan Posko Megah untuk Pemenangan Luthfi-Yasin',
    link: 'https://bahterajateng.com/warga-pekalongan-dirikan-posko-megah-untuk-menangkan-luthfi-yasin/'
  },
  {
    date: '18 Oktober 2024',
    title: 'Di Sela Kampanye, Gus Yasin Ziarah ke Makam Waliyullah Sayyid Usman Haji ',
    link: 'https://bahterajateng.com/di-sela-kampanye-gus-yasin-ziarah-ke-makam-waliyullah-sayyid-usman-haji/'
  },
  {
    date: '17 Oktober 2024',
    title: 'Senyawa Jepara Dukung Luthfi-Yasin Menang Telak di Pilgub Jateng',
    link: 'https://bahterajateng.com/senyawa-jepara-dukung-luthfi-yasin-menang-telak-di-pilgub-jateng/'
  },
  {
    date: '17 Oktober 2024',
    title: 'Bersama Gen-Z, Ini Yang Disampaikan Cagub Ahmad Luthfi',
    link: 'https://inilahjateng.com/bersama-gen-z-ini-yang-disampaikan-cagub-ahmad-luthfi/'
  },
  {
    date: '17 Oktober 2024',
    title: 'PGRI Jateng Titip Nasib Guru Honorer ke Ahmad Luthfi - Taj Yasin',
    link: 'https://www.heloindonesia.com/pilkada/32580/pgri-jateng-titip-nasib-guru-honorer-ke-ahmad-luthfi-taj-yasin'
  },
  {
    date: '17 Oktober 2024',
    title: 'Doa Ahmad Luthfi di Ultah Prabowo: Sehat dan Bawa Indonesia Emas',
    link: 'https://bahterajateng.com/doa-ahmad-luthfi-di-ultah-prabowo-sehat-dan-bawa-indonesia-emas/'
  },
  {
    date: '17 Oktober 2024',
    title: 'PGRI Jateng Titip Nasib Guru Honorer ke Luthfi-Yasin',
    link: 'https://bahterajateng.com/pgri-jateng-titip-nasib-guru-honorer-ke-luthfi-yasin/'
  },
  {
    date: '17 Oktober 2024',
    title: 'Pesan Penting Cagub Jateng Ahmad Luthfi ke Generasi Zilenial: “Jawa Tengah Jadi Sumber Penghidupan, Bukan Tempat Mudik Lagi',
    link: 'https://bahterajateng.com/pesan-penting-cagub-jateng-ahmad-luthfi-ke-generasi-zilenial-jawa-tengah-jadi-sumber-penghidupan-bukan-tempat-mudik-lagi/'
  },
  {
    date: '16 Oktober 2024',
    title: 'Kiai Muhtarom Pekalongan Optimis Luthfi-Yasin Menang 70 Persen',
    link: 'https://inilahjateng.com/kiai-muhtarom-pekalongan-optimis-luthfi-yasin-menang-70-persen/'
  },
  {
    date: '16 Oktober 2024',
    title: 'Pengusaha Konveksi Pekalongan Haqul Yakin Luthfi-Yasin Menang Mutlak',
    link: 'https://bahterajateng.com/pengusaha-konveksi-pekalongan-haqul-yakin-luthfi-yasin-menang-mutlak/'
  },
  {
    date: '16 Oktober 2024',
    title: 'Saat Nobar, Cagub Ahmad Luthfi Beri Dukungan Penuh Sepak Bola Jateng',
    link: 'https://jateng.disway.id/read/701288/saat-nobar-cagub-ahmad-luthfi-beri-dukungan-penuh-sepak-bola-jateng'
  },
  {
    date: '16 Oktober 2024',
    title: 'Relawan Penggerak Desa Gelar Konsolidasi',
    link: 'https://inilahjateng.com/relawan-penggerak-desa-gelar-konsolidasi/'
  },
  {
    date: '16 Oktober 2024',
    title: 'Ngopeni Sentra Pengrajin Tape Singkong di Gembong, Pati, Ahmad Luthfi : Barang Sepele, Nilai Jual Tinggi',
    link: 'https://www.suarapembaruan.news/politik/53654233/ngopeni-sentra-pengrajin-tape-singkong-di-gembong-pati-ahmad-luthfi-barang-sepele-nilai-jual-tinggi'
  },
  {
    date: '16 Oktober 2024',
    title: 'Ahmad Luthfi Berharap Petai Petani Hutan Sosial di Pati Tembus Ekspor ke Jepang',
    link: 'https://www.suarapembaruan.news/politik/53654223/ahmad-luthfi-berharap-petai-petani-hutan-sosial-di-pati-tembus-ekspor-ke-jepang'
  },
  {
    date: '16 Oktober 2024',
    title: 'Gus Baha dan Kyai Sarang Mendoakan Luthfi-Yasin Berkah untuk Jawa Tengah',
    link: 'https://solo.suaramerdeka.com/jawa-tengah/0513748200/gus-baha-dan-kyai-sarang-mendoakan-luthfi-yasin-berkah-untuk-jawa-tengah'
  },
  {
    date: '16 Oktober 2024',
    title: 'Cagub Ahmad Luthfi: Komitmen Majukan Sepakbola Jateng dan Nasional',
    link: 'https://www.jatengnews.id/2024/10/16/cagub-ahmad-luthfi-komitmen-majukan-sepakbola-jateng-dan-nasional/'
  },
  {
    date: '15 Oktober 2024',
    title: 'Nobar Timnas Indonesia, Cagub Ahmad Luthfi Ingatkan Persatuan',
    link: 'https://inilahjateng.com/nobar-timnas-indonesia-cagub-ahmad-luthfi-ingatkan-persatuan/'
  },
  {
    date: '15 Oktober 2024',
    title: 'Gus Yasin Sowan ke Rumah Gus Baha, Bahas Pesantren dan Politik? ',
    link: 'https://emsatunews.co.id/2024/10/gus-yasin-sowan-ke-rumah-gus-baha-bahas-pesantren-dan-politik.html'
  },
  {
    date: '15 Oktober 2024',
    title: 'Ngopeni Petani Hutan Pati, Ahmad Luthfi: Ekspor Petai ke Jepang',
    link: 'https://bahterajateng.com/ngopeni-petani-hutan-pati-ahmad-luthfi-ekspor-petai-ke-jepang/'
  },
  {
    date: '15 Oktober 2024',
    title: 'Cagub Ahmad Luthfi Sebut Tape Barang Sepele tapi Punya Nilai Jual Tinggi',
    link: 'https://inilahjateng.com/cagub-ahmad-luthfi-sebut-tape-barang-sepele-tapi-punya-nilai-jual-tinggi/'
  },
  {
    date: '15 Oktober 2024',
    title: 'Ngopeni Petani Hutan Pati, Cagub Ahmad Luthfi: Ekspor Petai ke Jepang',
    link: 'https://inilahjateng.com/ngopeni-petani-hutan-pati-cagub-ahmad-luthfi-ekspor-petai-ke-jepang/'
  },
  {
    date: '14 Oktober 2024',
    title: 'PAN Jateng Bidik Tiga Kali Lipat Suara untuk Ahmad Luthfi di Pilgub',
    link: 'https://portalika.com/pan-jateng-bidik-tiga-kali-lipat-suara-untuk-ahmad-luthfi-di-pilgub/'
  },
  {
    date: '14 Oktober 2024',
    title: 'PAN Targetkan 1,1 Juta Suara untuk Ahmad Luthfi pada Pilgub Jateng',
    link: 'https://www.beritasatu.com/bersatu-kawal-pilkada/2848370/pan-targetkan-11-juta-suara-untuk-ahmad-luthfi-pada-pilgub-jateng'
  },
  {
    date: '14 Oktober 2024',
    title: 'Cagub Ahmad Luthfi Fokus Kesejahteraan Nelayan',
    link: 'https://inilahjateng.com/cagub-ahmad-luthfi-fokus-kesejahteraan-nelayan/'
  },
  {
    date: '14 Oktober 2024',
    title: 'Bos Pabrik Tambang Kapal Pekalongan Dukung Luthfi-Yasin Menang di Atas 60 Persen',
    link: 'https://jatengpos.co.id/bos-pabrik-tambang-kapal-pekalongan-dukung-luthfi-yasin-menang-di-atas-60-persen/bejan/'
  },
  {
    date: '14 Oktober 2024',
    title: 'Istimewa, Habib Luthfi Kenalkan Ahmad Luthfi-Gus Yasin di Depan 30 ribu Jamaah Kanzus Sholawat',
    link: 'https://jatengpos.co.id/istimewa-habib-luthfi-kenalkan-ahmad-luthfi-gus-yasin-di-depan-30-ribu-jamaah-kanzus-sholawat/bejan/'
  },
  {
    date: '14 Oktober 2024',
    title: 'Ada Apa? Cawagub Gus Yasin Tiba-tiba Kabur Naik Motor Sama Isterinya',
    link: 'https://jatengpos.co.id/ada-apa-cawagub-gus-yasin-tiba-tiba-kabur-naik-motor-sama-isterinya/bejan/'
  },
  {
    date: '13 Oktober 2024',
    title: 'PAN Jateng Targetkan 1,1 Juta Suara Ahmad Luthfi di Pilgub Jateng 2024',
    link: 'https://bahterajateng.com/pan-jateng-targetkan-11-juta-suara-ahmad-luthfi-di-pilgub-jateng-2024/'
  },
  {
    date: '13 Oktober 2024',
    title: 'Dua Ponpes Terbesar Brebes dengan 10.000 Santri Siap Menangkan Luthfi-Yasin',
    link: 'https://www.suarapembaruan.news/politik/53649869/dua-ponpes-terbesar-brebes-dengan-10000-santri-siap-menangkan-luthfi-yasin'
  },
  {
    date: '13 Oktober 2024',
    title: 'Jelita Karesidenan Pekalongan Siap Sinoman Tancut Taliwondo Menangkan Luthfi-Yasin',
    link: 'https://www.suarapembaruan.news/politik/53649899/jelita-karesidenan-pekalongan-siap-sinoman-tancut-taliwondo-menangkan-luthfi-yasin'
  },
  {
    date: '13 Oktober 2024',
    title: 'Ahmad Luthfi Gagas Rest Area Truk Jadi Sentra Ekonomi Baru',
    link: 'https://inilahjateng.com/ahmad-luthfi-gagas-rest-area-truk-jadi-sentra-ekonomi-baru/'
  },
  {
    date: '12 Oktober 2024',
    title: 'Ahmad Luthfi Dinilai Merakyat, Sekjen Gerindra Yakin Menang di Pilkada Jateng',
    link: 'https://news.detik.com/berita/d-7584780/ahmad-luthfi-dinilai-merakyat-sekjen-gerindra-yakin-menang-di-pilkada-jateng'
  },
  {
    date: '12 Oktober 2024',
    title: 'Sapa Warga Nahdliyin, Ahmad Luthfi Janji Lakukan Modernisasi Pesantren',
    link: 'https://news.detik.com/berita/d-7584462/sapa-warga-nahdliyin-ahmad-luthfi-janji-lakukan-modernisasi-pesantren'
  },
  {
    date: '12 Oktober 2024',
    title: 'Pemeriksaan dan Konsultasi Kesehatan Gratis untuk Warga Semarang',
    link: 'https://www.suaramerdeka.com/image/detail/15166/pemeriksaan-dan-konsultasi-kesehatan-gratis-untuk-warga-semarang'
  },
  {
    date: '12 Oktober 2024',
    title: 'Habib Syech di Tegal: Pak Ahmad Luthfi Tidak Mungkin Mblenjani Janji',
    link: 'https://inilahjateng.com/habib-syech-di-tegal-pak-ahmad-luthfi-tidak-mungkin-mblenjani-janji/'
  },
  {
    date: '12 Oktober 2024',
    title: 'Dalam Hal Ini, Gus Iqdam Akui Kalah dari Ahmad Luthfi dan Puspo Wardoyo, Kabeh Menungsa Duwe Nikmat Lan Cobane Dewe-Dewe',
    link: 'https://solo.kilat.com/politik/103013723526/dalam-hal-ini-gus-iqdam-akui-kalah-dari-ahmad-luthfi-dan-puspo-wardoyo-kabeh-menungsa-duwe-nikmat-lan-cobane-dewe-dewe'
  },
  {
    date: '12 Oktober 2024',
    title: 'Gus Iqdam Puji Kesabaran Ahmad Luthfi dalam Menghadapi Cobaan Hidup',
    link: 'https://bahterajateng.com/gus-iqdam-puji-kesabaran-ahmad-luthfi-dalam-menghadapi-cobaan-hidup/'
  },
  {
    date: '12 Oktober 2024',
    title: 'Gus Iqdam Takjub dengan Semangat Ahmad Luthfi: “Meski Selesai Diinfus, Tetap Tersenyum Menjumpai Masyarakat”',
    link: 'https://bahterajateng.com/gus-iqdam-takjub-dengan-semangat-ahmad-luthfi-meski-selesai-diinfus-tetap-tersenyum-menjumpai-masyarakat/'
  },
  {
    date: '12 Oktober 2024',
    title: 'Ahmad Luthfi Inginkan Masyarakat Desa Cerdas Kelola Mandiri Peluang Ekonomi Kreatif ',
    link: 'https://www.rmoljawatengah.id/ahmad-luthfi-inginkan-masyarakat-desa-cerdas-kelola-mandiri-peluang-ekonomi-kreatif'
  },
  {
    date: '12 Oktober 2024',
    title: 'Dua Ponpes Terbesar Brebes dengan 10.000 Santri Siap Menangkan Paslon 2 Luthfi-Yasin',
    link: 'https://jateng.akurat.co/news/1335187866/dua-ponpes-terbesar-brebes-dengan-10000-santri-siap-menangkan-paslon-2-luthfi-yasin'
  },
  {
    date: '12 Oktober 2024',
    title: 'Gerindra Sebut Pertemuan Prabowo-Megawati Untungkan Ahmad Luthfi di Pilgub Jateng',
    link: 'https://indoraya.news/gerindra-sebut-pertemuan-prabowo-megawati-untungkan-ahmad-luthfi-di-pilgub-jateng'
  },
  {
    date: '12 Oktober 2024',
    title: 'Sekjend Gerindra Sebut Cagub Ahmad Luthfi Pilihan Prabowo',
    link: 'https://inilahjateng.com/sekjend-gerindra-sebut-cagub-ahmad-luthfi-pilihan-prabowo/'
  },
  {
    date: '12 Oktober 2024',
    title: 'Pertemuan Prabowo-Megawati Perkuat Posisi Ahmad Luthfi di Pilgub Jateng',
    link: 'https://inilahjateng.com/pertemuan-prabowo-megawati-perkuat-posisi-ahmad-luthfi-di-pilgub-jateng/'
  },
  {
    date: '12 Oktober 2024',
    title: 'Datangi Pengajian di Kalipepe Land, Gus Iqdam Doakan Ahmad Luthfi dan Puspo Wardoyo, Semoga Hajatnya Dikabulkan',
    link: 'https://solo.kilat.com/politik/103013723573/datangi-pengajian-di-kalipepe-land-gus-iqdam-doakan-ahmad-luthfi-dan-puspo-wardoyo-semoga-hajatnya-dikabulkan'
  },
  {
    date: '12 Oktober 2024',
    title: 'Menangkan Luthfi-Yasin, Jaringan Perempuan Nahdliyin Tegal Gerilya Door to Door',
    link: 'https://inilahjateng.com/menangkan-luthfi-yasin-jaringan-perempuan-nahdliyin-tegal-gerilya-door-to-door/'
  },
  {
    date: '12 Oktober 2024',
    title: 'Dua Ponpes Terbesar Brebes dengan 10.000 Santri Siap Menangkan Paslon 2 Luthfi-Yasin',
    link: 'https://jateng.akurat.co/news/1335187866/dua-ponpes-terbesar-brebes-dengan-10000-santri-siap-menangkan-paslon-2-luthfi-yasin'
  },
  {
    date: '11 Oktober 2024',
    title: 'Gus Iqdam Takjub dengan Semangat Cagub Ahmad Luthfi',
    link: 'https://inilahjateng.com/gus-iqdam-takjub-dengan-semangat-cagub-ahmad-luthfi/'
  },
  {
    date: '11 Oktober 2024',
    title: 'Ini Kebiasaan Langka Gus Yasin : Suka Mborong Jajan Hingga Tukang Mijit Kyai Sepuh',
    link: 'https://koranpelita.com/2024/10/11/ini-kebiasaan-langka-gus-yasin-suka-mborong-jajan-hingga-tukang-mijit-kyai-sepuh//'
  },
  {
    date: '11 Oktober 2024',
    title: 'Dua Ponpes Terbesar di Brebes dengan 10.000 Santri Siap Menangkan Paslon Luthfi-Yasin',
    link: 'https://bahterajateng.com/dua-ponpes-terbesar-di-brebes-dengan-10-000-santri-siap-menangkan-paslon-luthfi-yasin/'
  },
  {
    date: '11 Oktober 2024',
    title: 'Nobar Timnas Indonesia vs Bahrain, Prediksi Cagub Ahmad Luthfi Tepat 2 Gol',
    link: 'https://www.sigijateng.id/olahraga/150647860/nobar-timnas-indonesia-vs-bahrain-prediksi-cagub-ahmad-luthfi-tepat-2-gol'
  },
  {
    date: '11 Oktober 2024',
    title: 'Ribuan Relawan Bu Maharani Siap Menangkan Ahmad Luthfi - Taj Yasin, Saat Deklarasi Diwarnai Aksi Mengejutkan',
    link: 'https://solo.kilat.com/politik/103013717129/ribuan-relawan-bu-maharani-siap-menangkan-ahmad-luthfi-taj-yasin-saat-deklarasi-diwarnai-aksi-mengejutkan'
  },
  {
    date: '10 Oktober 2024',
    title: 'Deklarasi Dukungan Warga Wadas untuk Cagub Ahmad Luthfi, Minta Infrastruktur dan Desa Wisata Agro',
    link: 'https://solo.kilat.com/politik/103013712927/deklarasi-dukungan-warga-wadas-untuk-cagub-ahmad-luthfi-minta-infrastruktur-dan-desa-wisata-agro'
  },
  {
    date: '10 Oktober 2024',
    title: 'Belok Arah! Relawan Andika Perkasa Soloraya Pilih Dukung Ahmad Luthfi-Taj Yasin',
    link: 'https://surakarta.suara.com/read/2024/10/10/233559/belok-arah-relawan-andika-perkasa-soloraya-pilih-dukung-ahmad-luthfi-taj-yasin'
  },
  {
    date: '10 Oktober 2024',
    title: 'Warga Wadas Dukung Cagub Ahmad Luthfi',
    link: 'https://inilahjateng.com/warga-wadas-dukung-cagub-ahmad-luthfi/'
  },
  {
    date: '9 Oktober 2024',
    title: 'Resmikan Posko Pemenangan Banyumas, Ini Pesan Cagub Ahmad Luthfi',
    link: 'https://inilahjateng.com/resmikan-posko-pemenangan-banyumas-ini-pesan-cagub-ahmad-luthfi/'
  },
  {
    date: '9 Oktober 2024',
    title: 'Keberpihakan Ahmad Luthfi kepada Ribuan Petani',
    link: 'https://solo.suaramerdeka.com/jawa-tengah/0513705168/keberpihakan-ahmad-luthfi-kepada-ribuan-petani'
  },
  {
    date: '9 Oktober 2024',
    title: 'Dukung Program Makan Bergizi Gratis Prabowo-Gibran, Ahmad Luthfi Gelar Lomba Mancing',
    link: 'https://www.suarapembaruan.news/politik/53604004/dukung-program-makan-bergizi-gratis-prabowo-gibran-ahmad-luthfi-gelar-lomba-mancing'
  },
  {
    date: '9 Oktober 2024',
    title: 'Ribuan Warga Banyumas Deklarasi Menangkan Luthfi-Yasin',
    link: 'https://inilahjateng.com/ribuan-warga-banyumas-deklarasi-menangkan-luthfi-yasin/'
  },
  {
    date: '8 Oktober 2024',
    title: 'Safari ke Purworejo, Taj Yasin Ditemani Yophi Prabowo Ziarah ke Makam Jendral Sarwo Edhie',
    link: 'https://jatengpress.com/2024/jateng/10/safari-ke-purworejo-taj-yasin-ditemani-yophi-prabowo-ziarah-ke-makam-jendral-sarwo-edhie/'
  },
  {
    date: '8 Oktober 2024',
    title: 'Temui Pelaku UMKM di Tegal, Ahmad Luthfi: Jenengan Sumuk, Saya Juga Harus Merasakan',
    link: 'https://inilahjateng.com/temui-pelaku-umkm-di-tegal-ahmad-luthfi-jenengan-sumuk-saya-juga-harus-merasakan/'
  },
  {
    date: '8 Oktober 2024',
    title: 'Ahmad Luthfi Puji Kerja 10 Tahun Jokowi: Infrastruktur Banyak Bantu Warga',
    link: 'https://news.detik.com/berita/d-7578257/ahmad-luthfi-puji-kerja-10-tahun-jokowi-infrastruktur-banyak-bantu-warga'
  },
  {
    date: '8 Oktober 2024',
    title: 'Safari ke Purworejo, Taj Yasin Ditemani Yophi Prabowo Ziarah ke Makam Jendral Sarwo Edhie',
    link: 'https://jatengpress.com/2024/jateng/10/safari-ke-purworejo-taj-yasin-ditemani-yophi-prabowo-ziarah-ke-makam-jendral-sarwo-edhie/'
  },
  {
    date: '8 Oktober 2024',
    title: 'Bertemu Petani, Cagub Ahmad Luthfi Prihatin Kasus yang Menjerat Petani Hutan Sosial',
    link: 'https://semarang.viva.co.id/jawa-tengah/2301-keberpihakan-petani-sosial-ahmad-luthfi-jangan-bangga-menghukum-pahlawan-pangan'
  },
  {
    date: '8 Oktober 2024',
    title: 'Cagub Ahmad Luthfi Terdiam Saat Dapati Tumpukan Sampah di Tengah Pasar',
    link: 'https://inilahjateng.com/cagub-ahmad-luthfi-terdiam-saat-dapati-tumpukan-sampah-di-tengah-pasar/'
  },
  {
    date: '7 Oktober 2024',
    title: 'Cagub Jateng Ahmad Luthfi Senang Bisa Lesehan dengan Petani Manggungsari Kendal',
    link: 'https://bahterajateng.com/cagub-jateng-ahmad-luthfi-senang-bisa-lesehan-dengan-petani-manggungsari-kendal/'
  },
  {
    date: '7 Oktober 2024',
    title: 'Ribuan Warga Batang Acungkan Salam Jari "L" Bersama Ahmad Luthfi! Simbol Kemenangan',
    link: 'https://jateng.tribunnews.com/2024/10/07/ribuan-warga-batang-acungkan-salam-jari-l-bersama-ahmad-luthfi-simbol-kemenangan'
  },
  {
    date: '7 Oktober 2024',
    title: 'Dihentikan 10 Kali! Ahmad Luthfi Dicegat Emak-emak dan Pemuda Saat Kunjungi Batang, Begini Ceritanya',
    link: 'https://jateng.tribunnews.com/2024/10/07/dihentikan-10-kali-ahmad-luthfi-dicegat-emak-emak-dan-pemuda-saat-kunjungi-batang-begini-ceritanya'
  },
  {
    date: '7 Oktober 2024',
    title: 'Simpatisan Ganjar-Mahfud Dukung Cagub Ahmad Luthfi',
    link: 'https://inilahjateng.com/simpatisan-ganjar-mahfud-dukung-cagub-ahmad-luthfi/'
  },

];

function Innews() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const currentNews = newsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
    <div className='grid grid-cols-1 bg-white'>
      <div className='fixed left-5 top-5 bg-white p-1  md:p-2 px-2 md:px-3 hover:scale-125  hover:delay-100 duration-100 rounded-2xl z-50'>
        <Link to='/'>
          <IoIosArrowRoundBack className='text-black md:w-12 w-8 md:h-10 h-6' />
        </Link>
      </div>
      <div className="space-y-4 md:space-y-10">
        <motion.div {...Scale}>
          <div className='relative'>
            <img className='rounded-b-3xl md:rounded-b-[100px] w-full' src={bg} alt="" />
            <div className='absolute inset-0 flex justify-center items-center'>
              <h1 className='text-white text-4xl md:text-6xl font-bold'>NEWS</h1>
            </div>
          </div>
          <div className="p-2 md:p-4 border-b-2 md:border-b-4 border-orange-500 mx-10 xl:mx-64">
            <h1 className="text-center md:text-3xl text-xl font-light">RECENT NEWS</h1>
          </div>
        </motion.div>

        <motion.div {...Motionx}>
          {currentNews.map((item, index) => (
            <a className='' key={index} href={item.link} target='_blank' rel='noopener noreferrer'>
              <div className="md:p-4 p-2 border-b-2 space-y-2 mx-4 xl:mx-44">
                <div>
                  <h1 className="md:text-lg text-base font-light">{item.date}</h1>
                </div>
                <div>
                  <h1 className="md:text-lg text-base font-extralight text-blue-500 hover:underline">
                    {item.title}
                  </h1>
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div {...Scale}>
          {/* Pagination Controls */}
          <div className="flex justify-center space-x-4 py-4">
            <button onClick={handlePreviousPage} disabled={currentPage === 1} className="bg-gray-200 px-4 py-2 rounded-md disabled:opacity-50">
              <IoIosArrowBack />
            </button>
            <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-gray-200 px-4 py-2 rounded-md disabled:opacity-50">
              <IoIosArrowForward />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Innews;
