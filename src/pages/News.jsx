import Footer from '../components/Footer'
import Innews from '../components/News/Innews'
import Partai from '../components/Home/Partai'

function News() {
  return (
    <main className='flex flex-col'>
      <div className='w-full mx-auto'>
        <Innews />
        <Partai />
      </div>
      <Footer />
    </main>
  )
}

export default News
