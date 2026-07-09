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
            <section className="lg:h-24 grid lg:grid-cols-6 items-center nunito-sans font-bold text-lg text-white">
                <div className="grid py-5 gap-3 lg:py-0 lg:col-start-5 lg:col-span-2 lg:flex lg:gap-8">
                    {
                    (location.pathname != '/') && <div className="underline underline-offset-4"><Link className="hover:text-fuchsia-500" to="/">Inicio</Link></div>
                    }
                    {
                    (location.pathname != '/proyectos') && <div className="underline underline-offset-4"><Link className="hover:text-fuchsia-500" to="/proyectos">Proyectos</Link></div>
                    }
                    {
                    (location.pathname != '/contacto') && <div className="underline underline-offset-4"><Link className="hover:text-fuchsia-500" to="/contacto">Contacto</Link></div>
                    }
                    <div>
                        <button onClick={downloadCV} 
                        className="bg-mauve-900 text-white rounded-3xl nunito-sans font-bold px-4 py-1 
                        hover:bg-mauve-900/70 hover:cursor-pointer hover:text-fuchsia-500">
                            Descargar CV
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header