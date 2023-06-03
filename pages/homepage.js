import Head from "next/head"
import logo from "/public/logo.svg"
import eagle from "/public/biglogo.svg"
import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import { useState, useEffect } from "react"
import axios from "axios"


export default function Homepage() {
    const [isActiveButton1, setIsActiveButton1] = useState(false);
    const [isActiveButton2, setIsActiveButton2] = useState(false);
    const [isActiveButton3, setIsActiveButton3] = useState(false);
    const [preguntas, setPreguntas] = useState([]);
    

    const displayQuestions = async () => {
        const response = await axios.get('/api/questions/displayquestions')
        setPreguntas(response.data.preguntas);
        console.log(preguntas)
    }   
    useEffect(() => {
        displayQuestions();
    }, []);

    useEffect(() => {
        console.log(preguntas)
    }, [preguntas]);


  const handleClick = (event) => {
    if (event.target.id === 'todas') {
        setIsActiveButton1(!isActiveButton1);
        setIsActiveButton2(false);
        setIsActiveButton3(false);
    } else if (event.target.id === 'sr') {
        setIsActiveButton2(!isActiveButton2);
        setIsActiveButton1(false);
        setIsActiveButton3(false);
    } else if (event.target.id === 'mp') {
        setIsActiveButton3(!isActiveButton3);
        setIsActiveButton1(false);
        setIsActiveButton2(false);
    }
    };

    return (
        <>
            <Head>
                <title>Tec OverFlow | Home Page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <main>
                <header className={styles.header}>
                {/* EMPIEZA NAVEGACION */}
                    <nav className={styles.headNav}>
                        <div className='navbar-brand'>
                            <Link className='nav-link_icon' href='/'>
                                <Image className={styles.logo} src={logo} alt='Tec OverFlow'/>
                                <h1 className={styles.titulo}>Tec Overflow</h1>
                            </Link>
                        </div>
                    </nav>
                    {/* TERMINA NAVEGACION */}
                    <div className={styles.searchBar}>
                        <input type="text" placeholder="Ingresa aquí tu pregunta" className={styles.searchInput}/>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#888888" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </div>
                    <div className={styles.user}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="9" />
                            <circle cx="12" cy="10" r="3" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                    </div>
                </header>
                <div className={styles.main_container}>
                    <div className={styles.container}>
                        <Image id="aguila" src={eagle} alt="aguila" height={550}/>
                    </div>
                    <div className={styles.contlateral}>
                        <div className={styles.filtros}>
                            <h1 className={styles.preguntas}>Preguntas recientes</h1>
                            <div className={styles.filtros_container}>
                                <div className={styles.filtros_container_filtro}>
                                    <select className={styles.filtros_container_filtro_select}>
                                        <option disabled selected>Selecciona una materia</option>
                                        <option value="Todas las materias">Todas las materias</option>
                                        <option value="DAW">DAW</option>
                                        <option value="Sistemas operativos">Sistemas operativos</option>
                                        <option value="POO">POO</option>
                                        <option value="Base de datos">Base de datos</option>
                                    </select>
                                </div>
                                <p onClick={handleClick} className={isActiveButton1 ? styles.activeFilter : styles.filtros_todas} id="todas">Todas</p>
                                <p onClick={handleClick} className={isActiveButton2 ? styles.activeFilter : styles.filtros_todas} id="sr">Sin respuesta</p>
                                <p onClick={handleClick} className={isActiveButton3 ? styles.activeFilter : styles.filtros_todas} id="mp">Mis preguntas</p>
                                <Link href='/postquestion'>
                                    <button className={styles.filtros_container_button}>Publicar nueva pregunta</button>
                                </Link>
                            </div>
                        </div>
                        <section className={styles.preguntaSect}>
                            {Object.values(preguntas).map((pregunta) => (
                                <div key={pregunta.id} className={styles.pregunta}>
                                    <p className={styles.respuestas}>0 Respuestas</p>
                                    <div className={styles.preguntainfo}>
                                        <h2 className={styles.titulo}>{pregunta.titulo}</h2>
                                        <p className={styles.materia}>{pregunta.materia}</p>
                                    </div>
                                </div>
                            ))}
                        </section>

                    </div>
                </div>
                
            </main>
        </>
    )
};
