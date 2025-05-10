import Benefits from "@/components/landing-page/benefits";
import Features from "@/components/landing-page/features";
import WhyUs from "@/components/landing-page/why-us";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Benefits />
      <WhyUs />
      <Features />
    </main>
  );
}
