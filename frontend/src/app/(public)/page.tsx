import ContactSection from "@/components/ContactSection";
import InfoSection from "@/components/InfoSection";
import PosterSection from "@/components/PosterSection";
import TopSection from "@/components/TopSection";

export default function Home() {
  return (
    <div className="dark:bg-primary-background bg-light-simp-bg">
      <PosterSection />
      <TopSection />
      <InfoSection />
      <ContactSection />
    </div>
  );
}
