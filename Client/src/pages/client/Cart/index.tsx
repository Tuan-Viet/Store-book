import { useState } from "react";
import Footer from "../../../components/client/Footer";
import Header from "../../../components/client/Header";
import {
    PlusOutlined,
    MinusOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const cart = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return <>
        <Header />
        <div className="w-[1170px] mx-auto">
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10 bg-gray-50 border">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex border-b pb-8">
                            <h1 className="font-semibold text-2xl mr-2">Giỏ hàng</h1>
                            <h2 className="font-semibold text-2xl">(3 sản phẩm)</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-3/6"></h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 ">Số lượng</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 ">Thành tiền</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 "></h3>
                        </div>
                        <div className="flex items-center -mx-8 px-6 py-5">
                            <div className="flex w-3/6">
                                <div className="w-20">
                                    <img className="" src="https://cdn0.fahasa.com/media/catalog/product/d/a/danh-nhan-the-gioi---einstein.jpg" alt="" />
                                </div>
                                <div className="space-y-3 p-2">
                                    <span className="text-sm">Danh Nhân Thế Giới - Einstein</span>
                                    <div className="">
                                        <span className="text-sm text-primary  mr-2 ">249,000đ</span>
                                        <span className="text-xs text-gray-500 line-through mr-2 ">300,000đ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center w-1/6">
                                <div className="flex items-center">
                                    <div className="flex w-[100px] items-center border border-gray-200 rounded justify-between px-3">
                                        <button
                                            type="button"
                                            className="w-3 h-8  text-gray-600 transition hover:opacity-75"
                                            onClick={handleDecrement}
                                        >
                                            <MinusOutlined className="text-xs" />
                                        </button>
                                        <input
                                            value={quantity}
                                            className="h-8 w-12 border-transparent text-center sm:text-sm"
                                        />
                                        <button
                                            type="button"
                                            className="w-3 h-8 text-gray-600 transition hover:opacity-75"
                                            onClick={handleIncrement}
                                        >
                                            <PlusOutlined className="text-xs" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <span className="text-center w-1/6 font-semibold text-sm">400,000đ</span>
                            <span className="text-center w-1/6 font-semibold text-sm ">
                                <DeleteOutlined />
                            </span>
                        </div>



                        <Link to={`/`} className="flex font-semibold text-primary text-sm mt-10">

                            <svg className="fill-current mr-2 text-primary w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Tiếp tục mua hàng
                        </Link>
                    </div>

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Tỏng sản phẩm</span>
                            <span className="font-semibold text-sm">500,000đ</span>
                        </div>
                        <div className="py-10">
                            <label className="font-semibold inline-block mb-3 text-sm uppercase">Mã giảm giá</label>
                            <input type="text" className="p-2 text-sm w-full border outline-none" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Áp dụng</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Tổng</span>
                                <span>500,000</span>
                            </div>
                            <Link to={`/checkout`}>
                                <button className="bg-primary font-semibold hover:bg-sky-500 py-3 text-sm text-white uppercase w-full">Thanh toán</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
    </>
}
export default cart;