"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    const session = useSession();
    console.log(session);
    const navItems = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Services",
            path: "/services",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "Contact",
            path: "/contact",
        },
    ];

    return (
        <div className="bg-base-100">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className="font-semibold py-1 hover:text-primary duration-300"
                                >
                                    {item.title}
                                </Link>
                            ))}
                            {/* <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Item 3</a>
                            </li> */}
                        </ul>
                    </div>
                    <Link href={"/"} className="hidden lg:flex">
                        <Image src={"/assets/logo.svg"} alt="logo" height={60} width={100} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link key={item.path} href={item.path} className="font-semibold hover:text-primary duration-300">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    {/* <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Item 1</a>
                    </li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a>Item 3</a>
                    </li>
                </ul> */}
                </div>
                <div className="navbar-end">
                    <div className="flex items-center space-x-4">
                        <HiOutlineShoppingBag className="text-xl" />
                        <IoSearchOutline className="text-xl" />
                        <a className="btn btn-outline px-8 btn-primary">Appointment</a>
                        {!session?.data?.user ? (
                            <Link href={"/login"} className="btn btn-primary text-white">
                                Login
                            </Link>
                        ) : (
                            <>
                                {session?.data?.user?.image && (
                                    <Image
                                        alt={session?.data?.user.name}
                                        height={40}
                                        width={40}
                                        src={session?.data?.user.image}
                                        className="rounded-full"
                                        title={session?.data?.user.name}
                                    ></Image>
                                )}
                                <button onClick={() => signOut({ redirect: false })} className="btn btn-primary text-white">
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
