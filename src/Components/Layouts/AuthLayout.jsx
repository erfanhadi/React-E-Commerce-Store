import React from "react";
import { Outlet } from "react-router";

function AuthLayout() {
    return (
        <div className="w-dvw h-dvh flex items-center justify-center bg-[#eae9e9]">
            <div className="w-full! rounded-2xl p-6 md:w-[426px]! bg-[#f6f6f6]">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;
