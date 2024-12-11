import News from "@/app/components/News/News/News";
import PromotionsNav from "@/app/components/News/PromotionsNav";
import Footer from "@/app/layouts/Footer";

export default function NewsEventsPage() {
  return (
    <div className="bg-white">
      <PromotionsNav />
      <News />
      <Footer />
    </div>
  );
}
