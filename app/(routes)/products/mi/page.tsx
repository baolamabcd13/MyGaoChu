import Mi from "@/app/components/Products/Mi/Mi";
import ProductsNav from "@/app/components/Products/ProductsNav";
import Footer from "@/app/layouts/Footer";
import Header from "@/app/layouts/Header";

export default function MiPage() {
  return (
    <>
      <Header />
      <ProductsNav />
      <Mi />
      <Footer />
    </>
  );
}
