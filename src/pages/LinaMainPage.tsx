import LinaAbout from "../widgets/LinaAbout";
import FunctionsSection from "../widgets/FunctionsSection";
import ContactBlock from "../widgets/ContactsSection"
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";
import DownloadSection from "../widgets/DownloadSection";
import ArrowUp from "../widgets/ArrowUp";
import TechnologiesBlock from "../widgets/Technologies";
import LatestUpdates from "../widgets/Updates";


export default function LinaMainPage() {
  return (
    <div
      className="bg-pink-50 min-h-screen"
      style={{ scrollBehavior: "smooth" }}
    >
      <Header />
      <main className="flex flex-col items-center p-6 space-y-16 bg-pink-50" role="main">
        <section id="about" className="w-full space-y-10" aria-labelledby="about-heading">
          <LinaAbout/>
        </section>
        
        <section id="features" className="w-full place-items-center space-y-10" aria-labelledby="features-heading">
          <FunctionsSection />
        </section>  
        
        <section id="contacts" className="w-full space-y-10" aria-labelledby="contacts-heading">
          <ContactBlock />
        </section>
        
        <section id="technologies" className="w-full space-y-10" aria-labelledby="technologies-heading">
          <TechnologiesBlock />
        </section>
        
        <section id="download" className="w-full space-y-10" aria-labelledby="download-heading">
          <DownloadSection />
        </section>
        
        <section id="updates" className="w-full space-y-16" aria-labelledby="updates-heading">
          <LatestUpdates />
        </section>
        
        <ArrowUp />
      </main>
      <Footer />
    </div>
  )
}