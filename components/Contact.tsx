import parse from "html-react-parser";

const Contact = ({ data }: any) => {
  return (
    <section>
      <h2>{data.title}</h2>
      <div className="">{parse(data.text)}</div>
      <div className="">{data.mail}</div>
    </section>
  );
};

export default Contact;
