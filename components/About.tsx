import parser from "html-react-parser";
import { Fade } from "react-awesome-reveal";

const About = ({ data }: any) => {
  return (
    <section data-scroll-section id="about">
      <div>
        <Fade>
          <h2
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1"
            data-scroll-delay="0.8"
            data-scroll-class="appear"
            className="lg:ml-32 mb-20"
          >
            {data.title}
          </h2>
        </Fade>
      </div>
      <Fade>
        <div
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="1.2"
          data-scroll-delay="0.4"
          data-scroll-class="appear"
          className="lg:w-4/5 lg:ml-auto mb-10"
        >
          {parser(data.textFirst)}
        </div>
      </Fade>
      <Fade>
        <div
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="1"
          data-scroll-delay="0.3"
          data-scroll-class="appear"
          className="lg:w-4/5 lg:ml-auto"
        >
          {parser(data.textSecond)}
        </div>
      </Fade>
      <div
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="1.5"
        data-scroll-class="appear"
        className="lg:w-4/5 lg:ml-auto"
      >
        {data.technologies && (
          <Fade>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3">
              {data.technologies.map((tech: any, index: number) => (
                <div key={index} className="font-bold tracking-wider">
                  &#9656; {tech.text}
                </div>
              ))}
            </div>
          </Fade>
        )}
      </div>
    </section>
  );
};

export default About;
