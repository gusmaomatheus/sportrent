import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

import LandingPage from "./pages/LandingPage";
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

const Dashboard: FC = () => <div className="p-8 text-center"><h1>Dashboard</h1></div>;
const QuadrasPage: FC = () => <div className="p-8 text-center"><h1>Quadras</h1></div>;
const AgendaPage: FC = () => <div className="p-8 text-center"><h1>Agenda</h1></div>;
const PagamentoPage: FC = () => <div className="p-8 text-center"><h1>Pagamentos</h1></div>;

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route element={<AuthLayout />}>
                <Route path="/login" element={<SignInPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
            </Route>

            <Route element={<MainLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/quadras" element={<QuadrasPage />} />
                <Route path="/agenda" element={<AgendaPage />} />
                <Route path="/pagamento" element={<PagamentoPage />} />
            </Route>
        </Routes>
    );
}

export default App;