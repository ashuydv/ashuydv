import axios from "axios";
import React, { useState, useEffect } from "react";

const Medium = () => {
  const [data, setData] = useState({
    profile: {
      ptitle: "",
      name: "",
      avatar: "",
      profileUrl: "",
    },
    item: [],
    isLoading: true,
    error: null,
  });

  const mediumUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ashuydv18";

  useEffect(() => {
    axios.get(mediumUrl).then((data) => {
      //console.log(data.data);
      const avatar = data.data.feed.image;
      const profileLink = data.data.feed.link;
      const res = data.data.items;
      const posts = res.filter((item) => item.categories.length > 0);
      const title = data.data.feed.title;

      setData((pre) => ({
        profile: {
          ...pre.profile,
          ptitle: title,
          profileUrl: profileLink,
          avatar: avatar,
        },
        item: posts,
        isLoading: false,
      }));
    });
  }, [axios]);

  const renderBlogs = () => {
    if (data.item) {
      return data.item.map((post) => {
        return (
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center shadow-lg"
                src={post.thumbnail}
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {post.title}
                </h1>
                <div className="flex items-center flex-wrap ">
                  <a
                    className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0"
                    href={post.canonical_url}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className="flex flex-wrap -m-4">{renderBlogs()}</div>
    </div>
  );
};

export default Medium;
