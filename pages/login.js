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
                        <br/>
                        <div className={styles.form}> {/* Este div contiene el formulario */}
                            <label className={styles.label} >Correo electrónico</label> {/* Este es el label del input de correo electronico */}
                            <input id='input1' type="email" name="email" placeholder="Ingresa tu email" className={styles.input} required/> {/* Este es el input de correo electronico */}
                            <br/>
                            <br/>
                            <label className={styles.label}>Contraseña</label> {/* Este es el label del input de contraseña */}
                            <input id='input2' type="password" name="password" placeholder="Ingresa tu contraseña" className={styles.input} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{8,30}$" title="Al menos 6 caracteres, máximo 12, debe contener una letra mayúscula, una minuscula, un número y no puede contener caracteres especiales"/> {/* Este es el input de contraseña, el "pattern" son las condicionales que debe de cumplir para que sea valida, y el "title" es el mensaje que aparecera al poner el cursor sobre el input */}
                        </div>
                        <Link href="/cam_contraCorreo" className={styles.olvide_link}>¿Olvidaste tu contraseña?</Link> {/* Este link nos dirije a la pantalla de olvide mi contraseña */}
                        <br/>
                        <br/>
                        <Link href="#" id="button" className={styles.button}>Iniciar sesión</Link> {/* Verificar como hacer que te dirija a la pagina solo cuando se cumplen los parametros */}
                        <label className={styles.no_cuenta}>¿No tienes una cuenta?<Link href="/" className={styles.registrate}> Registrate</Link></label> {/* Este label nos dirije a la pantalla de Sign up */}
                        
                        {/* Insertar un toast y darle el display de none */}
                    <div id="toast" className={styles.toast}>
                            <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-red-700" role="alert">
                                <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-red-100 rounded-lg dark:bg-red-700 dark:text-green-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>
                                    <span class="sr-only">x-mark icon</span>
                                </div>
                                <div className={styles.toast_text}>
                                    <div className={styles.texto_tipo}>Error</div>
                                    <div className={styles.texto_desc}>Correo o contraseña incorrecta</div>
                                </div>
                            </div>
                        </div>
                        {/* Aqui termina el toast */}
                    </div>

                    <Image id="imagen2" src={biglogo} alt="Tec Overflow" height={600} className={styles.imagen_rotada}/> {/* Esta imagen es la que aparece a los costados de la pantalla pero rotada */}
                </div>
                <Script id="script">
                    {`
                        const email = document.querySelector("#input1"); 
                        const password = document.querySelector("#input2");
                        const button = document.querySelector("#button");
                        const toast = document.querySelector("#toast");

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
                            if (email.validity.valid && password.validity.valid){
                                button.location.href="/"
                            }else{
                                password.style.border = "1px solid red";
                                email.style.border = "1px solid red";
                                toast.style.display = "block";
                                setTimeout(function(){ toast.style.display = "none"; }, 3000);
                            }
                        });
                    `}
                </Script>
            </main>
        </> 
    );
}
