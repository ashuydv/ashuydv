import React from "react";
import Medium from "./Medium";
import Dev from "./Dev";

const Blogs = () => {
  return (
    <div className=" py-16">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <Medium />
          <Dev />
        </div>
      </section>
    </div>
  );
};

export default Blogs;
