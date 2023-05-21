import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function usePost() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        setPosts(response.data);
        setIsLoading(false);
      });
  }, []);

  return { posts, setPosts, isLoading, setIsLoading };
}

export default usePost;
