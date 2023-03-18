import Head from 'next/head'
import Image from 'next/image'
import { Inter, Lexend_Peta } from 'next/font/google'
import Link from 'next/link'
import logo from '/public/logo.svg'
import msgcode from '/public/msgcode.svg'
import msgalert from '/public/msgalert.svg'
import likealert from '/public/likealert.svg'
import eaglel from '/public/biglogo.svg'
import wave from '/public/wavelanding.svg'
import flecha from '/public/flecha.svg'
import styles from '@/styles/landing.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    console.log('hola'),
    <>
      <Head>
        <title>Tec OverFlow</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <header>
          {/* EMPIEZA NAVEGACION */}
          <nav className='navbar ml-20 mr-20 px-5 mt-10'>
            <div className='navbar-brand'>
              <Link className='nav-link_icon' href='/'>
                <Image className='logo' src={logo} alt='Tec OverFlow'/>
                <h1 className='mx-7 titulo'>Tec OverFlow</h1>
              </Link>
              <ul className='nav-link'>
                <li className='nav-item'>
                  <Link className='' href='/login'>Log In</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-item' href='/signup'>Sign Up</Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* TERMINA NAVEGACION */}
        </header>
        {/* EMPIEZA CONTENIDO */}
        <section>
          <div className={styles.content_Principal} >
            <div className={styles.section1}>
              <div className={styles.hightexts}>
                <div className={styles.texts}>
                  <Image className={styles.mensagitos} src={msgcode} alt="icono dudas"/>
                  <h3 className='flex texts'>Publica tus dudas sobre cualquier materia</h3>
                </div>
                <div className={styles.texts}>
                  <Image className={styles.mensagitos} src={msgalert} alt="icono temas"/>
                  <h3 className='flex texts'>Discute los distintos temas dentro del foro</h3>
                </div>
                <div className={styles.texts}>
                  <Image className={styles.mensagitos} src={likealert} alt="icono califica"/>
                  <h3>Califica las respuestas de los otros estudiantes</h3>
                </div>
              </div>
              <Image className={styles.eagle} src={eaglel} alt="aguila"/>
            </div>
            <div className='flex'>
              <Image src={wave} className={styles.wave} alt="wave"/>
              <a href='#footer'>
                <Image src={flecha} className={styles.flecha} alt="flecha"/>
              </a>
            </div>
          </div>
        </section>
        {/* TERMINA CONTENIDO */}
        <footer id='footer'>
          <div className={styles.footer}>
            <div className={styles.about}>
              <h3 className=' text-2xl text-white'>Sobre nosotros</h3>
              <p className=' text-justify p bg-'>Somos un grupo de estudiantes de la carrera de Ingeniería en Informatica del Tecnológico de Colima, que se encarga de desarrollar una plataforma para la comunidad estudiantil de la universidad, en la cual se puedan resolver dudas y compartir conocimiento.</p>
            </div>
            <div className={styles.lorem}>
              <h3 className=' text-2xl text-white'>Lorem</h3>
              <p className=" text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quas, ipsum numquam cupiditate mollitia rerum unde repellat impedit error sapiente debitis dignissimos iste, voluptates ipsam, inventore voluptas id doloribus quam sint dolores voluptate soluta quo ad consequatur. Tempora qui itaque optio atque unde labore expedita velit vel, dolores, aperiam autem.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
