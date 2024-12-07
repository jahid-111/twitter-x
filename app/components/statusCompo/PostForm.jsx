"use client";

import { useState } from "react";

const PostForm = ({ userId }) => {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setButtonEnabled(e.target.value.trim() !== "");
  };

  //   const handlePostTweet = async (e) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     setError(null);

  //     const form = e.currentTarget;
  //     const { content } = Object.fromEntries(new FormData(form));
  //     const sanitizedUserId = userId.replace(/['"]+/g, "");

  //     try {
  //       const response = await postTweetData(sanitizedUserId, content);
  //       console.log("Tweet posted:", response);
  //       form.reset();
  //       setButtonEnabled(false);
  //     } catch (err) {
  //       console.error("Error posting tweet:", err);
  //       setError("Failed to post your tweet. Please try again.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <form className="w-11/12">
      {/* Content Section */}
      <div>
        <input
          type="text"
          name="content"
          id="content"
          autoComplete="off"
          onChange={handleInputChange}
          className="w-full text-[1.2rem] text-gray-200 font-medium bg-transparent placeholder:text-gray-400 outline-none"
          placeholder="What's Happening?!"
          aria-label="Post Content"
        />

        <div className="w-full py-3 border-b border-gray-600">
          <button
            type="button"
            className="text-[#1DA1F2] hover:bg-slate-800 font-semibold px-2 text-[0.9rem] rounded-full"
            aria-label="Set Reply Permission"
          >
            Everyone Can Reply
          </button>
        </div>
      </div>

      {/* POST TWEET Button */}
      <div className="flex flex-col items-center w-2/12 mt-2">
        {error && (
          <span className="text-red-500 text-sm mb-2" role="alert">
            {error}
          </span>
        )}
        <button
          disabled={!buttonEnabled || loading}
          type="submit"
          className={`bg-blue-600 px-4 py-1 rounded-full ${
            !buttonEnabled || loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Post Tweet"
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
