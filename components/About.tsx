import parser from "html-react-parser";

const About = ({ data }: any) => {
  return (
    <section>
      <div className="">
        <h2></h2>
      </div>
      <div className="">{parser(data.textFirst)}</div>
      <div className="">{parser(data.textSecond)}</div>
      <div className="">
        {data.technologies && (
          <div className="">
            {data.technologies.map((tech: any, index: number) => (
              <div key={index}>{tech.text}</div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
