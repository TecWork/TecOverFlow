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
                        <form className={styles.form}> {/* Este div contiene el formulario */}
                            <div className={styles.labels}>
                                <label className={styles.label} >Correo electrónico</label> {/* Este es el label del input de correo electronico */}
                                <input id='input1' type="email" name="email" placeholder="Ingresa tu email" className={styles.input} required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"/> {/* Este es el input de correo electronico */}
                                <label className={styles.label}>Contraseña</label> {/* Este es el label del input de contraseña */}
                                <input id='input2' type="password" name="password" placeholder="Ingresa tu contraseña" className={styles.input} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{8,30}$" title="Al menos 8 caracteres, máximo 12, debe contener una letra mayúscula, una minuscula, un número y no puede contener caracteres especiales"/> {/* Este es el input de contraseña, el "pattern" son las condicionales que debe de cumplir para que sea valida, y el "title" es el mensaje que aparecera al poner el cursor sobre el input */}
                            </div>
                            <Link href="/cam_contraCorreo" className={styles.olvide_link}>¿Olvidaste tu contraseña?</Link> {/* Este link nos dirije a la pantalla de olvide mi contraseña */}
                            <button type="submit" id="button" className={styles.button}>Iniciar sesión</button> {/* Verificar como hacer que te dirija a la pagina solo cuando se cumplen los parametros */}
                            <label className={styles.no_cuenta}>¿No tienes una cuenta?<Link href="/" className={styles.registrate}> Registrate</Link></label> {/* Este label nos dirije a la pantalla de Sign up */}
                        </form>
                
                        {/* Toast de error */}
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
                                <span className={styles.toast_desc}>Correo o contraseña incorrecta</span>
                            </div>
                        </div>
                        {/* Aqui termina el toast de error */}

                        {/* Toast succes */}
                        <div id="toast_succes" className={styles.toast_succes}>
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                <Script id="script">
                    {`
                        const form = document.querySelector("form");
                        const email = document.querySelector("#input1"); 
                        const password = document.querySelector("#input2");
                        const button = document.querySelector("#button");
                        const toaste = document.querySelector("#toast_error");
                        const toasts = document.querySelector("#toast_succes");

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

                        form.addEventListener('submit', (e) => {
                            e.preventDefault();

                            if (email.validity.valid && password.validity.valid){
                                console.log("hola");
                                setTimeout(function(){window.location.href = "/";}, 3000);
                                toasts.style.display = "flex";
                                setTimeout(function(){ toasts.style.display = "none"; }, 3000);

                            } else{
                                password.style.border = "1px solid red";
                                email.style.border = "1px solid red";
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
