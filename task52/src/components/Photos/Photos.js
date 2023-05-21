import { useParams } from "react-router-dom";
import usePhotos from "../../hooks/usePhotos";
import "./Photos.scss";

const Photos = () => {
  const { albumId, userId } = useParams();
  const { photos, isLoadingPhoto } = usePhotos();

  if (isLoadingPhoto) return <div>Loading...</div>;

  return (
    <div className="photos">
      <p>
        User №{userId}. album №{albumId}, Photos:
      </p>
      {photos
        .filter((el) => el.albumId === +albumId)
        .map((photo) => (
          <img
            className="photos__img"
            src={photo.thumbnailUrl}
            key={photo.id}
            alt="album photo"
          />
        ))}
    </div>
  );
};

export default Photos;
