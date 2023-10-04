import { Space, Table, Button, message, Popconfirm, Breadcrumb, Spin } from 'antd';
import {
    EditFilled,
    DeleteFilled
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { getAllCategory, removeCategory } from '../../../redux/Reducer/CategorySlice';
import ICategory from '../../../interface/category';

const categoryPage = () => {
    const dispatch = useAppDispatch();

    const categories = useAppSelector((state) => state.Category.categories);

    useEffect(() => {
        setIsLoading(true);
        void dispatch(getAllCategory()).then(() => {
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
        });
    }, [dispatch]);
    const [messageApi, contextHolder] = message.useMessage();
    const confirm = async (id: string) => {
        await dispatch(removeCategory(id));
        messageApi.open({
            type: 'success',
            content: 'Delete category successfully!',
        });
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: String) => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record: any) => (
                <Space size="middle">
                    <Popconfirm
                        title="Delete category"
                        description="Are you sure to delete this category?"
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
                        onConfirm={() => confirm(record.key)}
                        // eslint-disable-next-line @typescript-eslint/no-misused-promises
                        okText="Yes"
                        cancelText="No"
                        okButtonProps={{ className: "text-white bg-blue-400" }}
                    >
                        <DeleteFilled className='text-xl text-red-400' />
                    </Popconfirm>
                    <Link to={`/admin/category/update/${record.key}`}>
                        <EditFilled className='text-xl text-yellow-400' />
                    </Link>
                </Space>
            ),
        },

    ];

    const data = categories?.map((cate: ICategory) => ({
        key: cate._id,
        name: cate.name,
    }));

    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="">
            {contextHolder}
            <h3 className="text-3xl pb-5 font-bold uppercase text-[#1677ff]">
                List Category
            </h3>
            {isLoading ? (
                <div className="text-center ">
                    <Spin size="large" />
                </div>

            ) : (
                <Table columns={columns} dataSource={data} />

            )}
        </div>
    )
}

export default categoryPage;
