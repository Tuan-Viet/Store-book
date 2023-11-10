const routes = {
    //Client
    home: "/",
    products: "/products",
    productDetail: "/products/:id",
    cart: "/cart",
    signin: "/signin",
    signup: "/signup",
    checkout: "/checkout",
    order: "account/order",
    orderDetail: "account/order/:id",
    billConfirm: "/invoice/:id",

    // Admin 
    admin: "/admin",
    adminDashboard: "/admin/dashboard",
    adminProducts: "/admin/product",
    adminProductAdd: "/admin/product/add",
    adminProductUpdate: "/admin/product/update/:id",
    adminCategorys: "/admin/category",
    adminCategoryAdd: "/admin/category/add",
    adminCategoryUpdate: "/admin/category/update/:id"

}

export default routes;