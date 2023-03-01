import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.svg";
import Head from "next/head";
import styles from "@/styles/contraseña.module.css";
import biglogo from "/public/biglogo.svg";

export default function cambiarcontraseña() {
    return (
        <>
            <main>
                <Head>
                    <title>Tec Overflow | Cambiar contraseña</title>
                </Head>
                <header>
                    <nav className='navbar ml-20 mr-20 px-5 mt-10'>
                        <div className='navbar-brand'>
                            <Link className='nav-link' href='/'>
                            <Image className='logo' src={logo} alt='Tec OverFlow'/>
                            <h1 className='mx-7 titulo'>Tec OverFlow</h1>
                            </Link>
                            <ul className='nav-link'>
                                <li className='nav-item'>
                                    <Link className={styles.active} href='/login'>Log In</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-item' href='/'>Sign Up</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div className= {styles.contenedor_principal}>
                    <Image id="imagen1" src={biglogo} alt="Tec Overflow" height={600}/>
                    <div className={styles.container}>
                        <h1 className={styles.h1}>Restablecer contraseña</h1>
                        <br/>
                        <div className={styles.form}>
                            <label className={styles.label}>Nueva contraseña</label>
                            <input id='input1' type="password" name="email" placeholder="***********" className={styles.input}/>
                            <br/>
                            <label className={styles.label}>Confirmar contraseña</label>
                            <input id='input2' type="password" name="password" placeholder="***********" className={styles.input}/>
                        </div>
                        <button id="button" className={styles.button}>Iniciar sesión</button>
                    </div>
                    <Image id="imagen2" src={biglogo} alt="Tec Overflow" height={600} className={styles.imagen_rotada}/>
                </div>
            </main>
        </> 
    );
}

