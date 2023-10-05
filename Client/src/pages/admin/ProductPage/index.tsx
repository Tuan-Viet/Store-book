import {
    Space,
    Table,
    message,
    Popconfirm,
    Spin,
    Image
} from 'antd';
import {
    EditFilled,
    DeleteFilled
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { getAllProduct, removeProduct } from '../../../redux/Reducer/ProductSlice';
import ICategory from '../../../interface/category';

const productPage = () => {
    const dispatch = useAppDispatch();

    const products = useAppSelector((state) => state.Product.products);

    useEffect(() => {
        setIsLoading(true);
        void dispatch(getAllProduct()).then(() => {
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
        });
    }, [dispatch]);
    const [messageApi, contextHolder] = message.useMessage();
    const confirm = async (id: string) => {
        await dispatch(removeProduct(id));
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
            title: 'Image',
            key: 'image',
            render: (record: any) => (
                <Image
                    width={70}
                    src={record.images[0]}
                    alt="Product Image"
                />
            ),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: "Category",
            key: "category",
            dataIndex: "categoryId",
            render: (cate: ICategory) => <span>{cate?.name}</span>,
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
                        onConfirm={() => confirm(record._id)}
                        // eslint-disable-next-line @typescript-eslint/no-misused-promises
                        okText="Yes"
                        cancelText="No"
                        okButtonProps={{ className: "text-white bg-blue-400" }}
                    >
                        <DeleteFilled className='text-xl text-red-400' />
                    </Popconfirm>
                    <Link to={`/admin/category/update/${record._id}`}>
                        <EditFilled className='text-xl text-yellow-400' />
                    </Link>
                </Space>
            ),
        },

    ];


    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="">
            {contextHolder}
            <h3 className="text-3xl pb-5 font-bold uppercase text-[#1677ff]">
                List Product
            </h3>
            {isLoading ? (
                <div className="text-center ">
                    <Spin size="large" />
                </div>

            ) : (
                <Table columns={columns} dataSource={products} pagination={{ pageSize: 20 }} />

            )}
        </div>
    )
}
export default productPage;