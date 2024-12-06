import GiaVi from "@/app/components/Products/GiaVi/GiaVi";
import ProductsNav from "@/app/components/Products/ProductsNav";
import Footer from "@/app/layouts/Footer";
import Header from "@/app/layouts/Header";

export default function GiaViPage() {
  return (
    <>
      <Header />
      <ProductsNav />
      <GiaVi />
      <Footer />
    </>
  );
}
