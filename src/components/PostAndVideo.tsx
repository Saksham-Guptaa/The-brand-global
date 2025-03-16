import React, { FC } from "react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

interface TopPost {
  image: string;
  title: string;
}

interface LatestVideo {
  url: string;
}

interface Profile {
  image: string;
  name: string;
  followers: string;
}

interface XPosts {
  handle: string;
  posts: string[];
}

interface PostProps {
  topPost: TopPost;
  latestVideo: LatestVideo;
  profile: Profile;
  xPosts: XPosts;
}

const Post: FC<PostProps> = ({ topPost, latestVideo, profile, xPosts }) => {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 sm:px-8 md:px-16 lg:px-64 lg:grid-cols-2">
      {/* Top Post Section */}
      <div className="relative w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] overflow-hidden rounded-lg shadow-lg">
        <img
          src={topPost.image}
          alt={topPost.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <div className="flex space-x-3">
            <button className="bg-green-500 p-3 rounded-full">
              <FaWhatsapp className="text-white text-xl" />
            </button>
            <button className="bg-blue-500 p-3 rounded-full">
              <FaTelegramPlane className="text-white text-xl" />
            </button>
          </div>
          <h3 className="text-white font-semibold text-xl sm:text-2xl lg:text-3xl">
            {topPost.title}
          </h3>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col space-y-6">
        {/* Latest Video Section */}
        <div className="rounded-lg overflow-hidden shadow-md h-48 sm:h-56 md:h-64 lg:h-80">
          <iframe
            width="100%"
            src={latestVideo.url}
            title="Latest Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Profile and Posts Section */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          {/* Profile Section */}
          <div className="flex items-center space-x-4 p-4 rounded-lg shadow-lg bg-white w-full md:w-1/2">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-12 h-12 rounded-full object-cover"
              width={48}
              height={48}
            />
            <div className="flex-1">
              <h4 className="font-semibold text-sm sm:text-base">
                {profile.name}
              </h4>
              <span className="text-xs sm:text-sm text-gray-600">
                {profile.followers} followers
              </span>
            </div>
            <button className="px-3 py-1 text-xs sm:text-sm text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
              View Profile
            </button>
          </div>

          {/* X Posts Section */}
          <div className="p-4 rounded-lg shadow-lg bg-white w-full md:w-1/2">
            <h4 className="font-semibold text-sm sm:text-base">
              Posts from {xPosts.handle}
            </h4>
            <div className="space-y-2 mt-2">
              {xPosts.posts.length > 0 ? (
                xPosts.posts.map((post, index) => (
                  <div key={index} className="text-gray-600 text-xs sm:text-sm">
                    {post}
                  </div>
                ))
              ) : (
                <div className="text-gray-500 text-xs sm:text-sm">
                  When they post, their posts will show up here.
                </div>
              )}
            </div>
            <button className="mt-4 px-3 py-1 text-xs sm:text-sm text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
              View on X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostAndVideo: FC = () => {
  const topPost: TopPost = {
    image:
      "https://images.unsplash.com/photo-1590880795696-20c7dfadacde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Shattering Stereotype to Reach the Zenith of Success: Sonal Jindal",
  };

  const latestVideo: LatestVideo = {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  };

  const profile: Profile = {
    image:
      "https://images.unsplash.com/photo-1590880795696-20c7dfadacde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "The Brand Global",
    followers: "1,253",
  };

  const xPosts: XPosts = {
    handle: "@TheBrandGlobal_",
    posts: [
      "Excited to announce our latest partnership with Global Innovators!",
      "Exploring investment opportunities in Dubai. Stay tuned!",
    ],
  };

  return (
    <div className="p-4 sm:p-8">
      <Post
        topPost={topPost}
        latestVideo={latestVideo}
        profile={profile}
        xPosts={xPosts}
      />
    </div>
  );
};

export default PostAndVideo;
