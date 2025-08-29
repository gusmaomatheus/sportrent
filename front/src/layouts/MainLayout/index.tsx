import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/ui/Header';

const MainLayout: FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;