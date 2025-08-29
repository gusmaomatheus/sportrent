import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import AuthHeader from '../../components/ui/AuthHeader';

const AuthLayout: FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <main className="flex flex-grow flex-col items-center justify-center p-4 space-y-8">
                <AuthHeader />
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;