"use client"

import { div } from "framer-motion/client";
import React from "react";

interface LanguageProperties {
    name: string;
    proficiency: string;
    languageColor: string;
    firstColor: string;
    secondColor: string;
    width: string;
}

interface LanguageComponentProps {
    items: LanguageProperties[];
    title?: string;
}

const LanguageComponent: React.FC<LanguageComponentProps> = ({ items, title }) => {
    return (
        <div className="language-section">
            <h3 className="text-2xl font-bold text-[#0173ef] mb-6">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {items.map((item, index) => (
                    <div key={index} className="rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                        <div className={`language-item flex items-center justify-between mb-3`}>
                            <h4 className={`text-lg font-medium ${item.languageColor}`}>{item.name}</h4>
                            <span className={`text-xs font-medium ${item.languageColor} bg-blue-100 px-2 py-1 rounded-full`}>{item.proficiency}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className={`bg-gradient-to-r ${item.firstColor} ${item.secondColor} h-2 rounded-full ${item.width}`}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LanguageComponent;