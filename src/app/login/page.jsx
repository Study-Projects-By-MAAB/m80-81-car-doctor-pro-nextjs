"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const page = () => {
    const handleLogin = async (e) => {
        e.preventDefault();
    };
    return (
        <div className="container mx-auto lg:p-24">
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-lg items-center">
                    <div>
                        <Image
                            alt="login image"
                            height={502}
                            width={460}
                            src="/assets/images/login/login.svg"
                            className="mx-auto"
                        />
                    </div>
                    <div className="border p-12 rounded-lg">
                        <h6 className="text-3xl text-center font-semibold text-primary">Login</h6>
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full mt-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Your password"
                                    className="input input-bordered w-full mt-3"
                                />
                            </div>
                            <button type="submit" className="w-full py-2 mt-4 btn btn-primary text-white text-lg">
                                Login
                            </button>
                        </form>
                        <div className="mt-8 text-center">
                            <p>Or Sign In with</p>
                            <div className="flex justify-center gap-4 mt-8 *:border-none *:bg-[#f5f5f8] *:rounded-full *:p-3 text-xl">
                                {/* <button>
                                    <FaFacebookF className="text-blue-500" />
                                </button> */}
                                <button>
                                    <FaGithub />
                                </button>
                                <button>
                                    <FcGoogle />
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <p>
                                Doesn&apos;t have an account?{" "}
                                <Link href="/signup" className="text-primary">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
