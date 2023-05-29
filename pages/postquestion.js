import styles from '../styles/postquest.module.css';
import logo from '../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import backArrow from '../public/arrowback.svg';
import publish from '../public/publish.svg';

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

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


export default function PostQuestion() {
    const [value, setValue] = useState("**Hello world!!!**");
    
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
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                    </div>
                    <div className={styles.RightColumn}>
                        <div className={styles.DetailsContainer}>
                            <div className={styles.UserDetails}>
                                <div className={styles.User}>
                                    <img className={styles.UserImage} src="https://placekitten.com/g/60/60" alt='User Image'/>
                                </div>
                                <p>por <span className={styles.UserName}>Yovanha Fajardo</span></p>
                            </div>
                            <div className={styles.QuestionDetails}>
                                <input className={styles.Title} type="text" placeholder="Escriba la pregunta de forma breve"/>
                                <select className={styles.Select}>
                                    <option value="1" select>Materia</option>
                                    <option value="2">DAW</option>
                                    <option value="3">Base de datos</option>.
                                </select>
                            </div>
                        </div>
                        <div className={styles.QuestionContainer}>
                            
                            <div data-color-mode="dark">
                                <MDEditor value={value} onChange={setValue} />
                            </div>

                        </div>
                        <div className={styles.FooterContainer}>
                            <div className={styles.PublishButton}>
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
