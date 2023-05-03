import styles from '../styles/question.module.css';
import logo from '../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import backArrow from '../public/arrowback.svg';
import publish from '../public/publish.svg';

export default function QuestionPage() {
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
                                <p className={styles.PublishTitle}>¿Comó puedo centrar un div?</p> {/* Esto se debe cambiar por una consulta al back */}
                            </div>
                            <div className={styles.UserDetails}>
                                <div className={styles.User}>
                                    <img className={styles.UserImage} src="https://placekitten.com/g/60/60" alt='User Image'/>
                                </div>
                                <p>por <span className={styles.UserName}>Yovanha Fajardo</span></p>
                            </div>
                            <div className={styles.QuestionDetails}>
                                <p className={styles.responses}>2 respuestas</p> {/* Esto se debe cambiar por una consulta al back */}
                                <p className={styles.materia}>Desarrollo de aplicaciones web</p> {/* Esto se debe cambiar por una consulta al back */}
                                <p className={styles.published}>Publicado hace 2 horas</p> {/* Esto se debe cambiar por una consulta al back */}
                            </div>
                        </div>
                        <div className={styles.QuestionContainer}>

                        </div>
                        <div className={styles.FooterContainer}>
                            <div className={styles.PublishButton}>
                                <Image src={publish} alt='Publish'/>
                                <p className={styles.ButtonText}>Responder</p>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
        </>
    )
};
