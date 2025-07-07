'use client'

import Button from "@/app/shared-components/ButtonComponent"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import React from "react"
import ResumeDetails from "./ResumeDetail"

const ResumePage = () => {
    const b = useTranslations("Button")
    const router = useRouter();

    return (
        <div className="min-h-screen bg-black relative">
            {/* Backdrop blur overlay */}
            <div className="fixed inset-0 bg-black/20 z-40 pointer-events-none"></div>

            {/* Floating Header */}
            <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#2c2ccc] backdrop-blur-xl border border-transparent shadow-2xl rounded-full">
                <div className="px-6 py-3">
                    <div className="flex items-center gap-4">
                        {/* Back button */}
                        <div
                            onClick={() => router.back()}
                            className="group relative cursor-pointer transition-all duration-500 ease-out overflow-hidden"
                        >
                            <div className="flex items-center hover:bg-[#3d3dd6] rounded-xl transition-all duration-300">
                                <div className="p-2.5 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.26 15.53L9.73999 12L13.26 8.46997" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="w-0 group-hover:w-10 mb-1 overflow-hidden transition-all duration-500 ease-out">
                                    <span className="text-white text-xs font-medium whitespace-nowrap pr-2">Back</span>
                                </div>
                            </div>
                        </div>

                        {/* Edit button */}
                        <div className="group relative cursor-pointer transition-all duration-500 ease-out overflow-hidden">
                            <div className="flex items-center hover:bg-[#3d3dd6] rounded-xl transition-all duration-300">
                                <div className="p-2.5 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M13.7601 3.59997L5.5501 12.29C5.2401 12.62 4.9401 13.27 4.8801 13.72L4.5101 16.96C4.3801 18.13 5.2201 18.93 6.3801 18.73L9.6001 18.18C10.0501 18.1 10.6801 17.77 10.9901 17.43L19.2001 8.73997C20.6201 7.23997 21.2601 5.52997 19.0501 3.43997C16.8501 1.36997 15.1801 2.09997 13.7601 3.59997Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.3899 5.05005C12.8199 7.81005 15.0599 9.92005 17.8399 10.2" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.5 22H21.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="w-0 group-hover:w-8 mb-1 overflow-hidden transition-all duration-500 ease-out">
                                    <span className="text-white text-xs font-medium whitespace-nowrap pr-2">Edit</span>
                                </div>
                            </div>
                        </div>

                        {/* Save button */}
                        <div className="group relative cursor-pointer transition-all duration-500 ease-out overflow-hidden">
                            <div className="flex items-center hover:bg-[#3d3dd6] rounded-xl transition-all duration-300">
                                <div className="p-2.5 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 24" fill="none">
                                        <path d="M12.9056 5.88H5.12561C3.41561 5.88 2.01562 7.27999 2.01562 8.98999V20.35C2.01562 21.8 3.05562 22.42 4.32562 21.71L8.25562 19.52C8.67562 19.29 9.35563 19.29 9.76562 19.52L13.6956 21.71C14.9656 22.42 16.0056 21.8 16.0056 20.35V8.98999C16.0156 7.27999 14.6156 5.88 12.9056 5.88Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.0156 8.98999V20.35C16.0156 21.8 14.9756 22.41 13.7056 21.71L9.77563 19.52C9.35563 19.29 8.67562 19.29 8.25562 19.52L4.32562 21.71C3.05562 22.41 2.01562 21.8 2.01562 20.35V8.98999C2.01562 7.27999 3.41561 5.88 5.12561 5.88H12.9056C14.6156 5.88 16.0156 7.27999 16.0156 8.98999Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22.0156 5.10999V16.47C22.0156 17.92 20.9756 18.53 19.7056 17.83L16.0156 15.77V8.98999C16.0156 7.27999 14.6156 5.88 12.9056 5.88H8.01562V5.10999C8.01562 3.39999 9.41561 2 11.1256 2H18.9056C20.6156 2 22.0156 3.39999 22.0156 5.10999Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="w-0 group-hover:w-9 mb-1 overflow-hidden transition-all duration-500 ease-out">
                                    <span className="text-white text-xs font-medium whitespace-nowrap pr-2">Save</span>
                                </div>
                            </div>
                        </div>

                        {/* Export button */}
                        <div className="group relative cursor-pointer transition-all duration-500 ease-out overflow-hidden">
                            <div className="flex items-center hover:bg-[#3d3dd6] rounded-xl transition-all duration-300">
                                <div className="p-2.5 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M13 11L21.2 2.80005" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 6.8V2H17.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="w-0 group-hover:w-12 mb-1 overflow-hidden transition-all duration-500 ease-out">
                                    <span className="text-white text-xs font-medium whitespace-nowrap pr-2">Export</span>
                                </div>
                            </div>
                        </div>

                        {/*Language button*/}
                        <div className="group relative cursor-pointer transition-all duration-500 ease-out overflow-hidden">
                            <div className="flex items-center hover:bg-[#3d3dd6] rounded-xl transition-all duration-300">
                                <div className="p-2.5 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19.06 18.67L16.92 14.4L14.78 18.67" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.17 17.9099H18.69" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.92 22.0001C14.12 22.0001 11.84 19.73 11.84 16.92C11.84 14.12 14.11 11.8401 16.92 11.8401C19.72 11.8401 22 14.11 22 16.92C22 19.73 19.73 22.0001 16.92 22.0001Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5.02 2H8.94C11.01 2 12.01 3.00002 11.96 5.02002V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.00995 5.84985H4.94995" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.96997 5.16992V5.84991" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.98994 5.83997C7.98994 7.58997 6.61994 9.00995 4.93994 9.00995" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.0099 9.01001C8.2799 9.01001 7.61991 8.62 7.15991 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="w-0 group-hover:w-10 mb-1 overflow-hidden transition-all duration-500 ease-out">
                                    <span className="text-white text-xs font-medium whitespace-nowrap pr-2">EN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="px-12 py-12">
                <ResumeDetails />
            </main>
        </div>
    )
}

export default ResumePage;