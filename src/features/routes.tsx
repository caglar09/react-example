import RouteGuard from "core/components/route-guard/RouteGuard";
import { Route, Routes } from "react-router-dom";

import PostRoute from "./posts";

const PrivateRoute = () => {
  return (
    <Routes>
      {PostRoute.map((route) => (
        <Route
          {...route}
          key={route.name}
          element={<RouteGuard item={route}>{route.element}</RouteGuard>}
        />
      ))}
    </Routes>
  );
};

export default PrivateRoute;
