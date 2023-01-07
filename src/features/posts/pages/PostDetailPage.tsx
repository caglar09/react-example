import styles from "../styles/PostDetailPage.module.css";
import type { PostDetailPageRequesParams } from "../types";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "core/store";
import { Comment } from "../models";
import {
  addComment,
  setComment,
  useGetPostCommentsQuery,
  useGetPostQuery,
} from "../store";

const PostDetailPage = () => {
  const params = useParams() as PostDetailPageRequesParams;
  const dispatch = useAppDispatch();
  let { comment } = useAppSelector((state) => state.posts);
  const { data } = useGetPostQuery(params, {
    skip: false,
  });
  const { data: comments } = useGetPostCommentsQuery(params, {
    skip: false,
  });

  const onChangeValue = (event: any) => {
    const { name, value } = event.target;
    console.log(name, value);

    dispatch(setComment({ [name]: value }));
  };

  const handleSubmit = () => {
    console.log("comment", comment);

    const model = {
      name: comment.name,
      email: comment.email,
      body: comment.body,

      postId: Number(params.postId),
    } as Comment;
    dispatch(addComment.initiate(model));
  };

  return (
    <div>
      <h1 className={styles.head}>{data?.title}</h1>
      <p>{data?.body}</p>

      <hr />
      <h3>Comments: </h3>
      <ul>
        {comments?.map((comment) => (
          <li key={comment.id} style={{ marginBottom: 10 }}>
            {comment.name}
            <br />
            {comment.body}
          </li>
        ))}
      </ul>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
          }}
        >
          <input
            key="name"
            type="text"
            name="name"
            defaultValue={comment.name}
            onChange={(event) => onChangeValue(event)}
            placeholder="adınız"
          />
          <input
            key="email"
            type="text"
            name="email"
            defaultValue={comment.email}
            onChange={(event) => onChangeValue(event)}
            placeholder="email adreisniz"
          />
        </div>
        <textarea
          key="bodya"
          name="body"
          defaultValue={comment.body}
          onChange={(event) => onChangeValue(event)}
          style={{ minWidth: 400 }}
          rows={10}
        ></textarea>
        <br />
        <div>
          <button onClick={handleSubmit}>Yorum Yap</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
