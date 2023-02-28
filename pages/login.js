import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.svg";
import Head from "next/head";
import styles from "@/styles/login.module.css";

export default function Login() {
    return (
        <>
            <main>
                <Head>
                    <title>Tec Overflow | Log in</title>
                </Head>
                <header>
                    <div className="navbar">
                        <div className='navegacion'>
                            <div className="nav-logo">
                                <Link href="/pages/index.js">
                                    <Image src={logo} alt="Tec Overflow" width={100} height={100} />
                                </Link>
                                <h1 className="titulo">Tec Overflow</h1>
                            </div>
                            <div className="nav">
                                <div className="link">
                                    <Link href="/login" className={styles.active}>Log in</Link>
                                </div>
                                <div className="link">
                                    <Link href="/">Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className= {styles.contenedor_principal}>
                    <div className={styles.container}>
                        <h1 className={styles.h1}>Iniciar sesión</h1>
                        <br/>
                        <div className={styles.form}>
                            <label className={styles.label}>Correo electrónico</label>
                            <input type="email" name="email" placeholder="Ingresa tu email" className={styles.input}/>
                            <br/>
                            <br/>
                            <label className={styles.label}>Contraseña</label>
                            <input type="password" name="password" placeholder="Ingresa tu contraseña" className={styles.input}/>
                        </div>
                        <div>
                            <Link href="#" className={styles.olvide_link}>¿Olvidaste tu contraseña?</Link>
                        </div>
                        <br/>
                        <br/>
                        <button className={styles.button}>Iniciar sesión</button>
                        <label className={styles.no_cuenta}>¿No tienes una cuenta?<Link href="#" className={styles.registrate}> Registrate</Link></label>
                    </div>
                </div>
            </main>
        </> 
    );
}
