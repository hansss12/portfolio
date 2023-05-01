import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Navbar from '../component/Navbar'
import ProfileDetail from '../component/ProfileDetail'

function Home() {
  return (
    <>
      <Navbar />
      <Hero type="home"/>
      <ProfileDetail />
      <Footer/>
    </>
  )
}

export default Home
