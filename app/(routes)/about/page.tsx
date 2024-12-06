import AboutNav from "@/app/components/About/AboutNav";
import Introduction from "@/app/components/About/Introduction/Introduction";
import Header from "@/app/layouts/Header";
import Footer from "@/app/layouts/Footer";

export default function About() {
  return (
    <>
      <Header />
      <AboutNav />
      <Introduction />
      <Footer />
    </>
  );
}
