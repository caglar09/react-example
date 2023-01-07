import { IRouteItem } from "../../types/routes/route";
import React, { Suspense } from "react";

interface IRouteGuard {
  item: IRouteItem;
  children?: any;
}

const RouteGuard = ({ item, children }: IRouteGuard) => {
  const { permissions } = item;
  // TODO: burada route a ait permission yetkisi ve auth kontrolü yapılmalı.

  return <Suspense fallback={<h1>loading</h1>}>{children}</Suspense>;
};

export default RouteGuard;
