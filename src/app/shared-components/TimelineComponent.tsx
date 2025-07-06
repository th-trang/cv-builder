"use client"

import React from "react";

interface TimelineComponentProps {
    title: string;
    timePeriod: string;
    location?: string;
    detailTitle?: string;
    detailSubtitle?: string;
    detailDescription?: string;
    bulletPoints?: string[];
}

const TimelineComponent: React.FC<TimelineComponentProps> = ({
    title,
    timePeriod,
    location,
    detailTitle,
    detailSubtitle,
    detailDescription,
    bulletPoints
}) => {
    return (
        <div className="education">
            <h3 className="text-2xl font-bold text-[#0173ef] mb-4">{title}</h3>
            <div className="timeline relative">
                {/* Vertical line - starts from first circle */}
                <div className="absolute left-1/5 top-2 bottom-0 w-px bg-[#0173ef] transform -translate-x-1/2"></div>
                <div className="education-item-1 flex flex-row mb-8 relative">
                    {/* Circle on the timeline */}
                    <div className="absolute left-1/5 top-2 w-3 h-3 bg-[#0173ef] rounded-full transform -translate-x-1/2 z-10"></div>

                    <div className="time-period basis-1/5 flex flex-col gap-y-2 pr-8">
                        <span className="text-lg font-medium text-[#0173ef]">{timePeriod}</span>
                        <span className="text-base font-normal">{location}</span>
                    </div>
                    <div className="details basis-4/5 flex flex-col gap-y-2 pl-8">
                        <h4 className="text-xl font-medium text-[#0173ef]">{detailTitle}</h4>
                        <p className="text-xl font-medium text-[#FF6600]">{detailSubtitle}</p>
                        <p className="text-base font-normal leading-relaxed tracking-wide">
                            {detailDescription}
                        </p>
                        {bulletPoints && bulletPoints.length > 0 && (
                            <ul className="list-disc ml-8">
                                {bulletPoints.map((point, index) => (
                                    <li key={index} className="text-base font-normal leading-relaxed tracking-wide">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineComponent;