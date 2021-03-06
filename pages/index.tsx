import Seo from "../components/Seo";
import Nav from "../components/Nav";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Footer from "../components/Footer";
import * as data from "../frontaid/data.json";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import SmoothCursor from "react-smooth-cursor";

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
          multiplier: 0.7,
          lerp: 0.1,
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
      <SmoothCursor
        // Required
        selectors={["antValidCssSelector01", "antValidCssSelector02"]}
        // Optionals
        fillColor="#fff"
        strokeColor="rgba(255,255,255,0.1)"
        strokeWidth={20}
        smoothness={0.2}
        circleRadius={40}
      />
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  let mydata: any;
  if (locale === "fr") {
    mydata = data.fr;
  } else {
    mydata = data.en;
  }
  return {
    props: {
      data: mydata,
    },
  };
}
