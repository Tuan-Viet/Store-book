import routes from "../config/routes";
import categoryAdd from "../pages/admin/CategoryAdd";
import categoryPage from "../pages/admin/CategoryPage";
import categoryUpdate from "../pages/admin/CategoryUpdate";
import dashboardPage from "../pages/admin/DashboardPage";
import productAdd from "../pages/admin/ProductAdd";
import productPage from "../pages/admin/ProductPage";
import productUpdate from "../pages/admin/ProductUpdate";
import homePage from "../pages/client/Home";
import productDetail from "../pages/client/ProductDetail";
import cart from "../pages/client/Cart";
import signin from "../pages/client/Signin/index.";
import signup from "../pages/client/Signup";

export const publicRoutes = [
    { path: routes.home, Component: homePage },
    { path: routes.productDetail, Component: productDetail },
    { path: routes.cart, Component: cart },
    { path: routes.signin, Component: signin },
    { path: routes.signup, Component: signup },
]

export const privateRoutes = [
    { path: routes.admin, Component: dashboardPage },
    { path: routes.adminDashboard, Component: dashboardPage },
    { path: routes.adminProducts, Component: productPage },
    { path: routes.adminProductAdd, Component: productAdd },
    { path: routes.adminProductUpdate, Component: productUpdate },
    { path: routes.adminCategorys, Component: categoryPage },
    { path: routes.adminCategoryAdd, Component: categoryAdd },
    { path: routes.adminCategoryUpdate, Component: categoryUpdate },
]