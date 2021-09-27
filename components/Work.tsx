import Link from "next/link";
import Image from "next/image";

const Work = ({ data }: any) => {
  return (
    <section>
      <div className="title">
        <h2>{data.title}</h2>
      </div>
      {data.projects && (
        <div className="projects">
          {data.projects.map((project: any, index: number) => (
            <div className="" key={index}>
              <div className="">
                <h3 className="">{project.title}</h3>
                {project.technologies && (
                  <p className="">
                    {project.technologies.map(
                      (tech: any, index: number, tab: Array<any>) => (
                        <span key={index}>
                          {tech.text}
                          {tab.length !== index + 1 ? (
                            <>&nbsp;&#x000B7;&nbsp;</>
                          ) : null}
                        </span>
                      )
                    )}
                  </p>
                )}
                <p className="">{project.text}</p>
                {project.links && (
                  <div className="">
                    {project.links.map(
                      (link: any, index: number, tab: Array<any>) => (
                        <Link href={link.url || ""} key={index} passHref>
                          <a>{link.text}</a>
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
              <div className="">
                <Image src={project.image} width="1920" height="1020" />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="projects">
        <div className=""></div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Work;
