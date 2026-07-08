import { createElement } from "react";
import { Link, useLocation } from "react-router-dom"

function Header() {

    const location = useLocation();

    const downloadCV = () => {
        const pdfURL = "CV-Andrea-Reyna-Gtz.pdf";
        const link = document.createElement("a");
        link.href = pdfURL;
        link.download = "CV-Andrea-Reyna.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

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
                    <button onClick={downloadCV} 
                    className="bg-mauve-900 text-white rounded-3xl nunito-sans font-bold px-4 py-1 
                    hover:bg-mauve-900/70 hover:cursor-pointer hover:text-fuchsia-500">
                        Descargar CV
                    </button>
                </div>
            </section>
        </>
    )
}

export default Header