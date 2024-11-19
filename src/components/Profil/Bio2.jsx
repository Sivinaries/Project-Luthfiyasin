/* eslint-disable no-irregular-whitespace */
import bio1 from '../../assets/images/bio3.png'
import bio2 from '../../assets/images/bio4.png'
import bio3 from '../../assets/images/bio5.png'
import bg from '../../assets/images/peta.png'
import hero from '../../assets/images/yasin.png'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Bio2() {

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
                    <div>
                        <div className='bg-orange-500 rounded-b-3xl md:rounded-b-[100px] relative'>
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
                            Satu Dekade mengabdi penuh di Jawa Tengah untuk mewujudkan masa depan yang lebih baik. Mari bergabung dalam perjalanan menuju kemajuan dan kesejahteraan yang berkelanjutan!                    </h1>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mx-2 xl:mx-20">
                <motion.div {...Motionx}>
                        <div className="bg-gray-100 p-2 md:p-5 rounded-3xl mx-auto">
                            <div className='space-y-3 md:space-y-6 p-2 md:p-4 my-4 md:my-0'>
                                <div className="">
                                    <h1 className='text-xl md:text-3xl text-orange-500 font-extrabold'>Biografi Taj Yasin</h1>
                                </div>
                                <div>
                                    <h1 className='md:text-lg text-sm font-extralight'
                                        style={{ textAlign: "justify" }}
                                    >
                                        Sosok Taj Yasin atau yang lebih akrab dikenal masyarakat dengan sapaan Gus Yasin, adalah tokoh ulama sekaligus politisi yang menjabat Wakil Gubernur Jawa Tengah periode 2018-2023. Di dalam perjalanan akademiknya, Gus Yasin pernah mengenyam studi di Fakultas Dakwah Universitas Ahmad Kuftaro Damaskus, Suriah, pada tahun 2004-2008. Setelah menyelesaikan studinya di Damaskus, Gus Yasin terjun ke dunia politik atas dawuh dari ayahandanya.
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
                                        Selama menjabat sebagai Wakil Gubernur Jawa Tengah, terdapat tiga program kerja unggulan yang berhasil diwujudkan oleh Gus Yasin, di antaranya adalah bisyaroh bagi penghafal Al Qur’an, insentif pengajar keagamaan, dan percepatan pendirian Rumah Potong Hewan (RPH) Halal milik pemerintah dan swasta. Berkat program kerja yang dicanangkan Gus Yasin, Pemprov Jateng berhasil meningkatkan kesejahteraan guru-guru agama di Jawa Tengah dengan memberikan insentif kepada total sebanyak 280.830 guru agama Islam, Kristen, Katolik, Hindu, dan Buddha.
                                    </h1>
                                </div>
                                <div>
                                    <h1 className='md:text-lg text-base font-extralight'
                                        style={{ textAlign: "justify" }}
                                    >
                                        Gus Yasin dianggap sebagai representasi kalangan religius terlebih Nahdlatul Ulama. Tak hanya itu, Ia juga merupakan salah satu ketua GP Ansor Jawa Tengah dan putra dari ulama besar asal Rembang, Jawa Tengah yakni K.H. Maimoen Zubair (1928–2019).
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='bg-gray-100 rounded-3xl flex flex-col justify-center' {...Motionx}>
                        <div className='md:mx-8 mx-4 space-y-3 md:space-y-6 my-4 md:my-0'>
                            <div className=''>
                                <h1 className='text-xl md:text-3xl font-extrabold text-orange-500'>Rekam Jejak Taj Yasin</h1>
                            </div>
                            <div className=''>
                                <div className='flex justify-around p-1 md:p-2'>
                                    <div className='flex items-center'>
                                        <h1 className='text-xl md:text-3xl text-orange-500 font-extrabold'>2011</h1>
                                    </div>
                                    <div className='w-4/5'>
                                        <h1
                                            className='text-black text-base md:text-lg font-normal'
                                        >
                                            Wakil Ketua DPW PPP Jawa Tengah
                                        </h1>
                                    </div>
                                </div>
                                <hr className='border-b-0 md:border-b-2 border-black w-4/5 mx-auto' />
                            </div>
                            <div className=''>
                                <div className='flex justify-around p-1 md:p-2'>
                                    <div className='flex items-center'>
                                        <h1 className='text-xl md:text-3xl text-orange-500 font-extrabold'>2014</h1>
                                    </div>
                                    <div className='w-4/5'>
                                        <h1
                                            className='text-black text-base md:text-lg font-normal'
                                        >
                                            Menuntaskan Amanah sebagai Anggota DPRD Jawa Tengah
                                        </h1>
                                    </div>
                                </div>
                                <hr className='border-b-0 md:border-b-2 border-black w-4/5 mx-auto' />
                            </div>
                            <div className=''>
                                <div className='flex justify-around p-1 md:p-2'>
                                    <div className='flex items-center'>
                                        <h1 className='text-xl md:text-3xl text-orange-500 font-extrabold'>2018</h1>
                                    </div>
                                    <div className='w-4/5'>
                                        <h1
                                            className='text-black text-base md:text-lg font-normal'
                                        >
                                            Menjalankan Amanah Rakyat Sebagai Wakil Gubernur Jawa Tengah Periode 2018-2023
                                        </h1>
                                    </div>
                                </div>
                                <hr className='border-b-0 md:border-b-2 border-black w-4/5 mx-auto' />
                            </div>
                            <div className=''>
                                <div className='flex justify-around p-1 md:p-2'>
                                    <div className='flex items-center'>
                                        <h1 className='text-xl md:text-3xl text-orange-500 font-extrabold'>2020</h1>
                                    </div>
                                    <div className='w-4/5'>
                                        <h1
                                            className='text-black text-base md:text-lg font-normal'
                                        >
                                            Panglima Santri Gayeng Nusantara
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
                                <h1 className='text-xl md:text-3xl font-extrabold text-orange-500'>Penghargaan Taj Yasin</h1>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                <div className=''>
                                    <div className='space-y-2 md:space-y-4'>
                                        <div>
                                            <h1 className='text-base md:text-lg font-light' style={{ textAlign: "justify" }}
                                            >Penghargaan yang diterima Provinsi Jawa Tengah di bawah kepemimpinan Wakil Gubernur Taj Yasin.</h1>
                                        </div>
                                        <div className='flex space-x-2'>
                                            <h1 className='text-base md:text-lg font-bold'>1.</h1>
                                            <h1
                                                className='text-lg font-light' style={{ textAlign: "justify" }}
                                            ><span className='font-bold'>Layanan Investasi Terbaik</span> (2018, 2021, 2022)​</h1>
                                        </div>
                                        <div className='flex space-x-2'>
                                            <h1 className='text-base md:text-lg font-bold'>2.</h1>
                                            <h1
                                                className='text-base md:text-lg font-light' style={{ textAlign: "justify" }}
                                            ><span className='font-bold'>Good Govermence Terbaik</span> (2022)​</h1>
                                        </div>
                                        <div className='flex space-x-2'>
                                            <h1 className='text-base md:text-lg font-bold'>3.</h1>
                                            <h1
                                                className='text-base md:text-lg font-light' style={{ textAlign: "justify" }}
                                            ><span className='font-bold'>Sistem Pencegahan Korupsi Terbaik</span> (2015-2022)​</h1>
                                        </div>
                                        <div className='flex space-x-2'>
                                            <h1 className='text-base md:text-lg font-bold'>4.</h1>
                                            <h1
                                                className='text-base md:text-lg font-light' style={{ textAlign: "justify" }}
                                            ><span className='font-bold'>Provinsi Terinovasi</span> (2020, 2021)​</h1>
                                        </div>
                                        <div className='flex space-x-2'>
                                            <h1 className='text-base md:text-lg font-bold'>5.</h1>
                                            <h1
                                                className='text-base md:text-lg font-light' style={{ textAlign: "justify" }}
                                            ><span className='font-bold'>Perancangan Pembangunan Terbaik Tingkat Provinsi</span> (2019, 2020)​</h1>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className='mx-auto' src={bio3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Bio2
