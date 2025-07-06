"use client";

import { Metadata } from "next";
import { usePathname } from "next/navigation";
import React from "react";


const ClientLayout = ({children, params} : {children: React.ReactNode, params: {lang: string} }) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default ClientLayout;