import { Link } from "react-router-dom";
import { IoLogoReact, IoLogoJavascript } from "react-icons/io5";
import { SiDotnet } from "react-icons/si";
import { FaAngular } from "react-icons/fa";

function Home() {
    return (
        <>
            <div className="grid grid-cols-6 p-5">
                <div className="col-span-2 pt-6 pl-24 nunito-sans">
                    <img src="/20260617.jpg" className="justify-self-center size-48 rounded-full" alt="Foto"/>
                    <h1 className="text-5xl text-white changa-one-regular pt-4">Andrea Reyna</h1>
                    <h3 className="text-2xl text-white pt-2">Desarrolladora Jr</h3>
                </div>
                <div className="col-span-4 pt-22">
                    <p className="text-justify nunito-sans font-bold text-white text-lg/8 pl-20 pr-30">
                        Soy una desarrolladora jr, con conocimientos en React, Node.js y .NET, egresada de la Facultad
                        de Ciencias Físico Matemáticas. Me interesa crear soluciones funcionales que brinden una buena
                        experiencia de usuario y me gusta aprender cosas nuevas. He trabajado con operaciones CRUD,
                        consumo y desarrollo de APIs, así como con bases de datos SQL a través de proyectos personales
                        y académicos. Actualmente, busco una oportunidad para construir mayor experiencia en la industria
                        del desarrollo de manera profesional.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-6 p-5 pt-5 pb-8">
                <IoLogoReact size={100} color="#00d3f3" className="animate-spin col-start-2 justify-self-center"/>
                <FaAngular size={100} color="#fb2c36" className="justify-self-center"/>
                <IoLogoJavascript size={100} color="#ffff00" className="bg-black rounded-lg justify-self-center"/>
                <SiDotnet size={100} color="#fff" className="bg-violet-600 rounded-lg justify-self-center"/>
            </div>
            <div className="grid grid-cols-6 p-5">
                <Link className="bg-mauve-900 text-white rounded-3xl nunito-sans font-bold px-10 py-3 col-start-3 
                col-span-2 justify-self-center hover:bg-mauve-900/70 hover:cursor-pointer"
                to="/proyectos">
                    Ver Proyectos Destacados
                </Link>
            </div>
            <div className="grid grid-cols-6 p-5 pt-0 pb-12 text-start pl-20">
                <h3 className="text-4xl text-white changa-one-regular mb-4">Habilidades</h3>
                <div className="nunito-sans font-bold text-white text-lg/8 row-start-2 col-span-3">
                    <ul>
                        <li><span className="bg-mauve-950">Frontend:</span> React, Angular, HTML, CSS, Tailwind</li>
                        <li><span className="bg-mauve-950">Backend:</span> Node.js, Express, .NET</li>
                        <li><span className="bg-mauve-950">Lenguajes:</span> JavaScript, C#, PHP</li>
                        <li><span className="bg-mauve-950">Bases de datos:</span> SQL Server, MySQL</li>
                        <li><span className="bg-mauve-950">Herramientas:</span> Github, Figma</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home