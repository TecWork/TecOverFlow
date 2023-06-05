import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import styles from '../styles/question.module.css';
import logo from '../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import backArrow from '../public/arrowback.svg';
import publish from '../public/publish.svg';
import axios from 'axios'
import dynamic from "next/dynamic";
import { use, useState, useEffect} from "react";
import { useRouter } from 'next/router';

import leerDoc from "./api/questions/getquestion";
import { data } from "autoprefixer";

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);

const EditerMarkdown = dynamic(
    () =>
      import("@uiw/react-md-editor").then((mod) => {
        return mod.default.Markdown;
      }),
    { ssr: false }
);

const Markdown = dynamic(
    () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
    { ssr: false }
  );


export default function QuestionPage() {
    const router = useRouter();
    const { id, cantRespuestas } = router.query; // id de la pregunta
    const [value, setValue] = useState("**Hello world!!!**"); //Para el editor
    const [pregunta, setPregunta] = useState('');
    const [titulo, setTitulo] = useState('');
    const [materia, setMateria] = useState('');
    const [usuario, setUsuario] = useState('');
    const [botonHabilitado, setBotonHabilitado] = useState(false);
    const [fecha, setFecha] = useState('');

    const [respuestas, setRespuestas] = useState([]);

    const displayResponses = async () => {
        const response = await axios.get('/api/questions/displayResponses', {
            params: {  
                Id: id
            }
        })
        setRespuestas(response.data.respuestas);
    }   
        


    useEffect(() => {
        console.log(respuestas)
    }, [respuestas]);

    const obtenerPregunta = async () => {
        const response = await axios.get('/api/questions/getquestion', {
            params: {
                id: id
            }
        })
        return response.data
    }

    const sendRespnse = async () => {
        const data = {
            idPre: id,
            contenidoPre: value,
            cantRespuestas: cantRespuestas
        }
        const response = await axios.post('/api/questions/postResponse', data)
        router.reload();
    }

    const handleClick = async () => {
        const data = await obtenerPregunta()
        setPregunta(data.data.contenido)
        setTitulo(data.data.titulo)
        setMateria(data.data.materia)
        setUsuario(data.data.nombreUsuario)
        setFecha(data.data.fecha) 
    };
    
    const DisplayResponses = async () => {
        const response = await axios.get('/api/questions/displayResponses')
        setRespuestas(response.data.respuestas)
        console.log(respuestas)
    }   

    useEffect(() => {
        if (id) {
            handleClick()
            displayResponses();
        }
    }, [id]);

   

    return (    
        <>
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
                <div className={styles.user}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="10" r="3" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                </div>
            </header>
            <div className={styles.MainContainer}>
                    <div className={styles.LeftColumn}>
                        <div className={styles.BackButton}>
                            <Link href='/homepage'>
                                <Image src={backArrow} alt='Back Arrow'/>
                            </Link>
                            <p className={styles.ButtonText}>Volver</p>
                        </div>
                        <div className={styles.EditButton}>
                        <Link href='/homepage'>
                                <Image src={backArrow} alt='Back Arrow'/>
                            </Link>
                            <p className={styles.ButtonText}>Editar</p>
                        </div>
                    </div>
                    <div className={styles.RightColumn}>
                        <div className={styles.DetailsContainer}>
                            <div className={styles.PublishDetails}>
                                <p className={styles.PublishTitle}>{titulo}</p> {/* Esto se debe cambiar por una consulta al back */}
                            </div>
                            <div className={styles.UserDetails}>
                                <div className={styles.User}>
                                    <img className={styles.UserImage} src="https://placekitten.com/g/60/60" alt='User Image'/>
                                </div>
                                <p>por <span className={styles.UserName}>{usuario}</span></p>
                            </div>
                            <div className={styles.QuestionDetails}>
                                <p className={styles.responses}>{cantRespuestas} respuestas</p> {/* Esto se debe cambiar por una consulta al back */}
                                <p className={styles.materia}>{materia}</p> {/* Esto se debe cambiar por una consulta al back */}
                                <p className={styles.published}>Publicado hace 2 horas</p> {/* Esto se debe cambiar por una consulta al back */}
                            </div>
                        </div>
                        <div className={styles.QuestionContainer}>
                            <Markdown source={pregunta} />
                        </div>
                        <div className={styles.ResponsesContainer}>
                            {Object.values(respuestas).map((respuesta) => (
                                <div key={respuesta.id} className={styles.Response}>
                                    <div className={styles.UserRes}>
                                        <h3>Respuesta de</h3>
                                        {respuesta.photoUrl}
                                        <img className={styles.UserImageRes} src={respuesta.photoURL} alt=''/>
                                        <p className={styles.UserName}>{respuesta.nombreUsuario}</p>
                                        {/* <p className={styles.publishedRes}>Publicado hace 2 horas</p> */}
                                        <h4>{respuesta.photoUrl}</h4>
                                    </div>
                                    <div className={styles.ResponseDetails}>
                                        <div className={styles.ResponseContent}>
                                            <Markdown source={respuesta.contenido} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.editorCont}>
                            <div data-color-mode="white" >
                                <MDEditor  value={value} onChange={setValue} className={styles.editor} style={{ whiteSpace: 'pre-wrap' }}/>
                            </div>
                        </div>
                        <div className={styles.FooterContainer}>
                            
                            <div className={styles.PublishButton} onClick={sendRespnse} disabled={!botonHabilitado} >
                                <Image src={publish} alt='Publish'/>
                                <p className={styles.ButtonText}>Responder</p>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
        </>
    )
}
