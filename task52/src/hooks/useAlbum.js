import axios from "axios";
import { useEffect, useState } from "react";

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
