import Image from "next/image";
import HeroSection from "./pages/Herosection";
import About from "./pages/about";
import Features from "./pages/features";
import Eligibility from "./pages/Eligibility";
import Participation from "./pages/Participation";
import Apply from "./pages/apply";
import Footer from "./pages/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden ">
       <HeroSection/>
        <About/>
        <Features/>
        <Eligibility/>
        <Participation/>
        <Apply/>
        <Footer/>
    </div>
  );
}
