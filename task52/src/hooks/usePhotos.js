import axios from "axios";
import { useEffect, useState } from "react";

function usePhotos() {
  const [photos, setPhotos] = useState([]);
  const [isLoadingPhoto, setIsLoadingPhoto] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/`)
      .then((response) => {
        setPhotos(response.data);
        setIsLoadingPhoto(false);
      });
  }, []);

  return { photos, setPhotos, isLoadingPhoto };
}

export default usePhotos;
