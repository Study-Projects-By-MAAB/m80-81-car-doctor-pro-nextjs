"use client";
import SocialSignIn from "@/components/Shared/SocialSignIn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
    const handleSignUp = async (e) => {
        e.preventDefault();
        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };
        const resp = await fetch("http://localhost:3000/signup/api", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

        if (resp.status === 200) {
            e.target.reset();
        }
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
                        <h6 className="text-3xl text-center font-semibold text-primary">SignUp</h6>
                        <form onSubmit={handleSignUp}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full mt-3"
                                />
                            </div>
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
                                Sign Up
                            </button>
                        </form>
                        <SocialSignIn></SocialSignIn>
                        <div className="mt-6 text-center">
                            <p>
                                Already have an account?{" "}
                                <Link href="/login" className="text-primary">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
