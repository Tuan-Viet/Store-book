import React, { Dispatch, useEffect, useState } from 'react';
import Header from "../../../components/client/Header";
import { Carousel, } from 'antd';
import { Link } from 'react-router-dom';
import Footer from '../../../components/client/Footer';
import ProductCard from '../../../components/client/productCard';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { getAllProduct } from '../../../redux/Reducer/ProductSlice';
import { useDispatch } from 'react-redux';
import IProduct from '../../../interface/product';
const homePage = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const products = useAppSelector((state) => state.product.products);

    useEffect(() => {
        void dispatch(getAllProduct())
    }, [dispatch]);
    //Sản phẩm mới nhất
    const newProducts = products.slice(0, 5);
    const saleProducts = products.filter(product => product.discount > 0).slice(0, 5);
    const popularProducts = [...products].sort((a: IProduct, b: IProduct) => {
        const buyCountA = a.buyCounts || 0;
        const buyCountB = b.buyCounts || 0;

        return buyCountB - buyCountA;
    }).slice(0, 5);

    return <>
        <Header />
        <div className="w-[1170px] mx-auto">
            <Carousel dotPosition={'bottom'} autoplay>
                <div>
                    <img src="../../public/image/banner1.jpg" alt=""
                        className=''
                    />
                </div>
                <div>
                    <img src="../../public/image/banner2.jpg" alt=""
                        className=''
                    />
                </div>
                <div>
                    <img src="../../public/image/banner3.jpg" alt=""
                        className=''
                    />
                </div>

            </Carousel>

            <div className="mb-10">
                <h3 className='uppercase border-l-4 border-b-2 p-3 my-3 border-primary '>
                    Sản phẩm đang giảm giá
                </h3>
                <div className="grid grid-cols-5 gap-4 my-5 px-3">
                    {saleProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            id={product._id || ''}
                            name={product.name}
                            price={product.price}
                            discount={product.discount}
                            image={product.images[0]}
                        />
                    ))}

                </div>
                <div className="italic text-center text-primary hover:text-sky-500 underline">
                    <Link to={`/collections`}>Xem thêm..</Link>
                </div>
            </div>
            <div className="mb-10">
                <h3 className='uppercase border-l-4 border-b-2 p-3 my-3 border-primary '>
                    Sản phẩm mới nhất
                </h3>
                <div className="grid grid-cols-5 gap-4 my-5 px-3">
                    {newProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            id={product._id || ''}
                            name={product.name}
                            price={product.price}
                            discount={product.discount}
                            image={product.images[0]}
                        />
                    ))}

                </div>
                <div className="italic text-center text-primary hover:text-sky-500 underline">
                    <Link to={`/collections`}>Xem thêm..</Link>
                </div>
            </div>
            <div className="mb-10">
                <h3 className='uppercase border-l-4 border-b-2 p-3 my-3 border-primary '>
                    Sản phẩm bán chạy
                </h3>
                <div className="grid grid-cols-5 gap-4 my-5 px-3">
                    {popularProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            id={product._id || ''}
                            name={product.name}
                            price={product.price}
                            discount={product.discount}
                            image={product.images[0]}
                        />
                    ))}

                </div>
                <div className="italic text-center text-primary hover:text-sky-500 underline">
                    <Link to={`/collections`}>Xem thêm..</Link>
                </div>
            </div>
        </div >
        <Footer />
    </>
}
export default homePage;