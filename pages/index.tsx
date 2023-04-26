import About from "@/components/About/About";
import Community from "@/components/Community/Community";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import GetStarted from "@/components/GetStarted/GetStarted";
import Hero from "@/components/Hero/Hero";
import Information from "@/components/Information/Information";
import Marketing from "@/components/Marketing/Marketing";
import Preview from "@/components/Preview/Preview";
import Section from "@/components/Section/Section";
import Tokenomics from "@/components/Tokenomics/Tokenomics";
import Utilities from "@/components/Utilities/Utilities";

export default function Home() {
  return (
    <>
      <Hero />
      <Section color="secondary" id="about">
        <About />
      </Section>
      <Section>
        <Preview />
      </Section>

      <Section color="secondary" id="tokenomics">
        <Tokenomics />
        <Utilities />
      </Section>
      <Section id="community">
        <Community />
      </Section>

      <Section color="secondary">
        <Marketing />
        <GetStarted />
        <Contact />
      </Section>
      <Section>
        <Information />
      </Section>
      <Footer />
    </>
  );
}
