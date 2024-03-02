/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addNewPost: () => {},
  addServerPosts: () => {},
  deletePost: () => {},
});

const ACTIONS = {
  ADD_POST: "addPost",
  ADD_SERVER_POSTS: "addServerPosts",
  DELETE_POST: "deletePost",
};

const reducerFn = (currentPostList, action) => {
  let updatedPostList = currentPostList;
  if (action.type === ACTIONS.ADD_POST) {
    updatedPostList = [action.payload, ...currentPostList];
  } else if (action.type === ACTIONS.ADD_SERVER_POSTS) {
    const uniqueServerPosts = action.payload.postsArray.filter(
      (serverPost) => !currentPostList.some((post) => post.id === serverPost.id)
    );
    updatedPostList = [...currentPostList, ...uniqueServerPosts];
  } else if (action.type === ACTIONS.DELETE_POST) {
    updatedPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id
    );
  }
  return updatedPostList;
};

const PostListContextProvider = (props) => {
  const [postList, dispatchPost] = useReducer(reducerFn, []);
  console.log(postList);

  const addNewPost = ({ title, content, tags, userID, id }) => {
    dispatchPost({
      type: ACTIONS.ADD_POST,
      payload: {
        title: title,
        body: content,
        tags: tags,
        reactions: Math.floor(Math.random() * 100) + 1,
        id: id,
        userId: userID,
      },
    });
  };
  const addServerPosts = (posts) => {
    dispatchPost({
      type: ACTIONS.ADD_SERVER_POSTS,
      payload: {
        postsArray: posts,
      },
    });
  };

  const deletePost = (id) => {
    console.log(`Post with ID ${id} is to be deleted.`);
    dispatchPost({
      type: ACTIONS.DELETE_POST,
      payload: {
        id: id,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addNewPost, addServerPosts, deletePost }}
    >
      {props.children}
    </PostList.Provider>
  );
};

export default PostListContextProvider;
