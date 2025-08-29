import type { FC } from 'react';
import { GiSoccerField } from 'react-icons/gi';

const AuthHeader: FC = () => {
    return (
        <div className="flex flex-col items-center w-full mb-6">
            <div
                className="flex flex-col items-center gap-y-3 text-emerald-600">
                <GiSoccerField size="56px" />
                <span className="text-3xl font-bold text-gray-800">
                    Sport Rent
                </span>
            </div>

            <p className="mt-3 text-gray-600 text-center">
                A sua plataforma completa para aluguel de quadras esportivas.
            </p>
        </div>
    );
};

export default AuthHeader;