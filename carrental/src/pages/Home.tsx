import Navbar from "../components/Navbar"
import Container from "../components/Container"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Benefits from "../components/Benefits"
import { benefitOne } from "../utils/data"
const Home = () => {
  return (
    <div>
        <Navbar />
      <Container className="bg-gradient-to-b from-black via-gray-900 to-black text-black flex flex-col gap-6 width-100%">
        <Hero/>
        <Benefits data={benefitOne} /> 
      </Container>
        <Footer />
    </div>
  )
}

export default Home