import ContactInfo from "@/app/components/Contact/ContactInfo/ContactInfo";
import Footer from "@/app/layouts/Footer";
import Header from "@/app/layouts/Header";

export default function Page() {
  return (
    <div className="bg-white">
      <Header />
      <ContactInfo />
    </div>
  );
}
