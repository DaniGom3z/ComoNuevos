import React, {useEffect} from 'react'
import Button from '../atoms/button'
import Title from '../atoms/title'
import { Link } from 'react-router-dom'

const IniciarSesion = () => {

  useEffect(() => {
    const btnIniciarSesion = document.getElementById("btn__iniciar-sesion");
    const btnRegistrarse = document.getElementById("btn__registrarse");
    const formulario_login = document.querySelector(".formulario__login");
    const formulario_register = document.querySelector(".formulario__register");
    const contenedor_login_register = document.querySelector(".contenedor__login-register");
    const caja_trasera_login = document.querySelector(".caja__trasera-login");
    const caja_trasera_register = document.querySelector(".caja__trasera-register");

    const anchoPage = () => {
      if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
      } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
      }
    };
    const inicioSesion = () => {
      if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
      } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
      }
    };
    const register = () => {
      if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
      } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
      }
    };

    
    btnIniciarSesion.addEventListener("click", inicioSesion);
    btnRegistrarse.addEventListener("click", register);
    window.addEventListener("resize", anchoPage);

    
    anchoPage();

   
    return () => {
      btnIniciarSesion.removeEventListener("click", inicioSesion);
      btnRegistrarse.removeEventListener("click", register);
      window.removeEventListener("resize", anchoPage);
    };
  }, []); 
  return (
    <>
    <div className='imagen w-screen h-screen flex items-center justify-center'>
      <main>
        <div class="contenedor__todo">
                  <div class="caja__trasera">
                    <div class="caja__trasera-login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>
                        <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                    </div>
                    <div class="caja__trasera-register">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Regístrate para que puedas iniciar sesión</p>
                        <button id="btn__registrarse">Regístrarse</button>
                    </div>
                </div>

              
                <div class="contenedor__login-register">
                   
                    <form action="" class="formulario__login">
                        <Title
                        text="Iniciar sesion"
                        styles="text-red-500 text-2xl text-center mb-10"
                        />
                        <input type="text" placeholder="Correo Electronico"/>
                        <input type="password" placeholder="Contraseña"/>
                        <Link to="/admin">
                        <Button 
                        styles="text-white w-2/4 bg-red-500 h-full  z-10  text-xl font-semibold"
                        text="Entrar"
                        />
                        </Link>
                    </form>
                    <form action="" class="formulario__register">
                        <Title
                        text="Registrarse"
                        styles="text-red-500 text-2xl text-center mb-10"
                        />
                        <input type="text" placeholder="Nombre completo"/>
                        <input type="text" placeholder="Correo Electronico"/>
                        <input type="text" placeholder="Usuario"/>
                        <input type="password" placeholder="Contraseña"/>
                        <Button 
                        styles="text-white w-2/4 bg-red-500 h-full  z-10  text-xl font-semibold"
                        text="Registrarse"
                      />
                    </form>
              </div>
          </div>
      </main>
      
    </div>
        
    
    </>
  )
}

export default IniciarSesion