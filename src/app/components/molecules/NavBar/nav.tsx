import Link from "next/link";
import Title from "../../atoms/Title/title";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-black">
      <div className="flex items-center pl-14">
        <a href="/" className="w-28 mr-4 flex">
          <Title name="Como" className="text-red-600 text-2xl" />
          <Title name="Nuevos" className="text-white text-2xl" />
        </a>
      </div>
      <ul className="hidden md:flex space-x-4 pr-14 md:flex-wrap md:justify-end">
        <li>
          <Link href="/" className="text-white">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="../../../pages/Information" className="text-white">
            Sedanes
          </Link>
        </li>
        <li>
          <Link href="/" className="text-white">
            Pick up
          </Link>
        </li>
        <li>
          <Link href="/" className="text-white">
            Deportivos
          </Link>
        </li>
      </ul>

      {/* Menú desplegable para móviles */}
      <div className="md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn m-1">
            ...
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/" className="text-white">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="../../../pages/Information" className="text-white">
                Sedanes
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white">
                Pick up
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white">
                Deportivos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
