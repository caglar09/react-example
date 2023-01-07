import { lazy } from "react";

import { IRouteItems } from "core/types";

const PostListPage = lazy(() => import("./pages/PostListPage"));
const PostDetailPage = lazy(() => import("./pages/PostDetailPage"));
const NewPostPage = lazy(() => import("./pages/NewPostPage"));

const PostRoute: IRouteItems = [
  {
    name: "PostListPage",
    path: "/posts",
    element: <PostListPage />,
    caseSensitive: false,
    permissions: undefined,
  },
  {
    name: "PostDetailPage",
    path: "/posts/:postId",
    element: <PostDetailPage />,
    caseSensitive: false,
    permissions: undefined,
  },
  {
    name: "NewPostPage",
    path: "/posts/new",
    element: <NewPostPage />,
    caseSensitive: false,
    permissions: undefined,
  },
];

export default PostRoute;
