import logo from '/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import biglogo from '/public/biglogo.svg'
import Script from "next/script";
import styles from '@/styles/cam.contra.correo.module.css'
import Head from 'next/head'

export default function SignUp() {
    return (
        <>
        <main>
          <Head>
            <title>Tec Overflow | Cambiar contraseña</title>
            <link rel="icon" href="/logo.svg"/>
          </Head>
        <header>
          {/* EMPIEZA NAVEGACION */}
          <nav className='navbar ml-20 mr-20 px-5 mt-10'>
            <div className='navbar-brand'>
              <Link className='nav-link_icon' href='/'>
                <Image className='logo' src={logo} alt='Tec OverFlow'/>
                <h1 className='mx-7 titulo'>Tec OverFlow</h1>
              </Link>
              <ul className='nav-link'>
                <li className='nav-item'>
                  <Link className={styles.active} href='/login'>Log In</Link>
                </li>
                <li className='nav-item'>
                  <Link href='/signup'>Sign Up</Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* TERMINA NAVEGACION */}
        </header>


        <div className={styles.contenedor_principal}>
        <Image id="imagen1" src={biglogo} alt="Tec Overflow" height={600}/>
          <form className={styles.container}>
            <h1 className={styles.titulo}>Recuperar contraseña</h1>
            <div className={styles.form}>
              <label className={styles.label}>Correo electrónico</label>
              <input id="correo" type="email" name="email" placeholder="Ingresa tu email" className={styles.input} required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"/>
              <br/>
            </div>
            <button type='submit' id="button" className={styles.button}>Enviar</button>
            <label className={styles.no_cuenta}>¿No tienes una cuenta?<Link href="signup" className={styles.registrate}> Registrate</Link></label>
                        {/* Toast succes */}
                        <div id="toast_succes" className={styles.toast_succes}>
                            <div className={styles.icon}>
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 12l2 2l4 -4" />
                                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                              </svg>
                            </div>
                            <div className={styles.toast_text}>
                                <span className={styles.toast_type}>Correcto</span>
                                <span className={styles.toast_desc}>Acceso correcto</span>
                            </div>
                        </div>
                        {/* Termina toast succes */}
          </form>
          
          <Image id="imagen2" src={biglogo} alt="Tec Overflow" height={600} className={styles.imagen_rotada}/>
        </div>
        <Script id="script">
          {`
            const correo = document.querySelector('#correo');
            const button = document.querySelector('#button');
            const form = document.querySelector("form");
            const toasts = document.querySelector("#toast_succes");

            correo.addEventListener('blur', () => {
              if (correo.value === "" ){
                  correo.style.border = "1px solid red";
              }else{
                  correo.style.border = "1px solid black";
              }
            });

            form.addEventListener('submit', (e) => {
              e.preventDefault();
              if (correo.validity.valid){
                  console.log("hola");
                  setTimeout(function(){window.location.href = "/login";}, 3000);
                  toasts.style.display = "flex";
                  setTimeout(function(){ toasts.style.display = "none"; }, 3000);
              } else{
                  correo.style.border = "1px solid red";
              }
          });
          `}
        </Script>
      </main>
        </>
        
    )
};