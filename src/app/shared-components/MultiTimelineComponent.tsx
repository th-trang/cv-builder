"use client"

import React from "react";

interface TimelineItem {
    timePeriod: string;
    location?: string;
    detailTitle: string;
    detailSubtitle?: string;
    detailDescription: string;
    bulletPoints?: string[];
}

interface MultiTimelineComponentProps {
    title: string;
    items: TimelineItem[];
}

const MultiTimelineComponent: React.FC<MultiTimelineComponentProps> = ({
    title,
    items
}) => {
    return (
        <div className="timeline-section">
            <h3 className="text-2xl font-bold text-[#0173ef] mb-4">{title}</h3>
            <div className="timeline relative">
                {/* Vertical line - spans the entire timeline */}
                <div className="absolute left-1/5 top-2 w-px bg-[#0173ef] transform -translate-x-1/2" style={{ height: `calc(100% - 0.5rem)` }}></div>
                
                {items.map((item, index) => (
                    <div key={index} className={`timeline-item flex flex-row ${index < items.length - 1 ? 'mb-8' : ''} relative`}>
                        {/* Circle on the timeline */}
                        <div className="absolute left-1/5 top-2 w-3 h-3 bg-[#0173ef] rounded-full transform -translate-x-1/2 z-10"></div>

                        <div className="time-period basis-1/5 flex flex-col gap-y-2 pr-8">
                            <span className="text-lg font-medium text-[#0173ef]">{item.timePeriod}</span>
                            {item.location && <span className="text-base font-normal">{item.location}</span>}
                        </div>
                        <div className="details basis-4/5 flex flex-col gap-y-2 pl-8">
                            <h4 className="text-xl font-medium text-[#0173ef]">{item.detailTitle}</h4>
                            <p className="text-xl font-medium text-[#FF6600]">{item.detailSubtitle}</p>
                            <p className="text-base font-normal leading-relaxed tracking-wide">
                                {item.detailDescription}
                            </p>
                            {item.bulletPoints && item.bulletPoints.length > 0 && (
                                <ul className="list-disc ml-8">
                                    {item.bulletPoints.map((point, pointIndex) => (
                                        <li key={pointIndex} className="text-base font-normal leading-relaxed tracking-wide">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultiTimelineComponent;
