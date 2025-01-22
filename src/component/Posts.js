import React from "react";
import PostCard from "./PostCard";

const Posts = ({ posts }) => {
  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div style={{ display: "grid", gap: "20px" }}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
