import ngopeni from '../../assets/images/ngopeni.png';
import bg from '../../assets/images/bg1.png';
import { motion } from "framer-motion";

function Ngopeni() {

  const Scale = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 2.0 },
    viewport: { once: true },
  };

  const Motionx2 = {
    initial: { opacity: 0, y: -150 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.5, ease: "easeInOut" },
    viewport: { once: true },
  };

  return (
    <div className='grid grid-cols-1 bg-white p-4 md:p-10'>
      <div
        className="bg-cover bg-center rounded-3xl md:my-20"
        style={{ backgroundImage: `url(${bg})` }}>
        <div className='md:p-32 p-4 space-y-4 md:space-y-0'>
          <motion.div {...Scale}>
            <div>
              <img className='mx-auto' src={ngopeni} alt="Ngopeni" />
            </div>
          </motion.div>
          <div className='grid md:grid-cols-2 grid-cols-1 space-y-2 md:space-y-4'>
            <motion.div {...Motionx2}>
              <div className=''>
                <div className='w-full md:w-3/4 mx-auto space-y-2 md:space-y-4'>
                  <h1 className='text-4xl md:text-6xl text-blue-800 font-bold text-center'>NGOPENI.</h1>
                  <h1 className='text-xl md:text-2xl font-base'
                    style={{ textAlign: "justify" }}
                  >Dari kata <span className='font-bold'>“Open”</span> dalam Bahasa Jawa juga diartikan dengan <span className='font-bold'>Gemati</span> secara luas diartikan sifat Tanggung Jawab atas komitmen yang diemban, Merawat, Memelihara dimana diwujudkan dalam <span className='font-bold'>Tindakan Nyata.</span></h1>
                </div>
              </div>
            </motion.div>
            <motion.div {...Motionx2}>
              <div className=''>
                <div className='w-full md:w-3/4 mx-auto space-y-2 md:space-y-4'>
                  <h1 className='text-4xl md:text-6xl text-blue-800 font-bold text-center'>NGELAKONI.</h1>
                  <h1 className='text-xl md:text-2xl font-base'
                    style={{ textAlign: "justify" }}
                  >Dari kata <span className='font-bold'>“Lakon”</span> memiliki 2 makna Utama, Lakon juga bisa diartikan sebagai <span className='font-bold'>Pemeran</span> - Penanggung Jawab, Pelaksana. <span className='font-bold'>“Lakon”</span> juga berarti <span className='font-bold'>Siap Menjalankan</span> Komitmen dan Tanggung Jawab.</h1>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ngopeni;
