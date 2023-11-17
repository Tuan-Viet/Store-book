import Footer from "../../../components/client/Footer";
import Header from "../../../components/client/Header";

import { Dispatch, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getAllProduct } from "../../../redux/Reducer/ProductSlice";
import ProductCard from "../../../components/client/productCard";
import { InputNumber, List, Select, Slider, message } from "antd";
import { useDispatch } from "react-redux";
import { getAllCategory } from "../../../redux/Reducer/CategorySlice";
const ProductPage = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const categories = useAppSelector((state) => state.category.categories);
    const products = useAppSelector((state) => state.product.products);
    const { id } = useParams();
    const urlParams = new URLSearchParams(location.search);
    const queryString = `${urlParams.toString() ? `?${urlParams.toString()}` : ""
        }`;

    const searchText = decodeURIComponent(urlParams.get("_searchText") || "");

    useEffect(() => {
        if (queryString === "") {
            dispatch(getAllProduct())
        }

        dispatch(getAllCategory())
    }, [dispatch, queryString]);

    const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
    useEffect(() => {
        if (id) {
            setSelectedCategories([id]);
        }
    }, [id]);

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const toggleCategory = (categoryId: any) => {
        if (selectedCategories.includes(categoryId)) {
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        } else {
            setSelectedCategories([...selectedCategories, categoryId]);
        }
    };

    const filteredProducts = products.filter((product: any) => {
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.categoryId._id)) {
            return false;
        }
        const productPrice = (product.discount === 0 ? product.price : product.discount);
        if ((minPrice > 0 && productPrice < minPrice) || (maxPrice > 0 && productPrice > maxPrice)) {
            return false;
        }
        return true;
    });
    const handleResetClick = () => {
        setSelectedCategories([]);
    };

    const handleResetPrice = () => {
        setSelectedCategories([]);
        setMinPrice(0);
        setMaxPrice(0);
    };
    const handlePriceFilter = (min: number, max: number) => {
        setMinPrice(min);
        setMaxPrice(max);
    };

    const sortedProducts = [...filteredProducts];

    const [sortOption, setSortOption] = useState<Number>(1);
    switch (sortOption) {
        case 1:
            // Mới nhất
            sortedProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            break;
        case 2:
            // Cũ nhất
            sortedProducts.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
            break;
        case 3:
            // Giá: Tăng dần
            sortedProducts.sort((a, b) => a.discount - b.discount);
            break;
        case 4:
            // Giá: Giảm dần
            sortedProducts.sort((a, b) => b.discount - a.discount);
            break;
        case 5:
            // Tên: A - Z
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 6:
            // Tên: Z - A
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            break;
    }


    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    return (
        <div className="">
            <Header />
            <div className="w-[1170px] mx-auto mt-5 mb-20 ">
                <div className="flex">
                    <div className="w-1/4">
                        <div className="py-8">
                            <span className="text-2xl text-[#333333] font-semibold px-3">Bộ lọc</span>
                        </div>
                        <div className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                            >
                                <span className="text-sm font-medium">Lọc theo danh mục</span>

                                <span className="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <div className="border-t border-gray-200 bg-white">
                                <header className="flex items-center justify-between p-4">
                                    <span className="text-sm text-gray-700"> {selectedCategories.length} đã chọn </span>

                                    <button
                                        type="button"
                                        className="text-sm text-gray-900 underline underline-offset-4"
                                        onClick={handleResetClick}
                                    >
                                        Reset
                                    </button>
                                </header>

                                <ul className="space-y-1 border-t border-gray-200 p-4">
                                    {categories
                                        .filter(cate => cate.name !== 'Uncategorized')
                                        .map((cate: any) => (
                                            <li key={cate._id}>
                                                <label htmlFor="FilterPrice" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterPrice"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                        checked={selectedCategories.includes(cate._id)}
                                                        onChange={() => toggleCategory(cate._id)}
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        {cate.name}
                                                    </span>
                                                </label>
                                            </li>
                                        ))}
                                </ul>

                            </div>
                        </div>

                        <div className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                            >
                                <span className="text-sm font-medium"> Lọc theo giá </span>

                                <span className="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <div className="border-t border-gray-200 bg-white">
                                <header className="flex items-center justify-between p-4">
                                    <span className="text-sm text-gray-700">Giá cao nhất 1,000,000đ</span>
                                    <button
                                        type="button"
                                        className="text-sm text-gray-900 underline underline-offset-4"
                                        onClick={handleResetPrice}
                                    >
                                        Reset
                                    </button>
                                </header>
                                <ul className="space-y-1 border-t border-gray-200 p-4">
                                    <li>
                                        <label htmlFor="FilterPrice" className="inline-flex items-center gap-2">
                                            <input
                                                name="FilterPrice"
                                                type="radio"
                                                id="FilterPrice"
                                                className="h-5 w-5 rounded border-gray-300"
                                                onChange={() => handlePriceFilter(0, 150000)}
                                                checked={minPrice >= 0 && maxPrice === 150000}
                                            />

                                            <span className="text-sm font-medium text-gray-700">
                                                0đ - 150,000đ
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <label htmlFor="FilterPrice" className="inline-flex items-center gap-2">
                                            <input
                                                name="FilterPrice"
                                                type="radio"
                                                id="FilterPrice"
                                                className="h-5 w-5 rounded border-gray-300"
                                                onChange={() => handlePriceFilter(150000, 300000)}
                                                checked={minPrice >= 150000 && maxPrice === 300000}
                                            />

                                            <span className="text-sm font-medium text-gray-700">
                                                150,000đ - 300,000đ
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <label htmlFor="FilterPrice" className="inline-flex items-center gap-2">
                                            <input
                                                name="FilterPrice"
                                                type="radio"
                                                id="FilterPrice"
                                                className="h-5 w-5 rounded border-gray-300"
                                                onChange={() => handlePriceFilter(300000, 450000)}
                                                checked={minPrice >= 300000 && maxPrice === 450000}
                                            />

                                            <span className="text-sm font-medium text-gray-700">
                                                300,000đ - 450,000đ
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <label htmlFor="FilterPrice" className="inline-flex items-center gap-2">
                                            <input
                                                name="FilterPrice"
                                                type="radio"
                                                id="FilterPrice"
                                                className="h-5 w-5 rounded border-gray-300"
                                                onChange={() => handlePriceFilter(450000, 1000000)}
                                                checked={minPrice === 450000 && 1000000 >= maxPrice}
                                            />

                                            <span className="text-sm font-medium text-gray-700">
                                                450,000đ trở lên
                                            </span>
                                        </label>
                                    </li>

                                </ul>

                                <div className="border-t border-gray-200 p-4">
                                    <div className="flex justify-between gap-4 items-center">
                                        <InputNumber
                                            formatter={(value) => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                            value={minPrice}
                                            min={0}
                                            onChange={(value: any) => setMinPrice(value)} />
                                        <span className="text-gray-400 font-light text-sm">đến</span>
                                        <InputNumber
                                            formatter={(value) => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                            value={(maxPrice)}
                                            min={0}
                                            onChange={(value: any) => setMaxPrice(value)} />
                                    </div>
                                </div>
                                <div className="px-4">
                                    <Slider
                                        range
                                        min={0}
                                        max={1000000}
                                        step={1000}
                                        tooltip={{ formatter: null }}
                                        value={[minPrice, maxPrice]}
                                        // defaultValue={[minPrice, maxPrice]}
                                        onChange={(values: [number, number]) => {
                                            setMinPrice(values[0]);
                                            setMaxPrice(values[1]);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 px-5">
                        <div className="flex justify-between py-8">
                            <div>
                                {queryString !== "" || selectedCategories.length > 0 || minPrice > 0 || maxPrice > 0 ? (
                                    <div className="text-lg px-5 ">
                                        <span className="mr-1">KẾT QUẢ TÌM KIẾM VỚI:</span> ({filteredProducts.length} KẾT QUẢ)
                                    </div>
                                ) : (<div className="text-lg px-5">
                                    <span className="mr-1">KẾT QUẢ TÌM KIẾM VỚI:</span> ({products.length} SẢN PHẨM)
                                </div>)}
                            </div>
                            <div className="flex items-center">
                                <span className="mr-3 text-sm text-[#333333]">Sắp xếp theo:</span>
                                <Select
                                    defaultValue={1}
                                    style={{ width: 200 }}
                                    options={[
                                        { value: 1, label: 'Mới nhất' },
                                        { value: 2, label: 'Cũ nhất' },
                                        { value: 3, label: 'Giá: Tăng dần' },
                                        { value: 4, label: 'Giá: Giảm dần' },
                                        { value: 5, label: 'Tên: A - Z' },
                                        { value: 6, label: 'Tên: Z - A' },

                                    ]}
                                    onChange={(value: Number) => setSortOption(value)}
                                />
                            </div>
                        </div>
                        <List
                            style={{ margin: 0 }}
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 20,
                                style: {
                                    textAlign: 'center' // Căn giữa phân trang
                                }
                            }}

                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 2,
                                lg: 4,
                                xl: 4,
                                xxl: 6,
                            }}

                            dataSource={sortedProducts}
                            renderItem={(item: any) => (
                                <ProductCard
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    price={item.price}
                                    discount={item.discount}
                                    image={item.images[0]}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductPage;