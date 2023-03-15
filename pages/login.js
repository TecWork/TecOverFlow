import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.svg";
import Head from "next/head";
import styles from "@/styles/login.module.css";
import biglogo from "/public/biglogo.svg";
import Script from "next/script";

export default function Login() {
    return (
        <>
            <main>
                <Head>
                    <title>Tec Overflow | Log in</title>
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
                                    <Link className={styles.active} href='/'>Log In</Link>
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
                        <h1 className={styles.h1}>Iniciar sesión</h1>
                        <br/>
                        <div className={styles.form}>
                            <label className={styles.label} >Correo electrónico</label>
                            <input id='input1' type="email" name="email" placeholder="Ingresa tu email" className={styles.input} required/>
                            <br/>
                            <br/>
                            <label className={styles.label}>Contraseña</label>
                            <input id='input2' type="password" name="password" placeholder="Ingresa tu contraseña" className={styles.input} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{8,30}$" title="Al menos 6 caracteres, máximo 12, debe contener una letra mayúscula, una minuscula, un número y no puede contener caracteres especiales"/>
                        </div>
                        <Link href="#" className={styles.olvide_link}>¿Olvidaste tu contraseña?</Link>
                        <br/>
                        <br/>
                        <button id="button" className={styles.button} href='/'>Iniciar sesión</button>
                        <label className={styles.no_cuenta}>¿No tienes una cuenta?<Link href="/" className={styles.registrate}> Registrate</Link></label>
                    </div>
                    <Image id="imagen2" src={biglogo} alt="Tec Overflow" height={600} className={styles.imagen_rotada}/>
                </div>
                <Script id="script">
                    {`
                        const email = document.querySelector("#input1");
                        const password = document.querySelector("#input2");
                        const button = document.querySelector("#button");
                        
                        email.addEventListener('blur', () => {
                            if (email.value === "" ){
                                email.style.border = "1px solid red";
                            }else{
                                email.style.border = "1px solid black";
                            }
                        });

                        password.addEventListener('blur', () => {
                            if (password.value === ""){
                                password.style.border = "1px solid red";
                            }else{
                                password.style.border = "1px solid black";
                            }
                        });

                        button.addEventListener('click', () => {
                            console.log(email.validity.valid);
                            console.log(password.validity.valid);
                        });
                        
                    `}
                </Script>
            </main>
        </> 
    );
}

