/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./Post.module.css";
import { TiDelete } from "react-icons/ti";
import { PostList } from "../store/post-list-store";

const Post = ({ postDetails}) => {
  const PostContext = useContext(PostList);
  return (
    <div className={` ${styles.individualPostContainer} card`}>
      <button
        className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${styles.deleteBtn}`}
      >
        <div
          className={`icon ${styles.deleteIcon}`}
          onClick={() => PostContext.deletePost(postDetails.id)}
        >
          <TiDelete />
        </div>
      </button>
      <div className="card-body">
        <h5 className="card-title">{postDetails.title}</h5>
        <p className="card-text">{postDetails.body}</p>
      </div>

      <div className={` ${styles.badge}`}>
        {postDetails.tags.map((tag) => (
          <span
            className={`badge text-bg-success ${styles.badgeSpan}`}
            key={Math.random()}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="alert alert-info" role="alert">
        This post has {postDetails.reactions} reactions.
      </div>
    </div>
  );
};

export default Post;
