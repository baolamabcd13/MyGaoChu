import Promotions from "@/app/components/News/Promotions/Promotions";
import PromotionsNav from "@/app/components/News/PromotionsNav";
import Footer from "@/app/layouts/Footer";

export default function PromotionsPage() {
  return (
    <div className="bg-white">
      <PromotionsNav />
      <Promotions />
      <Footer />
    </div>
  );
}
