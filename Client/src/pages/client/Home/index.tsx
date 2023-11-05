import React, { useState } from 'react';
import Header from "../../../components/client/Header";
import { Carousel, } from 'antd';
import { Link } from 'react-router-dom';
import Footer from '../../../components/client/Footer';
import ProductCard from '../../../components/client/productCard';
const homePage = () => {

    return <>
        <Header />
        <div className="w-[1170px] mx-auto">
            <Carousel dotPosition={'bottom'} autoplay>
                <div>
                    <img src="https://i.pinimg.com/564x/79/2b/f7/792bf768d8a9e6b9c2045537c3f7dff8.jpg" alt=""
                        className=''
                    />
                </div>
                <div>
                    <img src="https://i.pinimg.com/564x/94/5a/56/945a5621e6c7289f01024893e5539ed3.jpg" alt=""
                        className=''
                    />
                </div>
            </Carousel>

            <div className="mb-10">
                <h3 className='uppercase border-l-4 border-b-2 p-3 my-3 border-primary '>
                    Sản phẩm mới nhất
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
                <div className="italic text-center text-primary hover:text-sky-500 underline">
                    <Link to={`/products`}>Xem thêm..</Link>
                </div>
            </div>
        </div >
        <Footer />
    </>
}
export default homePage;