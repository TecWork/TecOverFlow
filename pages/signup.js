export default function SignUp() {
    return (
        <>
        <main>
            <header>
          <div className="container-h">
              <div className='navegacion'>
                <div className="nav-l">
                    <Link href="/pages/index.js">
                        <Image src={logo} alt="Tec Overflow" width={100} height={100} />
                    </Link>
                    <h1 className="titulo">Tec Overflow</h1>
                </div>
                <div className="nav">
                    <div className="link">
                        <Link href="/login" className='active'>Log in</Link>
                    </div>
                    <div className="link">
                        <Link href="#">Sign up</Link>
                    </div>
                </div>
              </div>
          </div>
        </header>
        </main>
        </>
    )
};
