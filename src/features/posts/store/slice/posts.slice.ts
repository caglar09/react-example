import { PageProps } from "config/configuration";
import { createSlice } from "@reduxjs/toolkit";

import PostsInitialState from "../types/type";

const postsSlices = createSlice({
  name: "posts",
  initialState: {
    filter: {
      _start: PageProps._start,
      limit: PageProps.limit,
    },
    comment: {
      name: "",
      email: "",
      body: "",
    },
    post: {
      userId: 1,
      body: "",
      title: "",
    },
  } as PostsInitialState,
  reducers: {
    nextPage: (state) => {
      state.filter._start++;
    },
    prevPage: (state) => {
      if (state.filter._start - 1 <= 0) {
        state.filter._start = 0;
      } else {
        state.filter._start--;
      }
    },
    setComment: (state, action) => {
      const { payload } = action;

      const newComment = { ...state.comment, ...payload };
      state.comment = newComment;
    },
    setPost: (state, action) => {
      const { payload } = action;

      const newPost = { ...state.post, ...payload };
      state.post = newPost;
    },
  },
});

export const { nextPage, prevPage, setComment, setPost } = postsSlices.actions;

export default postsSlices;
