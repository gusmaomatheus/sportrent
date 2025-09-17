import type { FC } from 'react';

const Footer: FC = () => (
  <footer className="w-full bg-emerald-700 text-white shadow-md py-4 px-6 mt-auto">
      <div className="mb-2 md:mb-0 text-center items-center md:text-center">
        <span className="font-semibold">Sportrent</span> &copy; { new Date().getFullYear() } - Aluguel de Quadras
      </div>
  </footer>
);

export default Footer;
