import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useAlbum() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/`)
      .then((response) => {
        setAlbums(response.data);
      });
  }, []);

  return { albums, setAlbums };
}

export default useAlbum;
