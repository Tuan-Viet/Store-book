import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const signin = () => {
    const [form] = Form.useForm();
    return <>
        <div className="mx-auto h-[100vh]  px-4 pt-5 bg-blue-50">
            <div className="mx-auto max-w-lg">
                <Link to={'/'}>
                    <div className="flex justify-center">
                        <img className="max-w-full h-auto w-[130px] md:w-[150px]" src="../../../public/image/logo.png" alt="" />
                    </div>
                </Link>
                <Form
                    form={form}
                    // onFinish={onFinish}
                    initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
                    style={{ maxWidth: 600 }}
                    className="mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white my-6"
                    scrollToFirstError
                >
                    <p className="text-center text-gray-500 text-lg font-medium">Please sign in in to continue</p>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input placeholder="E-mail"
                            className="p-3"
                            suffix={
                                <span className="">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 text-gray-500">
                                        <path
                                            strokeLinecap="round"
                                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                    </svg>
                                </span>
                            } />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >

                        <Input.Password placeholder="Password"
                            className="p-3"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit"
                            className="w-full h-[47px] bg-primary  text-white"
                        >
                            Sign in
                        </Button>
                    </Form.Item>
                    <p className="text-center text-sm text-gray-500">
                        Don't have an account?
                        <Link className="underline text-primary font-semibold ml-1"
                            to={`/signup`}
                        >
                            Sign up
                        </Link>
                    </p>
                </Form>
            </div >
        </div >
    </>
}
export default signin;