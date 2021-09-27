import Seo from "../components/Seo";
import Nav from "../components/Nav";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Footer from "../components/Footer";
import data from "../frontaid/data.json";

export default function Home({ data, locale }: any): JSX.Element {
  return (
    <>
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
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      data: data[locale],
      locale: locale,
    },
  };
}
