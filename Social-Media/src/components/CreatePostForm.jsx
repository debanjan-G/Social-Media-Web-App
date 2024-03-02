/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import styles from "./CreatePostForm.module.css";
import { PostList } from "../store/post-list-store";

const CreatePostForm = ({ updateActiveTab }) => {
  const postList = useContext(PostList);

  const postTitle = useRef();
  const postContent = useRef();
  const postUserID = useRef();
  const postTag = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const post = {
      title: postTitle.current.value,
      content: postContent.current.value,
      userId: postUserID.current.value,
      tags: postTag.current.value.split(" "),
      id: Date.now(),
      userID: postUserID.current.value,
    };

    console.log(post.tags);
    postList.addNewPost(post);
    updateActiveTab("Home");
  };

  return (
    <form className={`${styles.formContainer}`} onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputUsername" className="form-label">
          Username
        </label>
        <input
          ref={postUserID}
          type="text"
          className="form-control"
          id="exampleInputUsername"
          placeholder="Your Online Persona Begins Here..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputTitle" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitle}
          type="text"
          className="form-control"
          id="exampleInputTitle"
          aria-describedby="emailHelp"
          placeholder="Where Imagination Takes Flight"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputContent" className="form-label">
          Post Content
        </label>
        <textarea
          rows={5}
          ref={postContent}
          className={`form-control ${styles.contentBox}`}
          id="exampleInputContent"
          placeholder="Unleash your thoughts here..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={postTag}
          className={`form-control ${styles.contentBox}`}
          id="tags"
          placeholder="Enter tags separated by space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create Post
      </button>
    </form>
  );
};

export default CreatePostForm;
