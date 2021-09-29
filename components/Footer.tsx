import React from "react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <div data-scroll-section className="opacity-60">
      <Fade>
        <p
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="-0.25"
          data-scroll-class="appear"
          className="text-center opacity-60 mt-10 pb-10 border-t-2 py-4"
        >
          © 2021 Moussa Mamadou
        </p>
      </Fade>
    </div>
  );
};

export default Footer;
