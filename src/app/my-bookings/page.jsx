"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
    const session = useSession();
    const [bookings, setBookings] = useState([]);
    const loadData = async () => {
        const res = await fetch(`http://localhost:3000/my-bookings/api/${session?.data?.user?.email}`);
        const data = await res.json();
        setBookings(data.myBookings);
    };
    useEffect(() => {
        loadData();
    }, [session]);

    return (
        <div className="container mx-auto">
            <div className="relative  h-72">
                <Image
                    className="absolute h-72 w-full left-0 top-0 object-cover"
                    src={"/assets/images/about_us/parts.jpg"}
                    alt="service"
                    width={1920}
                    height={1080}
                    style={{ width: "90vw" }}
                />
                <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">My Bookings</h1>
                </div>
            </div>
            <div className="mt-12">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Booking Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings?.map(({ _id, serviceTitle, date, price }) => (
                                <tr key={_id}>
                                    <td>{_id}</td>
                                    <th>{serviceTitle}</th>
                                    <td>{price}</td>
                                    <td>{date}</td>
                                    <td>
                                        <div className="flex items-center space-x-3 *:text-white">
                                            <button className="btn btn-primary">Edit</button>
                                            <button className="btn btn-error">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Page;
