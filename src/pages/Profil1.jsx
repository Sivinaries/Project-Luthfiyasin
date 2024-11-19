import Footer from '../components/Footer'
import Bio1 from '../components/Profil/Bio1'
import Partai from '../components/Home/Partai'

function Profil1() {
  return (
    <main className='flex flex-col'>
      <div className='w-full mx-auto'>
      <Bio1 />
        <Partai />
      </div>
      <Footer />
    </main>
  )
}

export default Profil1;
