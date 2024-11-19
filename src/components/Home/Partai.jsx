import pan from '../../assets/images/pan.svg'
import ppp from '../../assets/images/ppp.svg'
import prima from '../../assets/images/prima.svg'
import gerindra from '../../assets/images/gerindra.svg'
import buruh from '../../assets/images/buruh.svg'
import gelora from '../../assets/images/gelora.svg'
import pkb from '../../assets/images/pkb.svg'
import nasdem from '../../assets/images/nasdem.svg'
import pks from '../../assets/images/pks.svg'
import pbb from '../../assets/images/pbb.svg'
import golkar from '../../assets/images/golkar.svg'
import perindo from '../../assets/images/perindo.svg'
import demokrat from '../../assets/images/demokrat.svg'
import garuda from '../../assets/images/garuda.svg'
import psi from '../../assets/images/psi.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Partai() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Default for larger screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024, // For tablets and smaller devices
                settings: {
                    slidesToShow: 3, // Show 3 images
                }
            },
            {
                breakpoint: 640, // For mobile devices
                settings: {
                    slidesToShow: 3, // Show 2 images
                }
            },
            {
                breakpoint: 480, // For small mobile devices
                settings: {
                    slidesToShow: 3, // Show 1 image
                }
            }
        ]
    };


    return (
        <div className="grid grid-cols-1 p-6 md:p-12 my-10">
            <Slider className='w-full p-2' {...settings}>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={pkb} alt="" />
                </div>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={gerindra} alt="" />
                </div>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={golkar} alt="" />
                </div>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={pks} alt="" />
                </div>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={demokrat} alt="" />
                </div>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={ppp} alt="" />
                </div>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={pan} alt="" />
                </div>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={nasdem} alt="" />
                </div>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={psi} alt="" />
                </div>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={pbb} alt="" />
                </div>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={gelora} alt="" />
                </div>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={garuda} alt="" />
                </div>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={prima} alt="" />
                </div>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={perindo} alt="" />
                </div>
                <div className='w-full h-44 p-4'>
                    <img className='w-full h-full' src={buruh} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default Partai
