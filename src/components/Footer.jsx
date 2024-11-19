import logo from "../assets/images/ngelakoni.png";
import { Link } from "react-router-dom";
import ig from '../assets/images/ig.svg'
import tiktok from '../assets/images/tiktok.svg'
import x from '../assets/images/x.svg'
import fb from '../assets/images/fb.svg'
import yt from '../assets/images/yt.svg'


function Footer() {
  return (
    <div className="relative grid grid-cols-1 bg-gray-100 rounded-t-[50px] md:rounded-t-[100px]">
      <div className="md:space-y-0 space-y-4">
        <div className="grid grid-cols-4 space-y-10 md:space-y-8">
          <div className="mx-auto my-auto col-span-2 md:col-span-1 order-1">
            <img
              className="w-full h-full md:w-fit md:h-20 "
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="space-y-2 md:space-y-4 mx-auto col-span-2 md:col-span-1 order-2 md:order-3">
            <h1 className="font-extrabold text-xl md:text-2xl">Navigation</h1>
            <div>
              <Link to='/'>
                <h1 className="font-bold text-base md:text-lg">Home</h1>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <h1 className="font-bold text-base md:text-lg">Profile</h1>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <h1 className="font-bold text-base md:text-lg">News</h1>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <h1 className="font-bold text-base md:text-lg">Visi & Misi</h1>
              </Link>
            </div>
          </div>
          <div className='mx-auto space-y-4 md:space-y-10 my-auto col-span-4 md:col-span-2 order-3 md:order-2'>
            <div>
            <h1 className='text-xl md:text-2xl font-extralight text-center'>Media Sosial <span className='font-bold'>Luthfi Yasin Official </span></h1>
            </div>
            <div className='flex justify-between'>
              <a href="https://www.instagram.com/luthfiyasinofficial/" target="blank">
                <img className='md:w-10 w-6 md:h-10 h-6' src={ig} alt="" />
              </a>
              <a href="https://www.tiktok.com/@luthfiyasinofficial" target="blank">
                <img className='md:w-10 w-6 md:h-10 h-6' src={tiktok} alt="" />
              </a>
              <a href="https://x.com/luthfiyasinofc" target="blank">
                <img className='md:w-10 w-6 md:h-10 h-6' src={x} alt="" />
              </a>
              <a href="https://www.facebook.com/luthfiyasin02official" target="blank">
                <img className='md:w-10 w-6 md:h-10 h-6' src={fb} alt="" />
              </a>
              <a href="https://www.youtube.com/@LuthfiYasinofficial/videos" target="blank">
                <img className='md:w-10 w-6 md:h-10 h-6' src={yt} alt="" />
              </a>
            </div>
          </div>

        </div>
        <div className="p-2 md:p-4 border-black border-t-2 md:border-t-4 mx-8 md:mx-96">
          <h1 className="text-center font-medium text-xl md:text-2xl">Present by Zilenial</h1>
        </div>
        </div>
    </div>
  );
}

export default Footer;
