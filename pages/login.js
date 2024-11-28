import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.svg";
import Head from "next/head";
import styles from "@/styles/login.module.css";
import biglogo from "/public/biglogo.svg";
import googlelogo from "/public/googlelog.svg";

import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useAuthState(auth);
    const googleAuth = new GoogleAuthProvider();
    const router = useRouter();

    const login = async () => {
        const result = await signInWithPopup(auth, googleAuth);
        perfil(result.user);
        setIsLoggedIn(true);
    };

    const perfil = async (userData) => {
        console.log('Datos del usuario:', userData);
        await axios.post('/api/auth/login', userData);
    };

    if (isLoggedIn) {
        router.push('/homepage');
    }

    useEffect(() => {}, [user]);

    return (
        <>
            <main>
                <Head>
                    <title>Tec Overflow | Log in</title>
                    <link rel="icon" href="/logo.svg" />
                </Head>
                <header>
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
                                    <Link className='nav-item' href='/signup'>Sign Up</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div className={styles.contenedor_principal}>
                    <Image id="imagen1" src={biglogo} alt="Tec Overflow" height={600}/>
                    <div className={styles.container}>
                        <h1 className={styles.h1}>Iniciar sesión</h1>
                        <div className={styles.login} onClick={login}>
                            <Image alt="LogoGoogle" className={styles.goolog} src={googlelogo}/>
                            <h3>Iniciar sesión con Google</h3>
                        </div>
                        <div className={styles.divisor}>
                            <hr className={styles.linea}></hr>
                            <h3 className={styles.o}>O</h3>
                            <hr className={styles.linea}></hr>
                        </div>
                        <div className={styles.opciones}>
                            <Link href="/signup">
                                <h3 className={styles.crear}>Crear cuenta</h3>
                            </Link>
                        </div>
                    </div>
                    <Image id="imagen2" src={biglogo} alt="Tec Overflow" height={600} className={styles.imagen_rotada}/>
                </div>
            </main>
        </>
    );
}
