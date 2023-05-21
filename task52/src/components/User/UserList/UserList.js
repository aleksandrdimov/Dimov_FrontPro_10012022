import React from "react";
import usePost from "../../../hooks/usePost";
import UserItem from "../UserItem/UserItem";

const UserList = () => {
  const { posts, isLoading } = usePost();

  if (isLoading) return <div>Loading...</div>;

  return posts.map((post, index) => (
    <UserItem key={post.id} post={post} index={index} />
  ));
};

export default UserList;
