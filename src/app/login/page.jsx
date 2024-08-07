"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import SocialSignIn from "@/components/Shared/SocialSignIn";

const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const path = searchParams.get("redirect");

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const resp = await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: path ? path : "/",
        });
        console.log(resp);
        // if (resp.status === 200) {
        //     router.push("/");
        // }
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
                        <SocialSignIn></SocialSignIn>
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

export default Page;
