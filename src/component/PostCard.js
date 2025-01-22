import React from "react";

const PostCard = ({ post }) => {
  const { title, body } = post;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
        background: "#f9f9f9",
      }}
    >
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
