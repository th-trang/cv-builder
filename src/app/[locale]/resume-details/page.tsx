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
        <section className="px-12 py-12">
                {/*Back button*/}
                <div className="flex-grow items-center flex py-5 z-4 cursor-pointer"
                    onClick={() => router.back()}
                >
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.26 15.53L9.73999 12L13.26 8.46997" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>


            <ResumeDetails />

            {/* <div className="action-btn flex flex-row px-10 py-5 items-center justify-center gap-5">
                <Button
                    btnName={b('save')}
                    color="text-[#e29000] text-xl"
                    onClick={() => { }}
                />
                <Button
                    btnName={b('export')}
                    color="text-[#e29000] text-xl"
                    onClick={() => { }}
                />
            </div> */}

        </section>
    )
}

export default ResumePage;