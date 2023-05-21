import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AlbumList from "../components/Album/AlbumList/AlbumList";
import Photos from "../components/Photos/Photos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/album/:userId",
    element: <AlbumList />,
  },
  { path: "/album/:userId/photos/:albumId", element: <Photos /> },
]);

export default router;
