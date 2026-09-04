import ContactSection from "@/widgets/MainLanding/sections/ContactSection";
import InfoSection from "@/widgets/MainLanding/sections/InfoSection";
import PosterSection from "@/widgets/MainLanding/sections/PosterSection";
import TopSection from "@/widgets/MainLanding/sections/TopSection";

const MainLanding = () => {
  return (
    <main className="dark:bg-primary-background bg-light-simp-bg">
      <PosterSection />
      <TopSection />
      <InfoSection />
      <ContactSection />
    </main>
  );
};

export default MainLanding;
