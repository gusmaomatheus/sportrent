import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/ui/Header';

const HomePage: FC = () => <div className="p-8 text-center"><h1>Página Inicial</h1></div>;
const SobrePage: FC = () => <div className="p-8 text-center"><h1>Página Sobre</h1></div>;
const ContatoPage: FC = () => <div className="p-8 text-center"><h1>Página de Contato</h1></div>;

const App: FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sobre" element={<SobrePage />} />
                    <Route path="/contato" element={<ContatoPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;