import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Animate from "@/components/Animate/Animate";
import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white text-neutral-900 divide-y divide-neutral-200">
      <Navbar />
      <Hero />
      <Features />
      <Banner />
      <Animate />
      <Footer />
    </main>
  );
}
