"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialSignIn = () => {
    const router = useRouter();
    const handleSocialLogin = async (provider) => {
        const resp = await signIn(provider);
        console.log(resp);
        if (resp?.status === "authenticated") {
            router.push("/");
        }
    };
    return (
        <div className="mt-8 text-center">
            <p>Or Sign In with</p>
            <div className="flex justify-center gap-4 mt-8 *:border-none *:bg-[#f5f5f8] *:rounded-full *:p-3 text-xl">
                {/* <button>
    <FaFacebookF className="text-blue-500" />
</button> */}
                <button onClick={() => handleSocialLogin("github")}>
                    <FaGithub />
                </button>
                <button onClick={() => handleSocialLogin("google")}>
                    <FcGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialSignIn;
