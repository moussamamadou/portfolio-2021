import React from "react";

const Hero = ({ data }: any) => {
  return (
    <section>
      <h1>{data.textFirst}</h1>
      <h1>{data.textSecond}</h1>
      <h1>{data.textThird}</h1>
      <h1>{data.textFourth}</h1>
    </section>
  );
};

export default Hero;
