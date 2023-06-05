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
    const [searchText, setSearchText] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [user, setUser] = useState({}); //Para el user
    const [showUserDropdown, setShowUserDropdown] = useState(false); //Para el user

    const displayQuestions = async () => {
        const response = await axios.get('/api/questions/displayquestions')
        setPreguntas(response.data.preguntas);
        console.log(preguntas)
    }   
    useEffect(() => {
        displayQuestions();
    }, []);

    const requestPorfile = async () => {
        const response = await axios.get('/api/auth/getPorfile')
        setUser(response.data) ;
        console.log(user)
    }
    useEffect(() => {
        requestPorfile();
    }, []);

    useEffect(() => {
        /* console.log(preguntas) */
    }, [preguntas]);

    const handleSeachInputChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleSelectChange = (event) => {
        setSelectedSubject(event.target.value);
    }

    const handleClickUser = () => {
        setShowUserDropdown(!showUserDropdown);
    }

    const handleLogout = async () => {
        localStorage.removeItem('authToken');

        setUser({});

        window.location.href = '/';
    }

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
                                <h1 className='titulo'>Tec Overflow</h1>
                            </Link>
                        </div>
                    </nav>
                    {/* TERMINA NAVEGACION */}
                    <div className={styles.searchBar}>
                        <input id="searchInput" type="text" placeholder="Ingresa aquí tu pregunta" className={styles.searchInput} value={searchText} onChange={handleSeachInputChange}/>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#888888" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </div>
                    <div className={styles.user} onClick={handleClickUser}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="9" />
                            <circle cx="12" cy="10" r="3" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                    </div>
                    {showUserDropdown && (
                        <div className={styles.userDropdown}>
                            <div>
                                <p>{user.name}</p>
                            </div>
                            <div className={styles.userLogout}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                                    <path d="M15 12h-12l3 -3" />
                                    <path d="M6 15l-3 -3" />
                                </svg>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    )}
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
                                    <select className={styles.filtros_container_filtro_select}
                                    value={selectedSubject}
                                    onChange={handleSelectChange}>
                                        <option disabled selected>Selecciona una materia</option>
                                        <option value="">Todas las materias</option>
                                        <option value="Desarrollo de aplicaciones web">DAW</option>
                                        <option value="Sistemas operativos">Sistemas operativos</option>
                                        <option value="POO">POO</option>
                                        <option value="Base de datos">Base de datos</option>
                                        <option value="Topico de Redes">Topico de Redes</option>
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
                        {Object.values(preguntas)
                            .filter((pregunta) => {
                            const matchSearchText = pregunta.titulo
                                .toLowerCase()
                                .includes(searchText.toLowerCase());
                            const matchSelectedSubject =
                                selectedSubject === "" ||
                                pregunta.materia === selectedSubject;
                            const matchCurrentUser =
                                pregunta.nombreUsuario === user.name; // Check if the question is posted by the current user
                            const matchNoAnswers = 
                                pregunta.cantRespuestas === 0;
                            return (
                                matchSearchText &&
                                matchSelectedSubject &&
                                (isActiveButton3 ? matchCurrentUser : true) &&
                                (isActiveButton2 ? matchNoAnswers : true)
                            );
                            })
                            .map((pregunta) => (
                                <a key={pregunta.id} href={`/questionpage?id=${pregunta.id}&materia=${pregunta.materia}&titulo=${pregunta.titulo}&creador=${pregunta.nombreUsuario}`}>
                                    <div key={pregunta.id} className={styles.pregunta}>
                                        <p className={styles.respuestas}>0 Respuestas</p>
                                        <div className={styles.preguntainfo}>
                                            <h2 className={styles.titulo}>{pregunta.titulo}</h2>
                                            <p className={styles.materia}>{pregunta.materia}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </section>

                    </div>
                </div>
                
            </main>
        </>
    )
};
