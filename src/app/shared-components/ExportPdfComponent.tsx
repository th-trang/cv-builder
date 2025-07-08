"use client"

import React from 'react';

const ExportPdfComponent = () => {
    return (
        <div className="group relative cursor-pointer transition-all duration-500 ease-out overflow-hidden">
            <div className="flex items-center hover:bg-[#3d3dd6] rounded-xl transition-all duration-300">
                <div className="p-2.5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M13 11L21.2 2.80005" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 6.8V2H17.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="w-0 group-hover:w-22 mb-1 overflow-hidden transition-all duration-500 ease-out">
                    <span className="text-white text-xs font-medium whitespace-nowrap pr-2">Export as PDF</span>
                </div>
            </div>
        </div>
    )
}

export default ExportPdfComponent;