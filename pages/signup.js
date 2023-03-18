import logo from '/public/logo.svg'
import Image from 'next/image'
import Head from "next/head";
import Link from 'next/link'
import biglogo from '/public/biglogo.svg'
import styles from '@/styles/signup.module.css'

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
          <div className={styles.container}>
            <h1 className={styles.titulo}>Registrarte</h1>
            <div className={styles.datos}>
                <div className={styles.datos_bloque}>
                  <label className={styles.label}>Nombre</label>
                  <input type="text" name="nombre" className={styles.inputnombre}/>
                </div>
                <div className={styles.datos_bloque}>
                  <label className={styles.label}>Apellido</label>
                  <input type="text" name="apellido" className={styles.inputnombre}/>
                </div>
              </div>
            <div className={styles.form}>
              <label className={styles.label}>Correo electrónico</label>
              <input type="email" name="email" placeholder="Ingresa tu email" className={styles.input}/>
              <label className={styles.label}>Contraseña</label>
              <input type="password" name="password" placeholder="Ingresa tu contraseña" className={styles.input} />
              <label className={styles.label}>Confirmar contraseña</label>
              <input type="password" name="confirmpassword" placeholder="Confirmar contraseña" className={styles.input} />
              <br/>
              <div className={styles.check}>
                <input type="checkbox" id="privacidad" name="terminos" className={styles.check}/>
                <label>Aceptar los terminos y privacidad</label>
              </div>
            </div>
            <br/>
            <button className={styles.button}>Iniciar sesión</button>
            <label className={styles.no_cuenta}>¿No tienes una cuenta?<Link href="#" className={styles.registrate}> Registrate</Link></label>
          </div>
          <Image id="imagen2" src={biglogo} alt="Tec Overflow" height={600} className={styles.imagen_rotada}/>
        </div>
      </main>
      </>
    )
};