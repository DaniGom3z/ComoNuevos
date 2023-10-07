// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black p-6">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className=' text-white'>Inicio</Link>
        </li>
        <li>
          <Link href="../../../pages/about" className=' text-white'>Acerca de</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
