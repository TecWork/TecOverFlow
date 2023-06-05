import styles from '../styles/postquest.module.css';
import logo from '../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import backArrow from '../public/arrowback.svg';
import publish from '../public/publish.svg';
import axios from 'axios'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { use, useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import { and } from 'firebase/firestore';


const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);

const Markdown = dynamic(
    () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
    { ssr: false }
  );


export default function PostQuestion() {
    const router = useRouter();
    const { id, usuario, materia, titulo } = router.query; // id de la pregunta

    
    const [selectedValue, setSelectedValue] = useState(''); //Para el select
    const [inputValue, setInputValue] = useState(''); //Para el input
    const [user, setUser] = useState({}); //Para el user
    
    const Titulo = useRef();
    const TituloError = useRef();
    const MateriaError = useRef();
    const SelectError = useRef();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      } //Para el input
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    } //Para el select   

    const requestPorfile = async () => {
        const response = await axios.get('/api/auth/getPorfile')
        setUser(response.data);
        console.log(response.data)
    }

    useEffect(() => {
        requestPorfile();
    }, []);

    useEffect(() => {
        if (selectedValue !== '') {
            SelectError.current.className = styles.Select;
            MateriaError.current.className = styles.errorTi;
        }
    }, [selectedValue]); //Para el input
    useEffect(() => {
        if (inputValue !== '') {
            Titulo.current.className = styles.Title;
            TituloError.current.className = styles.errorTi;
        }
    }, [inputValue]); //Para el input

    const obtenerPregunta = async () => {
        const response = await axios.get('/api/questions/getquestion', {
            params: {
                id: id
            }
        })
        return response.data
    }

    const handleClick = async () => {
        const data = await obtenerPregunta()
        setPregunta(data.data.contenido)
    };

    useEffect(() => {
        if (id) {
            handleClick()
        }
    }, [id]);

    const [pregunta, setPregunta] = useState('');
    console.log('pregunta', pregunta)
    useEffect(() => {
        if (pregunta !== '') {
            setValue(pregunta)
        }
    }, [pregunta]);
    const [value, setValue] = useState(); //Para el editor

    const sendQuestion = async () => {
        /* Titulo.current.className = styles.errorTitle;
        TituloError.current.className = styles.showErrorTtle;
        MateriaError.current.className = styles.showErrorMateira;
        SelectError.current.className = styles.errorSelect; */

        if (inputValue === '' &&  selectedValue === '') {
            Titulo.current.className = styles.errorTitle;
            TituloError.current.className = styles.showErrorTtle;
            MateriaError.current.className = styles.showErrorMateira;
            SelectError.current.className = styles.errorSelect;
        }if (inputValue === '') {
            Titulo.current.className = styles.errorTitle;
            TituloError.current.className = styles.showErrorTtle;
        }if (selectedValue === '') {
            MateriaError.current.className = styles.showErrorMateira;
            SelectError.current.className = styles.errorSelect;
        }if(inputValue !== '' && selectedValue !== ''){
            const response = await axios.post('/api/questions/updatequestion', {
                titulo: inputValue,
                contenido: value,
                materia: selectedValue,
                fecha: new Date(),
                id: id
            })
            router.push('/homepage');
        }
        
    }
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
                </header>
                <div className={styles.MainContainer}>
                    <div className={styles.LeftColumn}>
                        <Link href='/homepage'>
                            <div className={styles.BackButton}>
                                
                                    <Image src={backArrow} alt='Back Arrow'/>
                                
                                <p className={styles.ButtonText}>Volver</p>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.RightColumn}>
                        <div className={styles.DetailsContainer}>
                            <div className={styles.UserDetails}>
                                <div className={styles.User}>
                                    <img className={styles.UserImage} src={user.photo} alt='User Image'/>
                                </div>
                                <p>por <span className={styles.UserName}>{user.name}</span></p>
                            </div>
                            <div className={styles.QuestionDetails}>
                                <input ref={Titulo}  className={styles.Title} value={inputValue} onChange={handleInputChange} type="text" placeholder={value} required/>
                                <p ref={TituloError} className={styles.errorTi}><span className={styles.x}>X</span> Ingrese el Titulo de la Pregunta</p>
                                <div className={styles.materias}>
                                    <select ref={SelectError} className={styles.Select} value={selectedValue} onChange={handleSelectChange}>
                                        <option value=""  disabled selected>Materia</option>
                                        <option value="Topico de Redes" select>Topico de Redes</option>
                                        <option value="Desarrollo de aplicaciones web">Desarrollo de aplicaciones web</option>
                                        <option value="Base de datos">Base de datos</option>.
                                    </select>
                                    <p ref={MateriaError} className={styles.errorTi}><span className={styles.x}>X</span> Ingrese la materia</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.QuestionContainer}>
                            <div className={styles.preview}>
                                <Markdown source={value} />
                            </div>
                            <div data-color-mode="white" >
                                <MDEditor  value={value} onChange={setValue} className={styles.editor} style={{ whiteSpace: 'pre-wrap' }}/>
                            </div>

                        </div>
                        <div className={styles.FooterContainer}>
                            <div className={styles.PublishButton} onClick={sendQuestion}>
                                <Image src={publish} alt='Publish'/>
                                <p className={styles.ButtonText}>Publicar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
};
