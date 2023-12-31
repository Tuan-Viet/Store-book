import { Link, useNavigate } from "react-router-dom";
import React, { Dispatch, useEffect, useState } from "react";
import {
    SearchOutlined,
    UserOutlined,
    ShoppingOutlined,
    HeartOutlined,
    LoginOutlined,
    MenuOutlined
} from '@ant-design/icons';
import { Badge, Button, Drawer, Dropdown, Form, Input, MenuProps, Popover, Space, message } from "antd";
import { AnyIfEmpty, useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../redux/Reducer/authSlice";
import { useAppSelector } from "../../redux/hook";
import { getAllCart, removeCart } from "../../redux/Reducer/CartSlice";
import ICart from "../../interface/cart";
import { getAllCategory } from "../../redux/Reducer/CategorySlice";
import { getAllProduct } from "../../redux/Reducer/ProductSlice";
import axios from "axios";

const Header = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const user = useAppSelector((state: any) => state.auth.auth);
    const cartData = useAppSelector((state) => state.Cart.carts);
    const carts = cartData.filter((cart: ICart) => cart.userId === user?.user?._id);
    const categories = useAppSelector((state) => state.category.categories);
    const listCate = categories.filter(cate => cate.name !== 'Uncategorized')

    let totalMoney: number = 0;
    carts?.map((item: any) => {
        totalMoney += item.totalMoney
    })

    useEffect(() => {
        dispatch(getAllCart())
        dispatch(getAllCategory())
    }, [dispatch]);

    const showDrawer = () => {
        if (carts?.length === 0) {
            message.info("Không có sản phẩm nào trong giở hàng")
        } else {
            setOpen(true);
        }
    };

    const onClose = () => {
        setOpen(false);
    };

    const logOut = () => {
        dispatch(authLogout());
        message.success("Bạn đã đăng xuất!");
        navigate("/signin");
    };

    const acount = user ? (
        <div className="">
            <h1 className="uppercase text-center pb-2 mb-2 border-b-[1px] text-base tracking-widest text-[#333333]">
                Thông tin tài khoản
            </h1>
            <ul className="ml-5 text-sm ">
                <span className="block text-base list-disc font-light mb-1">
                    <span>Xin chào, </span>
                    <span className="font-medium">
                        {user.user.fullname}
                    </span>
                </span>
                <li className="list-disc font-light mb-1">
                    <Link to="/account">Tài khoản của tôi</Link>
                </li>
                <li className="list-disc font-light mb-1">
                    <Link to="/account/order">Đơn hàng của tôi</Link>
                </li>
                <li className="list-disc font-light mb-1">
                    <Link to="/account/address">Danh sách địa chỉ</Link>
                </li>
                <li className="list-disc font-light mb-1">
                    <button onClick={() => logOut()}>
                        Đăng xuất
                    </button>
                </li>
            </ul>
        </div>
    ) : (
        <Link to="/signin"><LoginOutlined className="mr-2" />Đăng nhập</Link>
    );

    const urlParams = new URLSearchParams(location.search);

    const handFound = async (value: any) => {
        const searchText = value._searchText || '';
        urlParams.set("_searchText", encodeURIComponent(searchText));
        const queryString = `${urlParams.toString() ? `?${urlParams.toString()}` : ""}`;
        await dispatch(getAllProduct(queryString))

        navigate(`/collections?${queryString}`);
    };

    const items: MenuProps['items'] = listCate.map((cate: any, index) => ({
        label: <Link to={`/collections/${cate._id}`}>{cate.name}</Link>,
        key: String(index + 1),
        className: "h-10",
    }));

    return (
        <div className="">
            <div className="bg-slate-100 h-8 flex items-center">
                <div className="flex w-[1170px] mx-auto text-gray-400 text-sm items-center justify-between ">
                    <div className="flex p-1">
                        <span className="block border-r-[2px] px-1">
                            Hotline: 0968 0968
                        </span>
                        <span className="block px-1">
                            <Link to={`/contact`}>Liên hệ</Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex w-[1170px] mx-auto items-center justify-between">
                <div className="">
                    <Link to={`/`}>
                        <img src="../../public/image/logo.png" alt="logo"
                            className="w-28 h-28"
                        />
                    </Link>
                </div>
                <div className="max-h-[55px]">
                    <Form
                        onFinish={handFound}
                    >
                        <Form.Item
                            name="_searchText"
                        >
                            <Input
                                size="large"
                                className="text-gray-600 rounded-full w-[500px] pl-5"
                                placeholder="Bạn cần tìm gì"
                                suffix={(
                                    <button type="submit" className="bg-primary rounded-full w-10 h-10 hover:bg-sky-500">
                                        <SearchOutlined className=" text-gray-100" />
                                    </button>
                                )} />
                        </Form.Item>
                    </Form>
                </div>
                <div className="">
                    {user ? (
                        <div className="">
                            {/* <HeartOutlined className="mr-4 text-2xl" /> */}
                            <Badge count={carts.length} className="mr-4" >
                                <ShoppingOutlined className="text-2xl text-[#333333]" onClick={showDrawer} />
                            </Badge>
                            <Popover content={acount} trigger="click" >
                                <UserOutlined className="text-2xl text-[#333333]" />
                            </Popover>
                        </div>
                    ) : (
                        <div className="">
                            <Link to={`/signin`} className="px-2 border-r-[1px] ">Đăng nhập</Link>
                            <Link to={`/signup`} className="px-2">Đăng kí</Link>
                        </div>
                    )}

                    <Drawer width={500} title={`GIỎ HÀNG (${carts.length})`} placement="right" onClose={onClose} open={open}>
                        <div className="pb-2 mb-2 border-b-[1px] text-[#333333]">
                            {carts.map((cart: ICart) => (
                                <div className="flex justify-between mb-3">
                                    <div className="flex w-4/5">
                                        <div className="flex h-20 w-20 items-center justify-center">
                                            <img src={cart.image} alt=""
                                                className="h-full w-auto object-cover"
                                            />
                                        </div>
                                        <div className="w-3/5">
                                            <span className="block text-sm font-medium text-[#333333] font-sans font-roboto overflow-hidden overflow-ellipsis h-[2.5rem] mb-1">
                                                <span style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, overflow: "hidden" }}>
                                                    {cart.nameProduct}
                                                </span>
                                            </span>
                                            <span className="block text-sm"> {cart?.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                        </div>
                                    </div>
                                    <span className="block text-sm w-1/5 text-end px-5">SL: {cart.quantity}</span>
                                </div>
                            ))}


                        </div>
                        <div className="flex justify-between ">
                            <Link to={`/cart`}
                                className="text-primary italic underline"
                            >
                                Cập nhật giỏ hàng
                            </Link>
                            <Link to={`/cart`}
                                className="text-primary italic underline"
                            >
                                <Button type="primary" className="bg-primary">Xem giỏ hàng</Button>
                            </Link>
                        </div>
                    </Drawer>
                </div>
            </div >
            <div className="bg-primary h-12 ">
                <div className="w-[1170px] mx-auto flex items-center justify-between">
                    <Dropdown menu={{ items }} trigger={['click']} className="w-[300px] bg-blue-400 px-3">
                        <span onClick={(e) => e.preventDefault()} className="leading-12 h-12 text-white flex items-center">
                            <MenuOutlined className="text-xl mr-3" /> DANH MỤC SẢN PHẨM
                        </span>
                    </Dropdown>

                </div>

            </div>
        </div >
    );
};
export default Header;
