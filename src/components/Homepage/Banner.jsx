import React from "react";

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className=" carousel w-full mt-12">
                {banners.map((banner, idx) => (
                    <div
                        style={{
                            backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                                idx + 1
                            }.jpg)`,
                        }}
                        key={idx}
                        id={`slide${idx + 1}`}
                        className="carousel-item relative w-full bg-cover bg-no-repeat h-[600px] rounded-xl"
                    >
                        <div className="size-full text-white flex items-center pl-[100px]">
                            <div className="space-y-6">
                                <h1 className="text-6xl font-bold max-w-[470px]">{banner.title}</h1>
                                <p className="w-[522px] text-lg">{banner.description}</p>
                                <div className="flex gap-5">
                                    <button className="btn btn-primary text-white">Discover More</button>
                                    <button className="btn btn-outline text-white ">Latest Project</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform bottom-12 right-12 gap-5">
                            <a href={banner.previous} className="btn btn-circle">
                                ❮
                            </a>
                            <a href={banner.next} className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const banners = [
    {
        title: "Affordable Price For Car Servicing",
        description:
            "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide2",
        previous: "#slide6",
    },
    {
        title: "Affordable Price For Car Servicing",
        description:
            "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide3",
        previous: "#slide1",
    },
    {
        title: "Affordable Price For Car Servicing",
        description:
            "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide4",
        previous: "#slide2",
    },
    {
        title: "Affordable Price For Car Servicing",
        description:
            "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide5",
        previous: "#slide3",
    },
    {
        title: "Affordable Price For Car Servicing",
        description:
            "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide6",
        previous: "#slide4",
    },
    {
        title: "Affordable Price For Car Servicing",
        description:
            "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide1",
        previous: "#slide5",
    },
];

export default Banner;
