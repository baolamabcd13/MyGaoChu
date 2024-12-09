import GiaVi from "@/app/components/Products/GiaVi/GiaVi";
import Navigation from "@/app/components/Products/Navigation";
import ProductsNav from "@/app/components/Products/ProductsNav";
import Footer from "@/app/layouts/Footer";
import Header from "@/app/layouts/Header";

export default function GiaViPage() {
  return (
    <>
      <Header />
      <Navigation />
      <ProductsNav />
      <GiaVi />
      <Footer />
    </>
  );
}
