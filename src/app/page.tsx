import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Featuring from "./components/Featuring";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Featuring/>
    </div>
    );
}
