import type { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'common';
    size?: 'small' | 'medium' | 'large';
}

const Button: FC<ButtonProps> = ({
    variant = 'common',
    size = 'medium',
    children,
    className,
    ...props
}) => {

    const baseStyles =
        'w-full flex justify-center rounded-md shadow-sm font-medium focus:outline-none hover:cursor-pointer focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200';

    const variantStyles = {
        primary: 'text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500',
        secondary: 'text-sky-800 bg-sky-100 hover:bg-sky-200 focus:ring-sky-500',
        common: 'text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-gray-500',
    };

    const sizeStyles = {
        small: 'py-1 px-3 text-xs',
        medium: 'py-2 px-4 text-sm',
        large: 'py-3 px-6 text-base',
    };

    const combinedClassName = [
        baseStyles,
        variantStyles[variant] || variantStyles.common,
        sizeStyles[size] || sizeStyles.medium,
        className,
    ].join(' ');

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};

export default Button;