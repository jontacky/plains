import { CallToActionVideo } from "../components/emerald-plains/CallToActionVideo";
import { Contact } from "../components/emerald-plains/Contact";
import { FarmGallery } from "../components/emerald-plains/FarmGallery";
import { Footer } from "../components/emerald-plains/Footer";
import { Header } from "../components/emerald-plains/Header";
import { Hero } from "../components/emerald-plains/Hero";
import { Introduction } from "../components/emerald-plains/Introduction";
import { PopularFoods } from "../components/emerald-plains/PopularFoods";
import { Projects } from "../components/emerald-plains/Projects";
import { QualityProducts } from "../components/emerald-plains/QualityProducts";

const Index = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <FarmGallery />
        <PopularFoods />
        <QualityProducts />
        <CallToActionVideo />
        <Projects />
        {/* <Testimonials /> */}
        {/* <News /> */}
        <Contact />
        {/* <LeaderBanner /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
