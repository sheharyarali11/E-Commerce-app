import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../views/Home/HomeContainer";
import SingleProductContainer from "../views/Product/SingleProductContainer";
import CategoryContainer from "../views/Category/CategoryContainer";

var routes = [
  {
    path: "/trend-cube",
    exact: true,
    layout: BaseLayout,
    component: Home,
  },

  {
    path: "/home",
    layout: BaseLayout,
    component: () => <Redirect to="/trend-cube" />,
  },
  {
    path: "/trend-cube/single-product/:id",
    layout: BaseLayout,
    component: SingleProductContainer,
  },
  {
    path: "/trend-cube/shops/:category",
    layout: BaseLayout,
    component: CategoryContainer,
  },
];

export default routes;
