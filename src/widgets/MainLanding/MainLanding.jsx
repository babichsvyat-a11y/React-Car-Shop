import ContactSection from "@/widgets/MainLanding/sections/ContactSection";
import InfoSection from "@/widgets/MainLanding/sections/InfoSection";
import PosterSection from "@/widgets/MainLanding/sections/PosterSection";
import TopSection from "@/widgets/MainLanding/sections/TopSection";

const MainLanding = () => {
  return (
    <main>
      <PosterSection />
      <TopSection />
      <InfoSection />
      <ContactSection />
    </main>
  );
};

export default MainLanding;
