import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
type Props = { children: React.ReactNode };

import {
    PieChartOutlined,
    CodeSandboxOutlined,
    AppstoreAddOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, Popconfirm, Space, message, theme } from 'antd';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { authLogout } from '../../redux/Reducer/authSlice';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];



const AdminLayout = ({ children }: Props) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const confirm = async () => {
        dispatch(authLogout());
        navigate("/");
        await message.success("Logout successfully!");
    };

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem(<Link to={"/admin/dashboard"}>Dashboard</Link >, '1', <PieChartOutlined />),
        getItem('Products', 'sub1', <CodeSandboxOutlined />, [
            getItem(<Link to={"/admin/product/add"}>Create New</Link >, '3'),
            getItem(<Link to={"/admin/product"}>View List</Link >, '4'),
        ]),
        getItem('Categorys', 'sub2', <AppstoreAddOutlined />, [
            getItem(<Link to={"/admin/category/add"}>Create New</Link >, '5'),
            getItem(<Link to={"/admin/category"}>View List</Link >, '6'),
        ]),
        getItem('Logout', '9', <Popconfirm
            title="Logout your account"
            description="Are you sure to logout?"
            onConfirm={() => confirm()}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ className: "bg-red-500 hover:bg-red-700" }}
        >
            <LogoutOutlined />
        </Popconfirm>),

    ];

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const { auth } = useAppSelector((state) => state.auth);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Space className='flex justify-center'>
                    <img src="../../public/image/logo.png" alt=""
                        className=' w-24 '
                    />
                </Space>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
                {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
                <Content className=''>

                    <div className='bg-slate-50' style={{ padding: 24, minHeight: 360 }}>
                        {auth?.user.role === "admin"
                            ? children
                            : (message.error("Bạn không có quyền!"),
                                (<Navigate to="/signin" replace />))}
                        {/* {children} */}
                    </div>
                </Content>
                {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
            </Layout>
        </Layout>
    );
};

export default AdminLayout;