import { Fragment } from "react";
import { useParams } from "react-router-dom";
import useAlbum from "../../../hooks/useAlbum";
import AlbumItem from "./AlbumItem/AlbumItem";
import usePost from "../../../hooks/usePost";
import "./AlbumList.scss";

function AlbumList() {
  const { posts } = usePost();
  const { albums } = useAlbum();
  const { userId } = useParams();

  return (
    <Fragment>
      <p>Album list user №{userId}:</p>
      <ul className="album">
        {albums
          .filter((el) => el.userId === +userId || el.userId === posts.id)
          .map((album, index) => (
            <AlbumItem album={album} key={album.id} index={index} />
          ))}
      </ul>
    </Fragment>
  );
}

export default AlbumList;
