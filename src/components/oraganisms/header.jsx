import React,{useState,useEffect} from 'react'
import Navbar from '../molecules/navbar'
import Title from '../atoms/title'

const Header = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      // Agregar un event listener para el scroll
      window.addEventListener('scroll', handleScroll);
  
      // Eliminar el event listener cuando el componente se desmonta
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  
    const headerStyle = {
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
        height:'70px'
    };
  
    const backgroundStyle = {
      background: 'linear-gradient(to bottom, #0a0a0a, #1a1919)',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: scrolling ? 1 : 0,
      transition: 'opacity 0.5s',
    };
  
    const titleStyle = {
      fontSize: scrolling ? '20px' : '30px',
      transition: 'font-size 0.5s',
    };
  
    return (
      <header className={`flex justify-around items-center relative z-10`} style={headerStyle}>
        <div style={backgroundStyle}></div>
        <Title
          styles={`text-white font-semibold first-letter:text-red-500 z-10`}
          text="ComoNuevo"
          style={titleStyle}
        />
        <Navbar
        style="z-10"
        />
      </header>
    );
}
export default Header