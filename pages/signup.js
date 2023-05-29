import logo from '/public/logo.svg'
import Image from 'next/image'
import Head from "next/head";
import Link from 'next/link'
import biglogo from '/public/biglogo.svg'
import styles from '@/styles/signup.module.css'
import googlelogo from "/public/googlelog.svg";

import React, { useState, useEffect} from 'react';
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router';
import axios from 'axios'

export default function SignUp() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useAuthState(auth)
  const googleAuth = new GoogleAuthProvider();
  const router = useRouter();

  const signup = async () => {
    const result = await signInWithPopup(auth, googleAuth);
    const prueba = result.user;
    console.log('sesion iniciada');
    perfil(prueba);
    setIsLoggedIn(true);
  }
  const perfil = async (userData) => {
    const data = userData;
    console.log('data',data);
    const respuesta = await axios.post('/api/auth/login', data)
  }
  if (isLoggedIn) {
      router.push('/homepage');
  }

  useEffect(() => {
  }, [user])


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
        <div className={styles.container}> {/* Este div contiene todo lo que esta dentro de la pantalla */}
          <h1 className={styles.h1}>Registrar sesión</h1> {/* Este es el titulo de la pantalla */}
          <div className={styles.login} onClick={signup} >
              <Image alt="LogoGoogle" className={styles.goolog} src={googlelogo}/>
              <h3>Registrar sesión con Google</h3>
          </div>
          <div className={styles.divisor}>
              <hr className={styles.linea}></hr>
              <h3 className={styles.o}>O</h3>
              <hr className={styles.linea}></hr>
          </div>
          <div className={styles.opciones}>
              {/* olvido la contraseña? */}
                  <h3 className={styles.olvido}>¿Ya Tienes una Cuenta?</h3>
              {/* crear cuenta */}
              <Link href="/login">
                  <h3 className={styles.crear}>Iniciar Sesion</h3>
              </Link>
          </div>
        </div>
        <Image id="imagen2" src={biglogo} alt="Tec Overflow" height={600} className={styles.imagen_rotada}/>
      </div>

    </main>
    </>
  )
};