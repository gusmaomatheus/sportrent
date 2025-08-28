import type { FC } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { GiSoccerField } from "react-icons/gi";
import CloseIcon from '../../icons/CloseIcon';
import MenuIcon from '../../icons/MenuIcon';

type NavLinkItem = {
    to: string;
    label: string;
};

const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const navLinks: NavLinkItem[] = [
        { to: '/', label: 'Início' },
        { to: '/sobre', label: 'Sobre' },
        { to: '/contato', label: 'Contato' },
    ];

    const handleLinkClick = (): void => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-emerald-600 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/" className="flex items-center gap-x-3 text-2xl font-bold tracking-wider">
                    <GiSoccerField size="48px" />
                    <span>Sport Rent</span>
                </Link>

                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `text-lg transition-colors duration-300 hover:text-emerald-200 ${isActive ? 'font-semibold border-b-2 border-white' : ''
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            <nav
                className={`
          md:hidden bg-emerald-700 overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}
        `}
            >
                <ul className="flex flex-col items-center">
                    {navLinks.map((link) => (
                        <li key={link.to} className="w-full">
                            <NavLink
                                to={link.to}
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `block text-center text-lg py-3 w-full transition-colors duration-300 hover:bg-emerald-600 ${isActive ? 'font-bold bg-emerald-800' : ''
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;