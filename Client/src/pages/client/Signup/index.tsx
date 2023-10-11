import { useState } from "react";
import { Link } from "react-router-dom";

const signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return <>
        <div className="mx-auto h-[100vh]  px-4 pt-5 bg-blue-50">
            <div className="mx-auto max-w-lg">
                <Link to={'/'}>
                    <div className="flex justify-center">
                        <img className="max-w-full h-auto w-[150px] md:w-[180px]" src="../../../public/image/logo.png" alt="" />
                    </div>
                </Link>
                {/* <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
                    Welcome Back
                </h1> */}
                <form
                    action=""
                    className="mb-0 mt-3 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white"
                >
                    <p className="text-center text-gray-500 text-lg font-medium">Please sign Up in to continue</p>

                    <div>
                        <label htmlFor="email" className="sr-only">Fullname</label>
                        <div className="relative ">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm border outline-none text-gray-500"
                                placeholder="Full Name"
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor"
                                    className="w-5 h-5 text-gray-400">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>

                            </span>
                        </div>
                        <div className="relative  mt-7">
                            {/* <span className="absolute py-1 px-4 text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                Error
                            </span> */}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative ">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm border outline-none text-gray-500"
                                placeholder="Email"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-gray-400">
                                    <path
                                        strokeLinecap="round"
                                        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                </svg>

                            </span>
                        </div>
                        <div className="relative">
                            {/* <span className="absolute py-1 px-4 text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                              Error
                            </span> */}
                        </div>
                    </div>


                    <div >
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative mt-7">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm border outline-none text-gray-500"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer" onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-400">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 
                                            10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65
                                            3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>


                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-400">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007
                                            9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )}
                            </span>
                        </div>
                        <div className="relative mb-7">
                            {/* <span className="absolute py-1 px-4 text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                               Error
                            </span> */}
                        </div>
                    </div>



                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white "
                    >
                        Sign up
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account?
                        <Link className="underline text-primary font-semibold ml-1"
                            to={`/signin`}
                        >
                            Sign in
                        </Link>
                    </p>
                </form>
            </div >
        </div >
    </>
}
export default signup;