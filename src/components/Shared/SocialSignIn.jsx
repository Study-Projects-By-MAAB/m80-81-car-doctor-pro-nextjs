"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialSignIn = () => {
    // const router = useRouter();
    const session = useSession();
    const searchParams = useSearchParams();
    const path = searchParams.get("redirect");

    console.log(session);
    const handleSocialLogin = (provider) => {
        const resp = signIn(provider, { redirect: true, callbackUrl: path ? path : "/" });
        console.log(resp);
    };
    // if (session?.status === "authenticated") {
    //     router.push("/");
    // }
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
