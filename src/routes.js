import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

export const routes = [
  {
    exact: true,
    path: "/",
    // layout: DashboardLayout,
    component: lazy(() => import("./layouts/DashBoard")),
  },

  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
