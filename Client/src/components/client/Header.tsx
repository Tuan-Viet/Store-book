import { Link, useNavigate } from "react-router-dom";
import React, { Dispatch, useState } from "react";
import {
    SearchOutlined,
    UserOutlined,
    ShoppingOutlined,
    HeartOutlined,
    LoginOutlined,
    MenuOutlined
} from '@ant-design/icons';
import { Badge, Button, Drawer, Dropdown, Form, MenuProps, Popover, Space, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../redux/Reducer/authSlice";



const Header = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const user = useSelector((state: any) => state.auth.auth);

    const showDrawer = () => {
        setOpen(true);
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
            <ul className="ml-5 text-sm">
                <li className="list-disc font-light mb-1">
                    <Link to="">Tài khoản của tôi</Link>
                </li>
                {/* {role == "admin" ? (
                <li className="list-disc font-light mb-1">
                    <Link to="">Quản trị</Link>
                </li>
            ) : null} */}
                <li className="list-disc font-light mb-1">
                    <Link to="/order">Đơn hàng của tôi</Link>
                </li>
                <li className="list-disc font-light mb-1">
                    <Link to="">Danh sách địa chỉ</Link>
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

    const items: MenuProps['items'] = [
        {
            label: "Sách thiếu nhi",
            key: '1',
            className: "h-10",
        },
        {
            label: "Sách văn học",
            key: '2',
            className: "h-10",

        },
        {
            label: "Kinh tế",
            key: '3',
            className: "h-10",

        },
        {
            label: "Truyện cổ tích",
            key: '4',
            className: "h-10",

        },
        {
            label: "Sách thiếu nhi",
            key: '5',
            className: "h-10",

        },
        {
            label: "Sách văn học",
            key: '6',
            className: "h-10",

        },
        {
            label: "Kinh tế",
            key: '7',
            className: "h-10",

        },
        {
            label: "Truyện cổ tích",
            key: '8',
            className: "h-10",

        },


    ];
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
                <form className="flex">
                    <input type="text" className='border p-2 w-[400px] outline-none text-[#333333]'
                        placeholder="Bạn cần tìm gì?" />
                    <button type="submit" className='w-10 bg-primary p-2 text-center flex items-center justify-center'>
                        <SearchOutlined className='text-white' />
                    </button>
                </form>
                <div className="">
                    {user ? (
                        <div className="">
                            {/* <HeartOutlined className="mr-4 text-2xl" /> */}
                            <Badge count={5} className="mr-4" >
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

                    <Drawer title="GIỎ HÀNG (3)" placement="right" onClose={onClose} open={open}>
                        <div className="pb-2 mb-2 border-b-[1px] text-[#333333]">
                            <div className="flex justify-between mb-3">
                                <div className="flex">
                                    <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244869132.jpg" alt=""
                                        className="w-12 h-auto bg-cover"
                                    />
                                    <div className="">
                                        <span className="block text-sm font-medium">Danh Nhân Thế Giới: Napoleon</span>
                                        <span className="block text-sm">250.000đ</span>
                                    </div>
                                </div>
                                <span className="block text-sm">SL: 1</span>
                            </div>
                            <div className="flex justify-between mb-3">
                                <div className="flex">
                                    <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244869132.jpg" alt=""
                                        className="w-12 h-auto bg-cover"
                                    />
                                    <div className="">
                                        <span className="block text-sm font-medium">Danh Nhân Thế Giới: Napoleon</span>
                                        <span className="block text-sm">250.000đ</span>
                                    </div>
                                </div>
                                <span className="block text-sm">SL: 1</span>
                            </div>
                            <div className="flex justify-between mb-3">
                                <div className="flex">
                                    <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244869132.jpg" alt=""
                                        className="w-12 h-auto bg-cover"
                                    />
                                    <div className="">
                                        <span className="block text-sm font-medium">Danh Nhân Thế Giới: Napoleon</span>
                                        <span className="block text-sm">250.000đ</span>
                                    </div>
                                </div>
                                <span className="block text-sm">SL: 2</span>
                            </div>
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
