import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserItem.scss";

const UserItem = ({ post, index }) => {
  const [showAlbum, setShowAlbum] = useState(false);

  const handleClick = () => {
    setShowAlbum(!showAlbum);
  };
  return (
    <div className="post__item">
      <div className="post__container">
        <div className="post__content">
          <p className="post__number">{index + 1}.</p>

          <h4 className="post__title">{post.name}</h4>
        </div>
        <Link
          to={`/album/${post.id}`}
          className="post__button"
          onClick={handleClick}
        >
          {!showAlbum ? "Show Album" : "Hide Album"}
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
