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
                                    <Link href="/login" className='active'>Log in</Link>
                                </div>
                                <div className="link">
                                    <Link href="/">Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="contenedor-principal">
                    <div className="container">
                        <h1>Iniciar sesión</h1>
                        <br/>
                        <div className="form">
                            <label className="my_input">Correo electrónico</label>
                            <input type="email" name="email" placeholder="Ingresa tu email" className="my_input"/>
                            <label className="my_input">Contraseña</label>
                            <input type="password" name="password" placeholder="Ingresa tu contraseña" className="my_input"/>
                        </div>
                        <Link href="#" className='olvide'>¿Olvidaste tu contraseña?</Link>
                        <br/>
                        <br/>
                        <button className="my_button">Iniciar sesión</button>
                        <label className='no_cuenta'>¿No tienes una cuenta?<Link href="#" className='registrate'> Registrate</Link></label>
                    </div>
                </div>
            </main>
        </> 
    );
}
