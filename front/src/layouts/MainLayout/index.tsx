import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

const MainLayout: FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;