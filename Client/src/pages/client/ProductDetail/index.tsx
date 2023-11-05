import { Breadcrumb, Button, Carousel, Form, InputNumber } from "antd";
import Footer from "../../../components/client/Footer";
import Header from "../../../components/client/Header";
import {
    HomeOutlined,
    PlusOutlined,
    MinusOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import { useState } from "react";
import ProductCard from "../../../components/client/productCard";
const productDetail = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const product = {
        _id: "1",
        name: "Danh Nhân Thế Giới: Newton",
        price: 300000,
        discount: 210000,
        author: "Neung In Publishing Company",
        images: [
            'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/danh_nhan_the_gioi_newton_tai_ban_2022/2022_11_03_16_21_26_1-390x510.jpg',
            'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/danh_nhan_the_gioi_newton_tai_ban_2022/2022_11_03_16_21_26_2-390x510.jpg',
            'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/danh_nhan_the_gioi_newton_tai_ban_2022/2022_11_03_16_21_26_3-390x510.jpg',
            'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/danh_nhan_the_gioi_newton_tai_ban_2022/2022_11_03_16_21_26_5-390x510.jpg',
            'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/danh_nhan_the_gioi_newton_tai_ban_2022/2022_11_03_16_21_26_6-390x510.jpg',
        ],
        quantity: 12,
    }

    const handleImageClick = (index: any) => {
        setSelectedImage(index);
    };

    return <>
        <Header />
        <div className="w-[1170px] mx-auto">
            <div className="my-1">
                <Breadcrumb
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            href: '/',
                            title: 'Thiếu nhi',
                        },
                        {
                            title: 'ApplicationDanh Nhân Thế Giới - Einstein',
                        },
                    ]}
                />
            </div>
            <div className="flex p-3 mb-20">
                <div className="flex">
                    <div className="h-[300px] mr-10 ">
                        {product.images.map((imageUrl, index) => (
                            <div key={index} onClick={() => handleImageClick(index)} className="p-1">
                                <img src={imageUrl} alt=""
                                    className="w-14 transform transition-transform hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="w-[300px] h-[450px]">
                        <div >
                            <img src={product.images[selectedImage]} alt=""
                                className="border w-[300px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="pl-28 p-3">
                    <div className="">
                        <h1 className="font-medium text-3xl mb-3 text-[#333]">
                            {product.name}
                        </h1>
                        <div className="mb-3">
                            <span className="mr-1 text-[#333]">
                                Tác giả:
                            </span>
                            <span className="text-lg font-medium text-[#333]">
                                {product.author}
                            </span>
                        </div>
                        <div className="mb-6">
                            {product.discount === 0 ? (
                                <span className="text-2xl font-medium text-primary mr-2">
                                    {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </span>
                            ) : (
                                <span className="text-2xl font-medium text-primary mr-2">
                                    {product.discount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </span>
                            )}

                            <span className={`text-base text-gray-500 line-through mr-2 ${product.discount === 0 ? 'hidden' : ''}`}>
                                {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </span>
                            <span className={`text-sm font-medium text-white bg-red-500 p-1 rounded-lg ${product.discount === 0 ? 'hidden' : ''}`}>
                                {Math.ceil(((product.price - product.discount) / product.price) * 100)}%
                            </span>
                        </div>
                        <div className="mb-6">
                            <span className="mr-5 text-[#333]">
                                Tình trạng:
                            </span>
                            <span className="text-lg font-medium text-primary">
                                {product.quantity === 0 ? "Hết hàng" : "Còn hàng"}
                            </span>
                        </div>
                        <div className="mb-6">
                            <Form>
                                <Form.Item
                                    name="quantity"
                                >
                                    <div className="flex items-center">
                                        <span className="mr-20 font-medium text-lg "> Số lượng: </span>
                                        <div className="flex w-[150px] items-center border border-gray-200 rounded justify-between px-2">
                                            <button
                                                type="button"
                                                className="w-5 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                                onClick={handleDecrement}
                                            >
                                                <MinusOutlined />
                                            </button>

                                            <input
                                                value={quantity}
                                                className="h-10 w-12 border-transparent text-center sm:text-sm"
                                            />

                                            <button
                                                type="button"
                                                className="w-5 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                                onClick={handleIncrement}
                                            >
                                                <PlusOutlined />
                                            </button>
                                        </div>
                                    </div>
                                </Form.Item>
                                <Form.Item>
                                    <button type="submit"
                                        className="border border-primary bg-white rounded-lg py-3 px-6 text-base text-primary hover:text-white hover:bg-primary mr-3"
                                    >
                                        <ShoppingCartOutlined className="text-xl mr-1" />
                                        Thêm vào giỏ hàng
                                    </button>
                                    <button type="submit"
                                        className="bg-primary rounded-lg py-3 px-16 text-base text-white hover:text-white hover:bg-sky-400"
                                    >
                                        Mua ngay
                                    </button>
                                </Form.Item>
                            </Form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mb-32">
                <h3 className='uppercase border-l-4 border-b-2 p-3 my-3 border-primary '>
                    Sản phẩm liên quan
                </h3>
                <div className="grid grid-cols-5 gap-4 my-5 px-3">
                    <ProductCard
                        _id='1'
                        name="Danh Nhân Thế Giới - Einstein"
                        price={400000}
                        discount={200000}
                        image="https://cdn0.fahasa.com/media/catalog/product/d/a/danh-nhan-the-gioi---einstein.jpg"
                    />
                    <ProductCard
                        _id='1'
                        name="Danh Nhân Thế Giới - Einstein"
                        price={400000}
                        discount={200000}
                        image="https://cdn0.fahasa.com/media/catalog/product/d/a/danh-nhan-the-gioi---einstein.jpg"
                    />
                    <ProductCard
                        _id='1'
                        name="Danh Nhân Thế Giới - Einstein"
                        price={400000}
                        discount={200000}
                        image="https://cdn0.fahasa.com/media/catalog/product/d/a/danh-nhan-the-gioi---einstein.jpg"
                    />
                    <ProductCard
                        _id='1'
                        name="Danh Nhân Thế Giới - Einstein"
                        price={400000}
                        discount={200000}
                        image="https://cdn0.fahasa.com/media/catalog/product/d/a/danh-nhan-the-gioi---einstein.jpg"
                    />
                    <ProductCard
                        _id='1'
                        name="Danh Nhân Thế Giới - Einstein"
                        price={400000}
                        discount={200000}
                        image="https://cdn0.fahasa.com/media/catalog/product/d/a/danh-nhan-the-gioi---einstein.jpg"
                    />
                </div>
            </div>
        </div>
        <Footer />
    </>
}
export default productDetail;