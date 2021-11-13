import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Work = ({ data }: any) => {
  return (
    <section data-scroll-section id="work">
      <div>
        <Fade>
          <h2
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1.5"
            data-scroll-delay="0.5"
            className=" lg:mr-32 lg:text-right overflow-hidden"
            id="work-title"
          >
            {data.title}
          </h2>
        </Fade>
      </div>
      {data.projects && (
        <Fade>
          <div className="projects relative">
            {data.projects.map((project: any, index: number) => (
              <div
                className={`relative flex flex-col lg:flex-row lg:even:flex-row-reverse justify-center items-center lg:py-10 
              ${index % 2 == 0 ? "" : "lg:text-right"}`}
                key={index}
                data-scroll
                data-scroll-speed="1"
                data-scroll-direction="vertical"
              >
                <div
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed={`${index % 2 == 0 ? "-0.75" : "0.75"}`}
                  data-scroll-class="appear"
                  className="lg:w-1/2 z-10 lg:pt-7 peer-hover:bg-red-600 peer-hover:bg-red group overflow-visible"
                >
                  <Fade>
                    <h3 className="">{project.title}</h3>
                    <div
                      className={`my-5  transition-all ease-in-out duration-500  `}
                    >
                      <div
                        className={`my-5  transition-all ease-in-out duration-500 ${
                          index % 2 == 0
                            ? "lg:group-hover:translate-x-3"
                            : "lg:group-hover:-translate-x-3"
                        } `}
                      >
                        {project.technologies && (
                          <div className="font-bold text-xs mb-2">
                            {project.technologies.map(
                              (tech: any, index: number, tab: Array<any>) => (
                                <span key={index}>
                                  {tech.text}
                                  {tab.length !== index + 1 ? (
                                    <> &#x000B7; </>
                                  ) : null}
                                </span>
                              )
                            )}
                          </div>
                        )}
                        <div className="text-xs opacity-70">{project.text}</div>
                      </div>
                    </div>
                    {project.links && (
                      <div className="">
                        {project.links.map(
                          (link: any, indexLink: number, tab: Array<any>) => (
                            <Link
                              href={link.url || ""}
                              key={indexLink}
                              passHref
                            >
                              <a
                                className={`magic-btn font-bold  text-sm mt-2  ${
                                  index % 2 == 0
                                    ? "mr-5 lg:mr-5"
                                    : "mr-5 lg:mr-0 lg:ml-5"
                                } `}
                                target="_blank"
                              >
                                {link.text}
                              </a>
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </Fade>
                </div>
                <div
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="1"
                  data-scroll-class="appear"
                  className="lg:w-1/2 h-max z-0 relative peer"
                >
                  <Fade>
                    <div
                      className={`group relative h-full w-full overflow-hidden  mt-5 lg:mt-0 lg:w-[135%] ${
                        index % 2 == 0
                          ? "lg:ml-[-35%] lg:effect-left"
                          : "lg:effect-right"
                      }`}
                    >
                      <div
                        className={`${
                          index % 2 == 0
                            ? "lg:translate-x-3 lg:group-hover:translate-x-0 lg:transition-transform lg:ease-in-out lg:duration-500"
                            : "lg:-translate-x-3 lg:group-hover:translate-x-0 lg:transition-transform lg:ease-in-out lg:duration-500"
                        }`}
                      >
                        <Image src={project.image} width="1920" height="1020" />
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      )}
    </section>
  );
};

export default Work;
