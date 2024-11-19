import kampanye from '../../assets/images/kampanye.png'
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

function Kampanye() {

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
        <div className="grid grid-cols-1 bg-white my-20 md:my-24">
            <div className="xl:mx-20 mx-4 space-y-4 md:space-y-8">
                <motion.div {...Scale}>
                    <div className='space-y-1 md:space-y-2'>
                        <div className=''>
                            <h1 className="text-black text-center text-4xl md:text-6xl font-extrabold">Alat Kampanye</h1>
                        </div>
                        <div className='p-1 md:p-2 bg-orange-500 w-3/4 md:w-1/2 mx-auto rounded-l-3xl rounded-r-3xl'>

                        </div>
                    </div>
                </motion.div>
                <motion.div {...Motionx}>
                    <div className='w-full mx-auto'>
                        <img className='mx-auto' src={kampanye} alt="" />
                    </div>
                </motion.div>
                <motion.div {...Motionx}>
                    <div className='md:p-2 p-1 bg-orange-500 hover:scale-125  hover:delay-100 duration-100 rounded-xl px-3 w-fit mx-auto'>
                        <a href='https://drive.google.com/drive/folders/1vYzvWrCYDea8MOUapjPPdt1lDe1gtUF7' target='blank' className='flex justify-center'>
                            <h1 className='text-white text-base md:text-xl font-light my-auto'>Unduh Design Disini</h1>
                            <MdArrowOutward className='text-white w-6 md:w-8 h-6 md:h-8' />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Kampanye
