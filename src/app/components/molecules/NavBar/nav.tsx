import Link from 'next/link';
import Title from '../../atoms/Title/title';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-black">
      <div className="flex items-center">
        <div className="w-28 mr-4 flex">
          <Title name="Como" className="text-red-600 text-2xl" />
          <Title name="Nuevos" className="text-white text-2xl" />
        </div>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white">Inicio</Link>
        </li>
        <li>
          <Link href="../../../pages/Information" className="text-white">Sedanes</Link>
        </li>
        <li>
          <Link href="/" className="text-white">Pick up</Link>
        </li>
        <li>
          <Link href="/" className="text-white">Deportivos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
