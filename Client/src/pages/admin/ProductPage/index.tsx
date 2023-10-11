import {
    Space,
    Table,
    message,
    Popconfirm,
    Spin,
    Image,
    Button,
} from 'antd';
import {
    EditFilled,
    DeleteFilled,
    PlusOutlined,
    SearchOutlined
} from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { getAllProduct, removeProduct } from '../../../redux/Reducer/ProductSlice';
import ICategory from '../../../interface/category';
import { useForm } from 'react-hook-form';


const productPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const products = useAppSelector((state) => state.Product.products);
    const { register, handleSubmit } = useForm();

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

    const urlParams = new URLSearchParams(location.search);

    const handFound = (e: any) => {
        const searchText = e._searchText;

        urlParams.set("_searchText", encodeURIComponent(searchText));
        console.log("searchText:", searchText);

        const queryString = `${urlParams.toString() ? `?${urlParams.toString()}` : ""}`;

        navigate(`?${queryString}`);
        setIsLoading(true);
        void dispatch(getAllProduct(queryString)).then(() => {
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
        });
    };

    const confirm = async (id: string) => {
        await dispatch(removeProduct(id));
        messageApi.open({
            type: 'success',
            content: 'Delete category successfully!',
        });
    }

    const columns = [
        {
            title: 'Product Name',
            key: 'name',
            render: (record: any) => (
                <div className="flex items-center  ">
                    <Image
                        width={70}
                        src={record.images[0]}
                        alt="Product Image"
                        className=""
                    />
                    <a className='w-full overflow-hidden'>{record.name}</a>
                </div>
            ),
            className: 'w-1/4',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Author',
            dataIndex: 'author',
            key: 'price',
        },
        // {
        //     title: 'Description',
        //     dataIndex: 'description',
        //     key: 'description',
        // },
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
                        onConfirm={() => confirm(record._id)}
                        okText="Yes"
                        cancelText="No"
                        okButtonProps={{ className: "text-white bg-blue-400" }}
                    >
                        <DeleteFilled className='text-xl text-red-400' />
                    </Popconfirm>
                    <Link to={`/admin/product/update/${record._id}`}>
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
            <Space className='flex justify-between mb-5'>
                <div className="">
                    <span className="block text-xl text-primary">
                        Product List
                    </span>
                    <span className="block text-base  text-primary">
                        Manage your products
                    </span>
                </div>
                <Link to={`add`}>
                    <Button type='primary' className='bg-primary'
                        icon={<PlusOutlined />}
                    >
                        Add New Product
                    </Button>
                </Link>
            </Space>
            <div className="border p-3 rounded-lg min-h-screen bg-white">
                <div className="pb-6 pt-3">
                    <form onSubmit={handleSubmit(handFound)} >
                        <input type="text" className='border p-2 w-64 outline-none '
                            {...register("_searchText")}
                            placeholder="" />
                        <button type="submit" className='p-2 bg-primary'>
                            <SearchOutlined className='text-white' />
                        </button>
                    </form>
                </div>
                {isLoading ? (
                    <div className="text-center ">
                        <Spin size="large" />
                    </div>

                ) : (
                    <Table columns={columns} dataSource={products} pagination={{ pageSize: 20 }} />
                )}
            </div>
        </div>
    )
}
export default productPage;