import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white py-20">
                <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
                    <div className="flex-1">
                        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                            Sportrent — transforme seu espaço esportivo em renda recorrente
                        </h1>
                        <p className="mt-4 text-lg max-w-xl">
                            Plataforma para proprietários de quadras, campos e academias administrarem anúncios, disponibilidades e reservas de forma simples e segura.
                        </p>

                        <ul className="mt-6 text-sm opacity-90 space-y-2">
                            <li>✓ Anuncie seu espaço e gerencie disponibilidade</li>
                            <li>✓ Receba reservas e pagamentos com segurança</li>
                            <li>✓ Atraia mais clientes com avaliações e fotos</li>
                        </ul>
                    </div>
                    <div className="flex-1 lg:flex-none lg:w-1/2">
                        <div className="w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden bg-white/10 p-8">
                            {/* replace with application logo (gen by IA) */}
                            <img
                                src="/vite.svg"
                                alt="hero"
                                className="w-full h-48 object-contain opacity-90"
                            />
                        </div>
                    </div>
                </div>
            </header>
            <section className="container mx-auto px-6 lg:px-20 py-12">
                <h2 className="text-2xl font-semibold mb-6">O que o Sportrent oferece para proprietários</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 border rounded-lg cursor-pointer hover:shadow-lg transition hover:scale-[1.02]">
                        <h3 className="font-semibold mb-2">Anuncie em minutos</h3>
                        <p className="text-sm text-neutral-600">Crie um anúncio com fotos, descrição e regras do espaço — seus horários disponíveis já podem ser publicados.</p>
                    </div>
                    <div className="p-6 border rounded-lg cursor-pointer hover:shadow-lg transition hover:scale-[1.02]">
                        <h3 className="font-semibold mb-2">Gerencie reservas</h3>
                        <p className="text-sm text-neutral-600">Confirme ou recuse pedidos, veja calendário de ocupação e administre bloqueios rapidamente.</p>
                    </div>
                    <div className="p-6 border rounded-lg cursor-pointer hover:shadow-lg transition hover:scale-[1.02]">
                        <h3 className="font-semibold mb-2">Receba pagamentos</h3>
                        <p className="text-sm text-neutral-600">Integração com métodos de pagamento para receber com segurança e acompanhar repasses.</p>
                    </div>
                    <div className="p-6 border rounded-lg cursor-pointer hover:shadow-lg transition hover:scale-[1.02]">
                        <h3 className="font-semibold mb-2">Promoções e descontos</h3>
                        <p className="text-sm text-neutral-600">Crie ofertas para horários ociosos e aumente a ocupação do seu espaço.</p>
                    </div>
                    <div className="p-6 border rounded-lg cursor-pointer hover:shadow-lg transition hover:scale-[1.02]">
                        <h3 className="font-semibold mb-2">Relatórios e avaliações</h3>
                        <p className="text-sm text-neutral-600">Acompanhe histórico de reservas, receita e avaliações para tomar decisões informadas.</p>
                    </div>
                    <div className="p-6 border rounded-lg cursor-pointer hover:shadow-lg transition hover:scale-[1.02]">
                        <h3 className="font-semibold mb-2">Suporte dedicado</h3>
                        <p className="text-sm text-neutral-600">Equipe pronta para ajudar com onboarding e dúvidas sobre gestão do espaço.</p>
                    </div>
                </div>
            </section>
            <section className="bg-neutral-50 py-10">
                <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-semibold">Comece a monetizar o seu espaço hoje</h3>
                        <p className="text-sm text-neutral-600">Crie sua conta como proprietário, publique seu espaço e comece a receber reservas.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link to="/cadastro" className="bg-emerald-600 text-white text-center px-5 py-2 rounded w-[300px] hover:bg-emerald-500">Criar conta</Link>
                    </div>
                </div>
            </section>
            <footer className="mt-auto bg-neutral-900 text-white py-8">
                <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h4 className="font-semibold">Sportrent</h4>
                        <p className="text-sm text-neutral-300 mt-2">Gerencie reservas e transforme seu espaço esportivo em uma fonte de renda.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold">Contato</h4>
                        <ul className="text-sm text-neutral-300 mt-2 space-y-1">
                            <li>Email: parceiros@sportrent.com</li>
                            <li>Telefone: +55 (11) 99999-9999</li>
                            <li>Endereço: Rua Exemplo, 123 — São Paulo, SP</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold">Ajuda</h4>
                        <ul className="text-sm text-neutral-300 mt-2 space-y-1">
                            <li><Link to="/login" className="underline">Entrar</Link></li>
                            <li><Link to="/cadastro" className="underline">Criar conta</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 border-t border-neutral-800 pt-4 text-center text-sm text-neutral-400">
                    © {new Date().getFullYear()} Sportrent — Todos os direitos reservados
                </div>
            </footer>
        </div>
    );
}