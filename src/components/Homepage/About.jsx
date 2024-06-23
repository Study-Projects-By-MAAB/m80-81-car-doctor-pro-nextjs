import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div className="my-32">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[61px]">
                    <div className="relative h-full">
                        <Image
                            src={"/assets/images/about_us/person.jpg"}
                            alt="person"
                            height={473}
                            width={460}
                            // style={{ width: "460px", height: "473px", "flex-shrink": 0 }}
                            className="rounded-lg object-cover w-[460px] h-[473px]"
                        />
                        <Image
                            src={"/assets/images/about_us/parts.jpg"}
                            alt="parts"
                            height={332}
                            width={327}
                            className="absolute w-[327px] h-[332px] object-cover rounded-lg border-white border-[10px] right-[61px] -bottom-[84px]"
                        />
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-5">
                            <p className="text-xl font-bold text-[#FF3811]">About Us</p>
                            <h2 className="font-bold text-[45px] w-[376px]">
                                We are qualified & of experience in this field
                            </h2>
                        </div>
                        <div className="text-[#737373] space-y-5 w-[489px]">
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised words which don&apost look even
                                slightly believable.
                            </p>
                            <p>
                                the majority have suffered alteration in some form, by injected humour, or randomised words which
                                don&apost look even slightly believable.
                            </p>
                        </div>
                        <button className="btn btn-primary text-white text-lg">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
