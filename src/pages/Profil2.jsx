import Footer from '../components/Footer'
import Bio2 from '../components/Profil/Bio2'
import Partai from '../components/Home/Partai'

function Profil2() {
  return (
    <main className='flex flex-col'>
      <div className='w-full mx-auto'>
        <Bio2 />
        <Partai />
      </div>
      <Footer />
    </main>
  )
}

export default Profil2
