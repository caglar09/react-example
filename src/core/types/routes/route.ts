import type {
  IndexRouteProps,
  LayoutRouteProps,
  PathRouteProps,
} from "react-router-dom";

export type IRouteItem = (
  | PathRouteProps
  | LayoutRouteProps
  | IndexRouteProps
) & {
  name: string;
  permissions?: [];
};

export type IRouteItems = IRouteItem[];
