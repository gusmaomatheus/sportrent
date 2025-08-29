import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/ui/Header';

const HomePage: FC = () => <div className="p-8 text-center"><h1>Dashboard</h1></div>;
const QuadrasPage: FC = () => <div className="p-8 text-center"><h1>Quadras</h1></div>;
const AgendaPage: FC = () => <div className="p-8 text-center"><h1>Agenda</h1></div>;
const PagamentoPage: FC = () => <div className="p-8 text-center"><h1>Pagamentos</h1></div>;

const App: FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/quadras" element={<QuadrasPage />} />
                    <Route path="/agenda" element={<AgendaPage />} />
                    <Route path="/pagamento" element={<PagamentoPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;