import parse from "html-react-parser";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
const Contact = ({ data }: any) => {
  return (
    <section data-scroll-section className="relative" id="contact">
      <Fade>
        <h2
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="0.5"
          data-scroll-class="appear"
          className="lg:text-right lg:mr-32 lg:mb-20 "
        >
          {data.title}
        </h2>
      </Fade>
      <Fade>
        <div
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="-1"
          data-scroll-class="appear"
          className="text-2xl lg:w-2/3 ml-auto lg:mr-32 mb-16 mt-16"
        >
          {parse(data.text)}
        </div>
      </Fade>
      <Fade>
        <div
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="-0.5"
          data-scroll-class="appear"
          className=" text-center"
        >
          <Link href={`mailto:${data.mail}`}>
            <a className="magic-btn mail font-bold tracking-wider text-sm md:text-base lg:text-lg">
              email&nbsp;:&nbsp;{data.mail}
            </a>
          </Link>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;
