"use client";
import { useSession } from "next-auth/react";
import React from "react";

const First = ({ children }) => {
    const session = useSession();
    if (session?.status === "loading") {
        return <div className="flex items-center justify-center min-h-screen">loading...</div>;
    }
    return <>{children}</>;
};

export default First;
