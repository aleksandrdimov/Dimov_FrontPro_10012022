import { useState } from "react";
import { Link } from "react-router-dom";

const AlbumItem = ({ album, index }) => {
  const [showPhoto, setShowPhoto] = useState(false);

  const handleClickPhoto = () => {
    setShowPhoto(!showPhoto);
  };

  return (
    <li className="album__item">
      <h6>{album.title}</h6>
      <Link
        to={`photos/${index + 1}`}
        className="album__button"
        onClick={handleClickPhoto}
      >
        {!showPhoto ? "Show Photos" : "Hide Photos"}
      </Link>
    </li>
  );
};

export default AlbumItem;
