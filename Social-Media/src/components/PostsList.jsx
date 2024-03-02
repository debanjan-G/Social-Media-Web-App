// PostsList.jsx

import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList } from "../store/post-list-store";
import EmptyMessage from "./EmptyMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostsList = () => {
  const postListContext = useContext(PostList);
  const [fetching, setFetching] = useState(false); //Loading State

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((res) => {
        const postsArray = res.posts.slice(0, 5);
        postListContext.addServerPosts(postsArray);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up...");
      controller.abort();
    };
  }, []);

  return (
    <div>
      {fetching && <LoadingSpinner />}
      {!fetching && postListContext.postList.length === 0 && <EmptyMessage />}
      {!fetching &&
        postListContext.postList.map((post) => (
          <Post postDetails={post}  key={post.id} />
        ))}
    </div>
  );
};

export default PostsList;
