import logo from '/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import biglogo from '/public/big_logo.svg'
import styles from '@/styles/signup.module.css'

export default function SignUp() {
    return (
        <>
        <main>
        <header>
          {/* EMPIEZA NAVEGACION */}
          <nav className='navbar ml-20 mr-20 px-5 mt-10'>
            <div className='navbar-brand'>
              <Link className='nav-link' href='/'>
                <Image className='logo' src={logo} alt='Tec OverFlow'/>
                <h1 className='mx-7 titulo'>Tec OverFlow</h1>
              </Link>
              <ul className='nav-link'>
                <li className='nav-item'>
                  <Link className='' href='/'>Log In</Link>
                </li>
                <li className='nav-item'>
                  <Link className={styles.active} href='/'>Sign Up</Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* TERMINA NAVEGACION */}
        </header>


        <div className={styles.contenedor_principal}>
          {/* <Image src={biglogo} alt="Tec Overflow" height={700} className={styles.container_img_l}/> */}
          <div className={styles.container}>
            <h1 className={styles.titulo}>Registrarte</h1>
            <br/>
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
              
              <input type="checkbox" id="privacidad" name="terminos" className={styles.check}/>
              <label for="privacidad">Aceptar los terminos y privacidad</label>
            </div>
            <br/>
            <br/>
            <button className={styles.button}>Iniciar sesión</button>
            <label className={styles.no_cuenta}>¿No tienes una cuenta?<Link href="#" className={styles.registrate}> Registrate</Link></label>
          </div>
         {/*  <Image src={biglogo} alt="Tec Overflow" height={700} className="container-img-l"/> */}
        </div>
      </main>
        </>
    )
};