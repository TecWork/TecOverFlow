import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.svg";
import Head from "next/head";
import styles from "@/styles/login.module.css";
import biglogo from "/public/biglogo.svg";
import googlelogo from "/public/googlelog.svg";

import React, { useState, useEffect} from 'react';
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router';

import axios from 'axios'

export default function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useAuthState(auth)
    const googleAuth = new GoogleAuthProvider();
    const router = useRouter();

    const login = async () => {
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
                    <title>Tec Overflow | Log in</title>
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
                                    <Link className={styles.active} href='/login'>Log In</Link> {/* Este link nos dirije a la pantalla de Log in, y la clase "active" le aplica el borde rojo para identificar que estamos dentro de esta */}
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-item' href='/signup'>Sign Up</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div className= {styles.contenedor_principal}>
                    <Image id="imagen1" src={biglogo} alt="Tec Overflow" height={600}/> {/* Esta imagen es la que aparece a los costados de la pantalla */}
                    <div className={styles.container}> {/* Este div contiene todo lo que esta dentro de la pantalla */}
                        <h1 className={styles.h1}>Iniciar sesión</h1> {/* Este es el titulo de la pantalla */}
                        <div className={styles.login} onClick={login} >
                            <Image alt="LogoGoogle" className={styles.goolog} src={googlelogo}/>
                            <h3>Iniciar sesión con Google</h3>
                        </div>
                        <div className={styles.divisor}>
                            <hr className={styles.linea}></hr>
                            <h3 className={styles.o}>O</h3>
                            <hr className={styles.linea}></hr>
                        </div>
                        <div className={styles.opciones}>
                            {/* olvido la contraseña? */}
                            <Link href="/forgotpassword">
                                <h3 className={styles.olvido}>¿Olvidaste tu contraseña?</h3>
                            </Link>
                            {/* crear cuenta */}
                            <Link href="/signup">
                                <h3 className={styles.crear}>Crear cuenta</h3>
                            </Link>
                        </div>

                        {/* Toast de error */}
                        <div id="toast_error" className={styles.toast_error}>
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-x" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                                    <path d="M10 10l4 4m0 -4l-4 4" />
                                </svg>
                            </div>
                            <div className={styles.toast_text}>
                                <span className={styles.toast_type}>Error</span>
                                <span className={styles.toast_desc}>Correo o contraseña incorrecta</span>
                            </div>
                        </div>
                        {/* Aqui termina el toast de error */}

                        {/* Toast succes */}
                        <div id="toast_succes" className={styles.toast_succes}>
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-check" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                    </div>

                    <Image id="imagen2" src={biglogo} alt="Tec Overflow" height={600} className={styles.imagen_rotada}/> {/* Esta imagen es la que aparece a los costados de la pantalla pero rotada */}
                </div>
                
            </main>
        </> 
    );
}
