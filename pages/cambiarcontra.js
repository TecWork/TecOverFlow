import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.svg";
import Head from "next/head";
import styles from "@/styles/contraseña.module.css";
import biglogo from "/public/biglogo.svg";
import Script from "next/script";

export default function cambiarcontraseña() {
    return (
        <>
            <main>
                <Head>
                    <title>Tec Overflow | Cambiar contraseña</title>
                    <link rel="icon" href="/logo.svg"/>
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
                                    <Link className='nav-item' href='/'>Sign Up</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div className= {styles.contenedor_principal}>
                    <Image id="imagen1" src={biglogo} alt="Tec Overflow" height={600}/>
                    <form className={styles.container}>
                        <h1 className={styles.h1}>Restablecer contraseña</h1>
                        <br/>
                        <div className={styles.form}>
                            <label className={styles.label}>Nueva contraseña</label>
                            <input id='input1' type="password" name="email" placeholder="***********" className={styles.input} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{8,30}$" title="Al menos 6 caracteres, máximo 12, debe contener una letra mayúscula, una minuscula, un número y no puede contener caracteres especiales"/>
                            <br/>
                            <label className={styles.label}>Confirmar contraseña</label>
                            <input id='input2' type="password" name="password" placeholder="***********" className={styles.input} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{8,30}$" title="Al menos 6 caracteres, máximo 12, debe contener una letra mayúscula, una minuscula, un número y no puede contener caracteres especiales"/>
                        </div>
                        <button type="submit" id="button" className={styles.button}>Guardar</button>

                        <div id="toast_succes" className={styles.toast_succes}>
                            <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                                <path d="M10 10l4 4m0 -4l-4 4" />
                            </svg>
                            </div>
                            <div className={styles.toast_text}>
                                <span className={styles.toast_type}>Correcto</span>
                                <span className={styles.toast_desc}>Acceso correcto</span>
                            </div>
                        </div>

                        <div id="toast_error" className={styles.toast_error}>
                            <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                                <path d="M10 10l4 4m0 -4l-4 4" />
                            </svg>
                            </div>
                            <div className={styles.toast_text}>
                                <span className={styles.toast_type}>Error</span>
                                <span className={styles.toast_desc}>Las contraseñas no coinciden</span>
                            </div>
                        </div>
                    </form>
                    <Image id="imagen2" src={biglogo} alt="Tec Overflow" height={600} className={styles.imagen_rotada}/>
                </div>
                <Script id="script">
                    {`
                        const button = document.getElementById("button");
                        const input1 = document.getElementById("input1");
                        const input2 = document.getElementById("input2");
                        const forms = document.querySelector('form');
                        const toasts = document.getElementById("toast_succes");
                        const toaste = document.getElementById("toast_error");

                        input1.addEventListener('blur', () => {
                            if(input1.value === ""){
                                input1.style.border = "1px solid red";
                            }else{
                                input1.style.border = "1px solid black";
                            }
                        });

                        input2.addEventListener('blur', () => {
                            if(input2.value === ""){
                                input2.style.border = "1px solid red";
                            }else{
                                input2.style.border = "1px solid black";
                            }
                        });

                        forms.addEventListener('submit', (e) => {
                            e.preventDefault();
                            if(input1.value === input2.value){
                                toasts.style.display = "flex";
                                setTimeout(function(){ toasts.style.display = "none"; }, 3000);
                                setTimeout(function(){window.location.href = "/login";}, 3000);
                            }else{
                                input1.value = "";
                                input2.value = "";
                                input1.style.border = "1px solid red";
                                input2.style.border = "1px solid red";
                                toaste.style.display = "flex";
                                setTimeout(function(){ toaste.style.display = "none"; }, 3000);
                            }
                        });

                        
                    `}
                </Script>
            </main>
        </> 
    );
}
