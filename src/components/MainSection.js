import * as React from "react";

const MainSection = (props) => {
  return (
    <>
      <span class="text-lg font-bold block pb-8">{props.title}</span>
      <section class="space-y-6">{props.children}</section>
    </>
  );
};

export default MainSection;
