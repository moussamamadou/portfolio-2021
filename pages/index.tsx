import Seo from "../components/Seo";
import Nav from "../components/Nav";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Footer from "../components/Footer";
import data from "../frontaid/data.json";
import dynamic from "next/dynamic";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home({ data }: any): JSX.Element {
  const containerRef = useRef(null);
  return (
    <div>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
          multiplier: 0.6,
          lerp: 0.06,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef}>
          <Seo data={data.seo} />
          <header className="container">
            <Nav data={data.nav} />
          </header>
          <main className="container">
            <Hero data={data.hero} />
            <Work data={data.work} />
            <About data={data.about} />
            <Contact data={data.contact} />
          </main>
          <footer className="container">
            <Footer />
          </footer>
        </div>
      </LocomotiveScrollProvider>
      <AnimatedCursor
        innerSize={15}
        outerSize={40}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={1.5}
        trailingSpeed={7}
      />
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      data: data[locale],
    },
  };
}
