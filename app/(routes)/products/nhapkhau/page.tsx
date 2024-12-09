import Navigation from "@/app/components/Products/Navigation";
import NhapKhau from "@/app/components/Products/NhapKhau/NhapKhau";
import ProductsNav from "@/app/components/Products/ProductsNav";
import Footer from "@/app/layouts/Footer";
import Header from "@/app/layouts/Header";

export default function NhapKhauPage() {
  return (
    <>
      <Header />
      <Navigation />
      <ProductsNav />
      <NhapKhau />
      <Footer />
    </>
  );
}
