import React from "react";
import portfolioWebsite from "../../assets/img/portfolioWebsite.png";
import staticWebsite from "../../assets/img/staticWebsite.png";
import seo from "../../assets/img/seo.png";
import landingPage from "../../assets/img/landingPage.png";
import psd2html from "../../assets/img/psd2html.png";

const Services = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-36 pb-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Freelancing Services I Provide
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              "Knowledge, is of no value unless you put it into practice."
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative border border-red-900 bg-white rounded-md">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 hover:opacity-100 transition-all z-30 rounded-md "
                  src={portfolioWebsite}
                />
                <div className="px-8 py-10 relative z-10 w-full">
                  <h1 className="title-font text-lg font-medium text-red-700 mb-3">
                    Landing Pages
                  </h1>
                  <p className="leading-relaxed">
                    I deliver landing pages, that are precise, easy to the eyes,
                    user friendly, responsive and pixel-perfect.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative border border-red-900 bg-white rounded-md">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 hover:opacity-100 transition-all z-30 hover:border-red-900 bg-white rounded-md"
                  src={staticWebsite}
                />
                <div className="px-8 py-10 relative z-10 w-full">
                  <h1 className="title-font text-lg font-medium text-red-700 mb-3">
                    Static Websites
                  </h1>
                  <p className="leading-relaxed">
                    Static Websites are the one which are made using HTML/ CSS,
                    JavaScript, Bootstrap etc..
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative border border-red-900 bg-white rounded-md">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 hover:opacity-100 transition-all z-30 hover:border-red-900 bg-white rounded-md"
                  src={psd2html}
                />
                <div className="px-8 py-10 relative z-10 w-full">
                  <h1 className="title-font text-lg font-medium text-red-700 mb-3">
                    PSD/ Figma/ XD to HTML
                  </h1>
                  <p className="leading-relaxed">
                    I can convert PSD, Figma or XD file to HTML, ReactJs, etc.
                    It'll be as per the design and delivery will be fast as
                    well.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative border border-red-900 bg-white rounded-md">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 hover:opacity-100 transition-all z-30 hover:border-red-900 bg-white rounded-md"
                  src={landingPage}
                />
                <div className="px-8 py-10 relative z-10 w-full">
                  <h1 className="title-font text-lg font-medium text-red-700 mb-3">
                    Debugging
                  </h1>
                  <p className="leading-relaxed">
                    I can debug frontend of any website, add some styles, add
                    responsivess or transitions in the website.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative border border-red-900 bg-white rounded-md">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 hover:opacity-100 transition-all z-30 hover:border-red-900 bg-white rounded-md"
                  src={seo}
                />
                <div className="px-8 py-10 relative z-10 w-full">
                  <h1 className="title-font text-lg font-medium text-red-700 mb-3">
                    SEO
                  </h1>
                  <p className="leading-relaxed">
                    I can rank your website on Google and can add some backlinks
                    or tags that can reach to maximum users.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative border border-red-900 bg-white rounded-md">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 hover:opacity-100 transition-all z-30 hover:border-red-900 bg-white rounded-md"
                  src={portfolioWebsite}
                />
                <div className="px-8 py-10 relative z-10 w-full">
                  <h1 className="title-font text-lg font-medium text-red-700 mb-3">
                    Portfolio Websites
                  </h1>
                  <p className="leading-relaxed">
                    Now-a-days, having a portfolio is must, it can showcase your
                    skills, projects, experience, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
