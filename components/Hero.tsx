import parser from "html-react-parser";
import { gsap } from "gsap";
import SplitText from "../utils/Split3.min";
import { useEffect, useRef } from "react";

const Hero = ({ data }: any) => {
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window !== undefined) {
      var split = new SplitText(ref.current, {
        type: "words",
      });
      gsap.from(split.words, {
        duration: 1.2,
        delay: 0.1,
        y: "3rem",
        opacity: 0,
        stagger: 0.01,
        ease: "power3",
      });
    }
  }, []);
  return (
    <section
      data-scroll-section
      className=" relative mt-4 min-h-[80vh] w-full flex flex-col justify-center"
    >
      <h1
        ref={ref}
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="-1"
        data-scroll-class="appear"
        className="px-0 xl:px-20 w-full"
        id="hero"
      >
        {parser(data.text)}
      </h1>
    </section>
  );
};

export default Hero;
