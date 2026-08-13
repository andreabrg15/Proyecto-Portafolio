import { createElement } from "react";
import { Link, useLocation } from "react-router-dom"
import { BsTranslate } from "react-icons/bs";

function Header({shouldTranslate, onChange}) {

    const location = useLocation();

    const downloadCV = () => {
        var pdfUrl;
        if (shouldTranslate) {
            pdfUrl = "CV-Andrea-Reyna-(EN).pdf";
        } else {
            pdfUrl = "CV-Andrea-Reyna.pdf"
        }
        const link = document.createElement("a");
        link.href = pdfUrl;
        if (shouldTranslate) {
            link.download = "CV-Andrea-Reyna-(EN).pdf";
        } else {
            link.download = "CV-Andrea-Reyna.pdf";
        }
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <section className="lg:h-24 grid lg:grid-cols-6 items-center nunito-sans font-bold text-lg text-white">
                <div className="grid justify-center pt-8 lg:pt-0">
                    <button className="bg-mauve-100 text-black rounded-xl nunito-sans 
                    font-bold px-4 py-1 hover:bg-mauve-100/70 hover:cursor-pointer flex gap-2 items-center"
                    onClick={onChange}>
                        <BsTranslate/>
                        EN/ES
                    </button>
                </div>
                <div className="grid py-5 gap-3 lg:py-0 lg:col-start-4 lg:col-span-3 xl:col-start-5 xl:col-span-2 lg:flex lg:gap-8">
                    {
                    (location.pathname != '/') && <div className="underline underline-offset-4"><Link className="hover:text-fuchsia-500" to="/">{(shouldTranslate) ? "Home" : "Inicio"}</Link></div>
                    }
                    {
                    (location.pathname != '/proyectos') && <div className="underline underline-offset-4"><Link className="hover:text-fuchsia-500" to="/proyectos">{(shouldTranslate) ? "Projects" : "Proyectos"}</Link></div>
                    }
                    {
                    (location.pathname != '/contacto') && <div className="underline underline-offset-4"><Link className="hover:text-fuchsia-500" to="/contacto">{(shouldTranslate) ? "Contact" : "Contacto"}</Link></div>
                    }
                    <div>
                        <button onClick={downloadCV} 
                        className="bg-mauve-900 text-white rounded-3xl nunito-sans font-bold px-4 py-1 
                        hover:bg-mauve-900/70 hover:cursor-pointer hover:text-fuchsia-500">
                            {(shouldTranslate) ? "Download CV" : "Descargar CV" }
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header