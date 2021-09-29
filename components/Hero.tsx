import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 1rem, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const Hero = ({ data }: any) => {
  return (
    <section
      data-scroll-section
      className=" relative mt-4 min-h-[80vh] w-full flex flex-col justify-center"
    >
      <Reveal keyframes={customAnimation} cascade delay={0.5} damping={0.2}>
        <h1
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="-1"
          data-scroll-class="appear"
          className="px-0 xl:px-20 py-4 w-full font-bold"
          id="hero"
        >
          {data.textFirst}
        </h1>
        <h1
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="-1"
          data-scroll-class="appear"
          className="px-0 xl:px-20 py-4 w-full  tracking-wider"
          id="hero"
        >
          {data.textSecond}
        </h1>
      </Reveal>
    </section>
  );
};

export default Hero;
