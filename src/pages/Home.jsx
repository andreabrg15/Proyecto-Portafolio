import { Link } from "react-router-dom";
import { IoLogoReact, IoLogoJavascript } from "react-icons/io5";
import { SiDotnet } from "react-icons/si";
import { FaAngular } from "react-icons/fa";

function Home() {
    return (
        <>
            <div className="grid px-5 py-2 lg:p-5 animate-appear">
                <div className="grid justify-items-center lg:flex lg:pl-25 lg:pr-10">
                    <div className="grid nunito-sans lg:w-1/4 xl:pt-7">
                        <img src="/20260617.jpg" className="justify-self-center size-40 xl:size-48 rounded-full" alt="Foto"/>
                        <h1 className="text-4xl xl:text-5xl text-white changa-one-regular pt-4">Andrea Reyna</h1>
                        <h3 className="text-2xl text-white pt-2">Desarrolladora Jr</h3>
                    </div>
                    <div className="pt-7 lg:pt-3 xl:pt-17 lg:w-3/4">
                        <p className="text-justify nunito-sans font-bold text-white text-lg/8 px-5 lg:px-20">
                            Soy una desarrolladora jr, con conocimientos en React, Node.js y .NET, egresada de la Facultad
                            de Ciencias Físico Matemáticas. Me interesa crear aplicaciones funcionales que brinden una buena
                            experiencia de usuario y me gusta aprender cosas nuevas. He trabajado con operaciones CRUD,
                            consumo y desarrollo de APIs, así como con bases de datos SQL a través de proyectos personales
                            y académicos. Actualmente, busco una oportunidad para construir mayor experiencia en la industria
                            del desarrollo de manera profesional.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid justify-items-center gap-y-5 md:grid-cols-6 p-5 pt-5 pb-8 animate-appear text-xs xl:text-sm">
                <div className="flex gap-10 md:gap-x-7 lg:gap-x-17 xl:gap-x-25 2xl:gap-x-35 md:col-start-2 md:col-span-2">
                    <IoLogoReact size={"8em"} color="#00d3f3" className="animate-spin"/>
                    <FaAngular size={"8em"} color="#fb2c36"/>
                </div>
                <div className="flex gap-10 md:gap-x-7 lg:gap-x-17 xl:gap-x-25 2xl:gap-x-35 md:col-span-2">
                    <IoLogoJavascript size={"8em"} color="#ffff00" className="bg-black rounded-lg"/>
                    <SiDotnet size={"8em"} color="#fff" className="bg-violet-600 rounded-lg"/>
                </div>
            </div>
            <div className="grid p-5 justify-items-center animate-appear">
                <Link className="bg-mauve-900 text-white rounded-3xl nunito-sans font-bold 
                px-10 py-3 hover:bg-mauve-900/70 hover:cursor-pointer" to="/proyectos">
                    Ver Proyectos Destacados
                </Link>
            </div>
        </>
    )
}

export default Home