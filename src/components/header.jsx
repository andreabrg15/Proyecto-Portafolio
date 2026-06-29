import { Link, useLocation } from "react-router-dom"

function Header() {

    const location = useLocation();

    return (
        <>
            <section className="h-24 grid grid-cols-6 items-center nunito-sans font-bold text-lg text-white">
                <div className="col-start-5 col-span-2 underline underline-offset-4">
                    {
                    (location.pathname != '/') && <Link className="px-5 hover:text-fuchsia-500" to="/">Inicio</Link>
                    }
                    {
                    (location.pathname != '/proyectos') && <Link className="px-5 hover:text-fuchsia-500" to="/proyectos">Proyectos</Link>
                    }
                    {
                    (location.pathname != '/contacto') && <Link className="px-5 hover:text-fuchsia-500" to="/contacto">Contacto</Link>
                    }
                </div>
            </section>
        </>
    )
}

export default Header