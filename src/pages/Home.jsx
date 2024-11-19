import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Home/Hero'
import Berita from '../components/Home/Berita'
import Partai from '../components/Home/Partai'
import Profil from '../components/Home/Profil'
import Tri from '../components/Home/Tri'
import Visimisi from '../components/Home/Visimisi'
import Ngopeni from '../components/Home/Ngopeni'
import Video from '../components/Home/Video'

function Home() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Hero />
                <Ngopeni />
                <Video />
                <Profil />
                <Tri />
                <Visimisi />
                <Berita />
                <Partai />
            </div>
            <Footer />
        </main>
    )
}

export default Home
