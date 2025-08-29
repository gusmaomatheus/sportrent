import type { FC, InputHTMLAttributes } from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import Input from '../Input';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

const PasswordInput: FC<PasswordInputProps> = ({ label, id, ...props }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const toggleShowPassword = (): void => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="relative w-full">
            <Input
                label={label}
                id={id}
                {...props}
                type={showPassword ? 'text' : 'password'}
            />
            <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 text-gray-500 hover:text-gray-700 hover:cursor-pointer"
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}>
                {showPassword ? <FaEyeSlash size="18px" /> : <FaEye size="18px" />}
            </button>
        </div>
    );
};

export default PasswordInput;