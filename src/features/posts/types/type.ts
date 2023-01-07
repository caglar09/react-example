import { PagePropTypes } from "config/index";
import { ParsedUrlQuery } from "querystring";

import { Post } from "../models";

export type PostPageProps = {
  children?: JSX.Element[] | JSX.Element;
};

export interface PostsPageProps {
  data?: Post[];
}

export interface PostPageParams extends ParsedUrlQuery {
  postId: string;
}

export type PostPageRequestParams = PagePropTypes & {
  keyword?: string;
};

export type PostDetailPageRequesParams = {
  postId: string;
};
