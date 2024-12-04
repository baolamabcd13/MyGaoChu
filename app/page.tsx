import Hero from "@/app/layouts/Hero";
import Products from "@/app/components/LandingPage/Products/Products";
import Footer from "@/app/layouts/Footer";
import Media from "@/app/components/LandingPage/Media/Media";
import Dishes from "@/app/components/LandingPage/Dishes/Dishes";
import MainLayout from "@/app/layouts/MainLayout/MainLayout";
import Gallery from "@/app/components/LandingPage/Gallery/Gallery";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Products />
      <Media />
      <Dishes />
      <Gallery />
      <Footer />
    </MainLayout>
  );
}
