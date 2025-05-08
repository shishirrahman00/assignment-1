import Brand from "./components/Brand-section/Brand";
import HeroSection from "./components/Hero-Section/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service-section/Service";
import Trial from "./components/Trial";

import Footer from "./components/Footer-section/Footer";
import Faq from "./components/Service-section/Faq";
import Testimonial from "./components/Testimonal";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Brand />
      <Service />
      {/* <Pricing /> */}
      <Testimonial />

      <Faq />
      <Trial />
      <Footer />
    </div>
  );
}
