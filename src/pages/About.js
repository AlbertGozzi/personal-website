import * as React from "react";
import MainSection from "../components/MainSection";

const About = () => {
  return (
    <MainSection title={"About"}>
      <p>👋. I'm Albert.</p>
      <p>
        Originally from{" "}
        <a class="text-[#3074d9]" href="https://goo.gl/maps/jA1pjW6Q9dD6RNE28">
          Buenos Aires, Argentina
        </a>
        , I'm currently based in NYC. I've also lived in the Bay Area, Miami,
        Chile and Colombia.
      </p>
      <p>
        I cofounded and am the CEO of{" "}
        <a class="text-[#3074d9]" href="https://getaleph.com/">
          Aleph
        </a>
        , a company backed by{" "}
        <a
          class="text-[#3074d9]"
          href="https://www.ycombinator.com/companies/aleph"
        >
          YC
        </a>{" "}
        and other top-tier investors which we haven't announced yet. Before, I
        was COO at{" "}
        <a class="text-[#3074d9]" href="https://openzeppelin.com/">
          OpenZeppelin
        </a>{" "}
        and a management consultant at{" "}
        <a class="text-[#3074d9]" href="https://www.bain.com/">
          Bain
        </a>
        .
      </p>
      <p>
        I studied Industrial Engineering at{" "}
        <a
          class="text-[#3074d9]"
          href="https://www.itba.edu.ar/institutional/?lang=en"
        >
          Instituto Tecnológico de Buenos Aires
        </a>{" "}
        and did an MBA at the{" "}
        <a class="text-[#3074d9]" href="https://www.gsb.stanford.edu/">
          Stanford Graduate School of Business
        </a>
        .
      </p>
    </MainSection>
  );
};

export default About;
