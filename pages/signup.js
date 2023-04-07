import logo from '/public/logo.svg'
import Image from 'next/image'
import Head from "next/head";
import Link from 'next/link'
import biglogo from '/public/biglogo.svg'
import styles from '@/styles/signup.module.css'
import Script from 'next/script';

export default function SignUp() {
    return (
        <>
        <main>
          <Head>
            <title>Tec Overflow | Sign Up</title>
            <link rel="icon" href="/logo.svg" />
          </Head>
          <header>
            <nav className='navbar ml-20 mr-20 px-5 mt-10'> {/* Esta es la barra de navegacion que aparece en la parte superior de la pantalla */}
                <div className='navbar-brand'> 
                    <Link className='nav-link_icon' href='/'>
                      <Image className='logo' src={logo} alt='Tec OverFlow'/>
                      <h1 className='mx-7 titulo'>Tec OverFlow</h1>
                    </Link>
                    <ul className='nav-link'>
                        <li className='nav-item'>
                            <Link className='nav-item' href='/login'>Log In</Link> {/* Este link nos dirije a la pantalla de Log in, y la clase "active" le aplica el borde rojo para identificar que estamos dentro de esta */}
                        </li>
                        <li className='nav-item'>
                            <Link className={styles.active} href='/signup'>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
          </header>
        <div className={styles.contenedor_principal}>
        <Image id="imagen1" src={biglogo} alt="Tec Overflow" height={600}/>
          <form className={styles.container}>
            <h1 className={styles.titulo}>Registrarte</h1>
            <div className={styles.datos}>
                <div className={styles.datos_bloque}>
                  <label className={styles.label}>Nombre</label>
                  <input id="nombre" type="text" name="nombre" className={styles.inputnombre} required/>
                </div>
                <div className={styles.datos_bloque}>
                  <label className={styles.label}>Apellido</label>
                  <input id="apellido" type="text" name="apellido" className={styles.inputnombre} required/>
                </div>
              </div>
            <div className={styles.form}>
              <label className={styles.label}>Correo electrónico</label>
              <input id="email" type="email" name="email" placeholder="Ingresa tu email" className={styles.input} required/>
              <label className={styles.label}>Contraseña</label>
              <input id="contraseña" type="password" name="password" placeholder="Ingresa tu contraseña" className={styles.input} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{8,30}$" title="Al menos 6 caracteres, máximo 12, debe contener una letra mayúscula, una minuscula, un número y no puede contener caracteres especiales"/>
              <label className={styles.label}>Confirmar contraseña</label>
              <input id="confcontraseña" type="password" name="confirmpassword" placeholder="Confirmar contraseña" className={styles.input} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{8,30}$" title="Al menos 6 caracteres, máximo 12, debe contener una letra mayúscula, una minuscula, un número y no puede contener caracteres especiales"/>
              <br/>
              <div className={styles.check}>
                <input type="checkbox" id="privacidad" name="terminos" className={styles.check} required/>
                <label>Aceptar los terminos y privacidad</label>
              </div>
            </div>
            <button id='boton' type="submit" className={styles.button}>Iniciar sesión</button>
            <label className={styles.no_cuenta}>¿Ya tienes una cuenta?<Link href="#" className={styles.registrate}> Inicia sesión</Link></label>
            
            <div id="toast_succes" className={styles.toast_succes}>
                <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                    <path d="M10 10l4 4m0 -4l-4 4" />
                </svg>
                </div>
                <div className={styles.toast_text}>
                    <span className={styles.toast_type}>Correcto</span>
                    <span className={styles.toast_desc}>Acceso correcto</span>
                </div>
            </div>

            <div id="toast_error" className={styles.toast_error}>
                <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                    <path d="M10 10l4 4m0 -4l-4 4" />
                </svg>
                </div>
                <div className={styles.toast_text}>
                    <span className={styles.toast_type}>Error</span>
                    <span className={styles.toast_desc}>Las contraseñas no coinciden</span>
                </div>
            </div>
          </form>
          <Image id="imagen2" src={biglogo} alt="Tec Overflow" height={600} className={styles.imagen_rotada}/>
        </div>
        <Script id="Script">
          {`
            const input = document.querySelectorAll('input');
            const forms = document.querySelector('form');
            const toasts = document.querySelector('#toast_succes');
            const toaste = document.querySelector('#toast_error');
            const nombre = document.querySelector('#nombre');
            const apellido = document.querySelector('#apellido');
            const email = document.querySelector('#email');
            const contraseña = document.querySelector('#contraseña');
            const confcontraseña = document.querySelector('#confcontraseña');


            input.forEach((input) => {
              input.addEventListener('blur', () => {
                if (input.value === "") {
                  input.style.border = "1px solid red";
                } else {
                  input.style.border = "1px solid black";
                }
              });
            });

            forms.addEventListener('submit', (e) => {
              e.preventDefault();

              if (contraseña.value !== confcontraseña.value) {
                contraseña.value = "";
                confcontraseña.value = "";
                contraseña.style.border = "1px solid red";
                confcontraseña.style.border = "1px solid red";
                toaste.style.display = "flex";
                setTimeout(function(){ toaste.style.display = "none"; }, 3000);
              } else {
                setTimeout(function(){window.location.href = "/login";}, 3000);
                toasts.style.display = "flex";
                setTimeout(function(){toasts.style.display = "none"; }, 3000);
              }
            });

          `}
        </Script>
      </main>
      </>
    )
};