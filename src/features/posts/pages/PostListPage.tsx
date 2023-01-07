import styles from "../styles/PostListPage.module.css";

import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "core/store";
import { useGetPostsQuery, deletePost, prevPage, nextPage } from "../store";
import { Post } from "../models";

function PostListPage() {
  const dispatch = useAppDispatch();
  const post = useAppSelector((store) => store.posts);
  const { filter } = post;

  const postResult = useGetPostsQuery(filter, { skip: false });
  const { data, isFetching, isError, error } = postResult;
console.log(error);

  const handlePostDelete = (postId: number) => {
    dispatch(deletePost.initiate({ postId }));
  };

  return (
    <div className={styles.bg}>
      <h1>Posts</h1>

      <Link to="/posts/new">Yeni Post</Link>

      {isFetching ? (
        <div>
          <h1>Yükleniyor</h1>
        </div>
      ) : (
        <ul className={styles.list}>
          {data?.map((post: Post) => {
            let text = `${post.id} ${post.title}`;
            return (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{text}</Link>{" "}
                <button onClick={() => handlePostDelete(post.id)}>Sil</button>
              </li>
            );
          })}
        </ul>
      )}

      <button onClick={() => dispatch(prevPage())}>Önceki</button>
      <b>{filter._start}</b>
      <button onClick={() => dispatch(nextPage())}>Sonraki</button>
    </div>
  );
}

export default PostListPage;
