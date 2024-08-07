"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = ({ params }) => {
    const { data } = useSession();
    const [booking, setBooking] = useState({});

    const loadBooking = useCallback(async () => {
        {
            const res = await fetch(`http://localhost:3000/my-bookings/api/booking/${params.id}`);
            const bookingDetails = await res.json();
            setBooking(bookingDetails.data);
        }
    }, [params.id]);

    const { _id, title, img, price, phone, address, date } = booking || {};

    const handleBooking = async (e) => {
        e.preventDefault();
        const updateBookings = {
            address: e.target.address.value,
            phone: e.target.phone.value,
            date: e.target.date.value,
        };

        const resp = await fetch(`http://localhost:3000/my-bookings/api/booking/${_id}`, {
            method: "PATCH",
            body: JSON.stringify(updateBookings),
            headers: {
                "content-type": "application/json",
            },
        });
        if (resp.status === 200) {
            const response = await resp.json();
            toast.success(response?.message);
        }
    };

    useEffect(() => {
        loadBooking();
    }, [loadBooking, params]);
    return (
        <div className="container mx-auto">
            {/* <ToastContainer /> */}
            <div className="relative  h-72">
                <Image
                    className="absolute h-72 w-full left-0 top-0 object-cover"
                    src={img}
                    alt="service"
                    width={1920}
                    height={1080}
                    style={{ width: "90vw" }}
                />
                <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">Checkout {title}</h1>
                </div>
            </div>
            <div className="my-12 bg-slate-300 p-12">
                <form onSubmit={handleBooking}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                defaultValue={data?.user?.name}
                                readOnly
                                type="text"
                                name="name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input
                                defaultValue={date && new Date(date)?.toISOString()?.substring(0, 10)}
                                type="date"
                                name="date"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                defaultValue={data?.user?.email}
                                readOnly
                                type="text"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due amount</span>
                            </label>
                            <input defaultValue={price} readOnly type="text" name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                defaultValue={phone}
                                required
                                type="number"
                                name="phone"
                                placeholder="Your Phone"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Present Address</span>
                            </label>
                            <input
                                defaultValue={address}
                                type="text"
                                name="address"
                                placeholder="Your Address"
                                className="input input-bordered"
                            />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" defaultValue="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
