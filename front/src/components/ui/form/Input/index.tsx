import type { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

const Input: FC<InputProps> = ({ label, id, ...props }) => {
    return (
        <div className="w-full">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <input
                id={id}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                   focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                {...props}
            />
        </div>
    );
};

export default Input;