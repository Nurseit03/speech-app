import { Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import * as PATH from "./constants";
import { Main } from "../pages/main";

function RouterConfig() {
  return (
    <Suspense>
      <Routes>
        <Route path={PATH.ROOT} element={<Outlet />}>
          <Route path={PATH.ROOT} element={<Main />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default RouterConfig;
