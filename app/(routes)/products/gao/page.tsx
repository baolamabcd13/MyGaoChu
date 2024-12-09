import Gao from "@/app/components/Products/Gao/Gao";
import Navigation from "@/app/components/Products/Navigation";
import ProductsNav from "@/app/components/Products/ProductsNav";
import Footer from "@/app/layouts/Footer";
import Header from "@/app/layouts/Header";

export default function GaoPage() {
  return (
    <>
      <Header />
      <Navigation />
      <ProductsNav />
      <Gao />
      <Footer />
    </>
  );
}
