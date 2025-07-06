'use client';

import React from 'react';
import './ButtonComponent.css';

interface ButtonProps {
    height?: number | string;
    width?: number | string;
    btnName: string;
    border?: string;
    borderStyle?: "none" | "solid" | "dashed" | "dotted" | "double";
    color?: string;
    bg?: string;
    px?: string;
    py?: string;
    fontWeight?: string;
    disabled?: boolean;
    onClick?: () => void;
    rounded?: boolean;
    roundedClass?: string;
    pointer?: boolean;
    className?: string;
    style?: React.CSSProperties;
}


const Button: React.FC<ButtonProps> = ({
    className = '',
    btnName,
    height,
    width,
    border,
    borderStyle = 'solid',
    color,
    bg,
    px = "px-[15px] sm:px-[20px]",
    py = "py-[13px] sm:py-[15px]",
    fontWeight = "font-semibold",
    disabled,
    onClick,
    rounded = true,
    roundedClass = "rounded-lg",
    pointer = true,
    style = {},
}) => {
    return (
        <div className={`${className}`}>
            <button
                className={`btn flex items-center justify-center gap-x-[10px] min-w-[52px]
                            ${rounded ? roundedClass : ''} ${height || ''} ${width || ''} ${bg || ''} ${border || ''} 
                            ${borderStyle ? `border-${borderStyle}` : 'border-solid'}
                            ${px} ${py} ${fontWeight} whitespace-nowrap ${color || ''}
                            ${disabled ? 'cursor-not-allowed opacity-50' : ''}
                            ${pointer ? 'cursor-pointer' : 'cursor-default'}`}
                onClick={disabled ? undefined : onClick}
                disabled={disabled}
                style={style}
            >
                {btnName}
            </button>
        </div>
    );
}

export default Button;