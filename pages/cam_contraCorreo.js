import logo from '/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import biglogo from '/public/biglogo.svg'
import Script from "next/script";
import styles from '@/styles/cam.contra.correo.module.css'

export default function SignUp() {
    return (
        <>
        <main>
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
                  <Link className='' href='/'>Sign Up</Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* TERMINA NAVEGACION */}
        </header>


        <div className={styles.contenedor_principal}>
        <Image id="imagen1" src={biglogo} alt="Tec Overflow" height={600}/>
          <div className={styles.container}>
            <h1 className={styles.titulo}>Recuperar contraseña</h1>
            <div className={styles.form}>
              <label className={styles.label}>Correo electrónico</label>
              <input id="email" type="email" name="email" placeholder="Ingresa tu email" className={styles.input} required/>
              <br/>
            </div>
            <br/>
            <button id="button" className={styles.button}>Enviar</button>
            <label className={styles.no_cuenta}>¿No tienes una cuenta?<Link href="#" className={styles.registrate}> Registrate</Link></label>
          </div>
          <Image id="imagen2" src={biglogo} alt="Tec Overflow" height={600} className={styles.imagen_rotada}/>
        </div>
        <Script id="script">
          {`
            const correo = document.querySelector('#email');
            const button = document.querySelector('#button');

            correo.addEventListener('blur', () => {
              if (correo.value === "" || correo.validity.valid === false){
                  correo.style.border = "1px solid red";
              }else{
                  correo.style.border = "1px solid black";
              }
            });
          `}
        </Script>
      </main>
        </>
        
    )
};