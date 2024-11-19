/* eslint-disable no-irregular-whitespace */
import bio1 from '../../assets/images/bio1.png'
import bio2 from '../../assets/images/bio2.png'
import bg from '../../assets/images/peta.png'
import hero from '../../assets/images/ahmad.png'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Bio1() {

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
        <section id='bio1'>
            <div className='grid grid-cols-1 bg-white'>
                <div className='fixed left-5 top-5 bg-white p-1  md:p-2 px-2 md:px-3 hover:scale-125  hover:delay-100 duration-100 rounded-2xl z-50'>
                    <Link to='/'>
                        <IoIosArrowRoundBack className='text-black md:w-12 w-8 md:h-10 h-6' />
                    </Link>
                </div>
                <div className="space-y-4 md:space-y-10">
                    <motion.div {...Scale}>
                        <div>
                            <div className='bg-blue-800 rounded-b-3xl md:rounded-b-[100px] relative'>
                                <div className='absolute inset-0'>
                                    <img className='object-cover w-full h-full z-10' src={bg} alt="" />
                                </div>
                                <div className='relative'>
                                    <img className='mx-auto z-20 w-1/2 md:w-fit' src={hero} alt="" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div {...Motionx}>
                        <div className="mx-auto p-2 md:p-10">
                            <h1 className="text-center font-light text-xl md:text-3xl">
                                16 Tahun Pengabdian di Jawa Tengah untuk Membangun Masa Depan yang Lebih Baik. Bergabunglah dalam Perjalanan Menuju Kemajuan dan Kesejahteraan Bersama!                    </h1>
                        </div>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mx-2 xl:mx-20">
                        <motion.div {...Motionx}>
                            <div className="bg-gray-100 p-2 md:p-4 rounded-3xl mx-auto">
                                <div className='space-y-3 md:space-y-6 p-2 md:p-4  my-4 md:my-0'>
                                    <div className="">
                                        <h1 className='text-xl text-blue-800 md:text-3xl font-extrabold'>Biografi Ahmad Luthfi</h1>
                                    </div>
                                    <div>
                                        <h1 className='md:text-lg text-base font-extralight'
                                            style={{ textAlign: "justify" }}
                                        >
                                            Drs. Ahmad Luthfi, S.H., S.St.M.K. atau kerap disapa Ahmad Luthfi adalah seorang Purnawirawan Perwira Tinggi Polri yang lahir pada tahun 1966. Ia menduduki jabatan terakhir sebagai Inspektur Jenderal Kementerian Perdagangan sejak 14 Agustus 2024.
                                        </h1>
                                    </div>
                                    <div>
                                        <h1 className='md:text-lg text-base font-extralight'
                                            style={{ textAlign: "justify" }}
                                        >
                                            Ahmad Luthfi bergabung dengan kepolisian melalui Sekolah Perwira Militer Sukarela (Sepa Misuk) Polri pada tahun 1989 berpengalaman di bidang Intelijen Keamanan. Dalam perjalanan karirnya, sosok Luthfi pernah menjabat sebagai Wakil Kapolres Solo tahun 2011 sehingga mempererat hubungan dengan Presiden Joko Widodo yang kala itu menjadi Wali Kota Solo.
                                        </h1>
                                    </div>
                                    <div className='md:flex justify-between space-y-2 md:space-y-0'>
                                        <img className='rounded-3xl mx-auto' src={bio1} alt="" />
                                        <img className='rounded-3xl mx-auto' src={bio2} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='md:text-lg text-base font-extralight'
                                            style={{ textAlign: "justify" }}
                                        >
                                            Ia mendapat promosi sebagai Analisis Kebijakan Madya Bidang Sosial Budaya Badan Intelijen Keamanan (Baintelkam) Polri tahun 2017, kemudian 2018 diangkat menjadi Wakapolda Jawa Tengah serta tahun 2020 menjadi Kapolda Jawa Tengah hingga 2024 menyandang pangkat Irjen atau Jenderal Bintang Dua Polri. Dengan rekam jejak dan pengalaman yang luas, sosok Irjen Pol Ahmad Luthfi mendaftarkan diri sebagai calon gubernur Jawa Tengah menuju kemajuan dan kesejahteraan bersama.
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className='bg-gray-100 rounded-3xl flex flex-col justify-center' {...Motionx}>
                            <div className='md:mx-8 mx-4 space-y-3 md:space-y-6 my-4 md:my-0'>
                                <div className=''>
                                    <h1 className='text-blue-800 text-xl md:text-3xl font-extrabold'>Rekam Jejak Ahmad Luthfi</h1>
                                </div>
                                <div className=''>
                                    <div className='flex justify-around p-1 md:p-2'>
                                        <div className='flex items-center'>
                                            <h1 className='text-xl md:text-3xl text-blue-800 font-extrabold'>2008</h1>
                                        </div>
                                        <div className='w-4/5'>
                                            <h1
                                                className='text-black text-base md:text-lg font-normal'
                                                style={{ textAlign: 'justify' }}>
                                                Kepemimpinan yang Berdedikasi sebagai Kapolres Batang
                                            </h1>
                                        </div>
                                    </div>
                                    <hr className='border-b-0 md:border-b-2 border-black w-4/5 mx-auto' />
                                </div>
                                <div className=''>
                                    <div className='flex justify-around p-1 md:p-2'>
                                        <div className='flex items-center'>
                                            <h1 className='text-xl md:text-3xl text-blue-800 font-extrabold'>2010</h1>
                                        </div>
                                        <div className='w-4/5'>
                                            <h1
                                                className='text-black text-base md:text-lg font-normal'
                                                style={{ textAlign: 'justify' }}>
                                                Kepemimpinan Visioner Saat Menjabat Wadir Intelkam Polda Jateng
                                            </h1>
                                        </div>
                                    </div>
                                    <hr className='border-b-0 md:border-b-2 border-black w-4/5 mx-auto' />
                                </div>
                                <div className=''>
                                    <div className='flex justify-around p-1 md:p-2'>
                                        <div className='flex items-center'>
                                            <h1 className='text-xl md:text-3xl text-blue-800 font-extrabold'>2011</h1>
                                        </div>
                                        <div className='w-4/5'>
                                            <h1
                                                className='text-black text-base md:text-lg font-normal'
                                                style={{ textAlign: 'justify' }}>
                                                Kepemimpinan yang Berintegritas Saat Menjadi Wakapolresta Surakarta
                                            </h1>
                                        </div>
                                    </div>
                                    <hr className='border-b-0 md:border-b-2 border-black w-4/5 mx-auto' />
                                </div>
                                <div className=''>
                                    <div className='flex justify-around p-1 md:p-2'>
                                        <div className='flex items-center'>
                                            <h1 className='text-xl md:text-3xl text-blue-800 font-extrabold'>2015</h1>
                                        </div>
                                        <div className='w-4/5'>
                                            <h1
                                                className='text-black text-base md:text-lg font-normal'
                                                style={{ textAlign: 'justify' }}>
                                                Pemimpin Tangkas dan Transparan Saat Menjadi Kapolresta Surakarta
                                            </h1>
                                        </div>
                                    </div>
                                    <hr className='border-b-0 md:border-b-2 border-black w-4/5 mx-auto' />
                                </div>
                                <div className=''>
                                    <div className='flex justify-around p-1 md:p-2'>
                                        <div className='flex items-center'>
                                            <h1 className='text-xl md:text-3xl text-blue-800 font-extrabold'>2018</h1>
                                        </div>
                                        <div className='w-4/5'>
                                            <h1
                                                className='text-black text-base md:text-lg font-normal'
                                                style={{ textAlign: 'justify' }}>
                                                Pemimpin Tangguh dengan Visi Strategis Saat Menjabat Wakapolda Jawa  Tengah
                                            </h1>
                                        </div>
                                    </div>
                                    <hr className='border-b-0 md:border-b-2 border-black w-4/5 mx-auto' />
                                </div>
                                <div className=''>
                                    <div className='flex justify-around p-1 md:p-2'>
                                        <div className='flex items-center'>
                                            <h1 className='text-xl md:text-3xl text-blue-800 font-extrabold'>2020</h1>
                                        </div>
                                        <div className='w-4/5'>
                                            <h1
                                                className='text-black text-base md:text-lg font-normal'
                                                style={{ textAlign: 'justify' }}>
                                                Pemimpin Visioner dalam Mengawal Kemaanan Wilayah Sebagai Kapolda Jawa Tengah
                                            </h1>
                                        </div>
                                    </div>
                                    <hr className='border-b-0 md:border-b-2 border-black w-4/5 mx-auto' />
                                </div>
                                <div className=''>
                                    <div className='flex justify-around p-1 md:p-2'>
                                        <div className='flex items-center'>
                                            <h1 className='text-xl md:text-3xl text-blue-800 font-extrabold'>2024</h1>
                                        </div>
                                        <div className='w-4/5'>
                                            <h1
                                                className='text-black text-base md:text-lg font-normal'
                                                style={{ textAlign: 'justify' }}>
                                                Pemimpin konsisten dan bertanggungjawab Saat Menjabat Inspektur Jenderal Kementerian Perdagangan
                                            </h1>
                                        </div>
                                    </div>
                                    <hr className='border-b-0 md:border-b-2 border-black w-4/5 mx-auto' />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div {...Motionx}>
                        <div className='bg-gray-100 rounded-3xl space-y-3 md:space-y-6 mx-4 xl:mx-20 p-2 md:p-4'>
                            <div className='my-4 md:my-0 space-y-3 md:space-y-6 p-2 md:p-4'>
                                <div>
                                    <h1 className='text-xl md:text-3xl font-extrabold text-center text-blue-800'>Penghargaan Ahmad Luthfi</h1>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2'>
                                    <div className='space-y-2 md:space-y-4'>
                                        <div className='flex space-x-2'>
                                            <h1 className='text-base md:text-lg font-bold'>1.</h1>
                                            <h1
                                                className='text-base md:text-lg font-light' style={{ textAlign: "justify" }}
                                            ><span className='font-bold'>Presisi Award 2023 :</span> Diberikan kepada Polda Jawa Tengah di bawah kepemimpinannya atas keberhasilan dalam menangani Tindak Pidana Perdagangan Orang (TPPO).​</h1>
                                        </div>
                                        <div className='flex space-x-2'>
                                            <h1 className='text-base md:text-lg font-bold'>2.</h1>
                                            <h1
                                                className='text-base md:text-lg font-light' style={{ textAlign: "justify" }}
                                            ><span className='font-bold'>Indonesia Most Inspiring And Valuable Figure 2024 :</span> Diberikan oleh Indonesia Award Magazine sebagai bentuk pengakuan atas prestasi dan kepemimpinan modern yang diterapkan Ahmad Luthfi, yang dinilai sangat menginspirasi masyarakat dan Polri​.​</h1>
                                        </div>
                                        <div className='flex space-x-2'>
                                            <h1 className='text-base md:text-lg font-bold'>3.</h1>
                                            <h1
                                                // eslint-disable-next-line react/no-unescaped-entities
                                                className='text-base md:text-lg font-light'><span className='font-bold'>Penghargaan "Citra Istakarya Nusantara dari Wanita Muslimah Indonesia (WMI) 2024 :</span> Diberikan atas peran aktif dalam kegiatan kemanusiaan dan kontribusinya memperjuangkan hak serta kepentingan muslimah di Indonesia.​</h1>
                                        </div>
                                    </div>
                                    <div className='space-y-2 md:space-y-4'>
                                        <div className='flex space-x-2'>
                                            <h1 className='text-base md:text-lg font-bold'>4.</h1>
                                            <h1
                                                className='text-base md:text-lg font-light' style={{ textAlign: "justify" }}
                                            ><span className='font-bold'>Pengukuhan sebagai Ayah Asuh Anak Stunting :</span> Diberikan oleh BKKBN Pusat atas kepedulian dan peran sertanya dalam upaya mensejahterakan anak, terutama pencegahan stunting di Jawa Tengah.​</h1>
                                        </div>
                                        <div className='flex space-x-2'>
                                            <h1 className='text-base md:text-lg font-bold'>5.</h1>
                                            <h1
                                                className='text-base md:text-lg font-light' style={{ textAlign: "justify" }}
                                            ><span className='font-bold'>Pengukuhan sebagai Bapak Asuh Disabilitas Jawa Tengah :</span> Diberikan oleh Ketua Aliansi Disabilitas Karanganyar atas dukungannya terhadap pengkaryaan umkm bagi penyandang disabilitas.​</h1>
                                        </div>
                                        <div className='flex space-x-2'>
                                            <h1 className='text-base md:text-lg font-bold'>6.</h1>
                                            <h1
                                                className='text-base md:text-lg font-light' style={{ textAlign: "justify" }}
                                            ><span className='font-bold'>Pengukuhan sebagai Bapak Buruh :</span> Diberikan oleh Relawan Buruh atas inisiasinya menyelenggarakan program Daycare dan Harga Pangan Murah untuk Buruh.​</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Bio1
