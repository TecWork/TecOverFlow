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
                            <label className={styles.label}>Correo electrónico</label>
                            <input id='input1' type="email" name="email" placeholder="Ingresa tu email" className={styles.input}/>
                            <br/>
                            <br/>
                            <label className={styles.label}>Contraseña</label>
                            <input id='input2' type="password" name="password" placeholder="Ingresa tu contraseña" className={styles.input}/>
                        </div>
                        <Link href="#" className={styles.olvide_link}>¿Olvidaste tu contraseña?</Link>
                        <br/>
                        <br/>
                        <button id="button" className={styles.button}>Iniciar sesión</button>
                        <label className={styles.no_cuenta}>¿No tienes una cuenta?<Link href="#" className={styles.registrate}> Registrate</Link></label>
                    </div>
                    <Image id="imagen2" src={biglogo} alt="Tec Overflow" height={600} className={styles.imagen_rotada}/>
                </div>
                <Script id="script">
                    {`
                        const button = document.getElementById("button");
                        const input1 = document.getElementById("input1");
                        const input2 = document.getElementById("input2");

                        button.addEventListener("click", () => {
                            if (input1.value === "") {
                                input1.style.border = "1px solid red";
                                alert("Los campos no pueden estar vacios");
                                if (input2.value === "") {
                                    input2.style.border = "1px solid red";
                                    alert("Los campos no pueden estar vacios");
                                } else {
                                    input2.style.border = "1px solid #000000";
                                }
                            }else{
                                input1.style.border = "1px solid #000000";
                                if (input2.value === "") {
                                    input2.style.border = "1px solid red";
                                    alert("Los campos no pueden estar vacios");
                                } else {
                                    input2.style.border = "1px solid #000000";
                                    console.log(input2.value);
                                    console.log(input1.value);
                                }
                            input1.value = "";
                            input2.value = "";
                            }
                        });
                    `}
                </Script>
            </main>
        </> 
    );
}

