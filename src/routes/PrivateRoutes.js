// Layout Types
import BaseLayout from "../layouts/BaseLayout";

import CartContainer from "../views/Cart/CartContainer";

var PrivateRoutes = [
  {
    path: "/trend-cube/cart",
    layout: BaseLayout,
    component: CartContainer,
  },
];

export default PrivateRoutes;
