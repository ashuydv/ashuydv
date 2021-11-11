import React from "react";
import profile from "../../assets/img/profile.png";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-40 pb-20 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={profile}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              Hey, thanks for checking me out. So, I'm Ashutosh Yadav , a tech
              enthusiast, a web developer and a blogger. I love working on web
              development projects day and night, I'm always ready to contribute
              on some of the projects related to developmment, also will love to
              make websites for some orgnisations, as a freelancer, I'm always
              looking for knowledge.
            </p>
            <div className="flex justify-center items-center">
              <a href="https://www.linkedin.com/in/ashutoshyadav3465/">
                <button className="inline-flex text-white bg-gradient-to-br from-red-600 to-red-900 border-0 py-3 px-5 mx-4 focus:outline-none shadow-xl rounded-full text-base">
                  <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                </button>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100039132562954">
                <button className="inline-flex text-white bg-gradient-to-br from-red-600 to-red-900 border-0 py-3 px-5 mr-4 focus:outline-none shadow-xl rounded-full text-base">
                  <i class="fab fa-facebook-f"></i>
                </button>
              </a>
              <a href="https://twitter.com/ashu_ydv18">
                <button className="inline-flex text-white bg-gradient-to-br from-red-600 to-red-900 border-0 py-3 px-5 mr-4 focus:outline-none shadow-xl rounded-full text-base">
                  <i class="fab fa-twitter" aria-hidden="true"></i>
                </button>
              </a>
              <a href="https://www.instagram.com/ashu_ydv18/">
                <button className="inline-flex text-white bg-gradient-to-br from-red-600 to-red-900 border-0 py-3 px-5 mr-0 focus:outline-none shadow-xl rounded-full text-base">
                  <i class="fab fa-instagram" aria-hidden="true"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              What Things I explore ?
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              "Life is an experiment in which you may fail or succeed. <br />{" "}
              Explore More, Expect Least ! "
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:border-red-900 transition-all">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-900 text-white mb-4">
                  <i class="fas fa-book text-base font-normal"></i>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Exploring Books
                </h2>
                <p className="leading-relaxed text-base">
                  Love reading books, specially big fan of Chetan Bhagat and
                  also I explore books on the topic, that interests me
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:border-red-900 transition-all">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-900 text-white mb-4">
                  <i class="far fa-music" aria-hidden="true"></i>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Listening Music and Podcasts
                </h2>
                <p className="leading-relaxed text-base">
                  I'm big fan of podcasts, I love listening about Crypto, Stock,
                  Spirituality, etc. and talking about music, I love every kind
                  of it.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:border-red-900 transition-all">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-900 text-white mb-4">
                <i class="far fa-crop-alt"></i>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  New Technologies - Blockchain
                </h2>
                <p className="leading-relaxed text-base">
                  Blockchain, is a vast ocean and I'm just exploring it surface,
                  have to explore it more and more deep.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:border-red-900 transition-all">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-900 text-white mb-4">
                <i class="far fa-shapes"></i>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Startup Stories
                </h2>
                <p className="leading-relaxed text-base">
                  Doing a startup or learning about thier journey, specially
                  about thier failures and how they overcamed it, fascinates me
                  a lot.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:border-red-900 transition-all">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-900 text-white mb-4">
                <i class="far fa-graduation-cap"></i>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Failing and Learning Everyday
                </h2>
                <p className="leading-relaxed text-base">
                  I love to get failed daily, why ? Coz, it just helps me widen
                  my thoughts, and know about different perspectives
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:border-red-900 transition-all">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-900 text-white mb-4">
                <i class="far fa-praying-hands"></i>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Meditation{" "}
                </h2>
                <p className="leading-relaxed text-base">
                  Meditation, helps me to know more about me, I also do
                  sometimes Suryanamaskars, but I'm just struggling to be
                  consistent.
                </p>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-gradient-to-br from-red-600 to-red-900 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg shadow">
            Will be adding more , as soon as I start exploring them
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
