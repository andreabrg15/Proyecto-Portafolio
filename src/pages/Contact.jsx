import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <div className="grid nunito-sans font-bold text-lg p-5">
            <h1 className="text-5xl changa-one-regular text-white">Contacto</h1>
            <div className="grid grid-cols-8">
                {/*Formulario de contacto*/}
                <div className="col-start-3 col-span-3 py-3">
                    <form className="grid justify-center py-3">
                        <label for="name" className="flex justify-start text-white mb-3">Ingrese su nombre:</label>
                        <input className="bg-white/80 rounded-2xl w-120 px-7 py-2 mb-5" placeholder="Nombre" type="text" id="name" name="name"/>
                        <label for="email" className="flex justify-start text-white mb-3">Ingrese su correo:</label>
                        <input className="bg-white/80 rounded-2xl w-120 px-7 py-2 mb-5" placeholder="Correo" type="email" id="email" name="email"/>
                        <label for="msg" className="flex justify-start text-white mb-3">Ingrese el mensaje que desea enviar:</label>
                        <textarea className="bg-white/80 rounded-2xl w-120 px-7 py-2 mb-7" placeholder="Mensaje" rows="5" id="msg" name="msg"/>
                        <button className="bg-mauve-900 text-white rounded-3xl nunito-sans font-bold px-10 
                        py-3 hover:bg-mauve-900/70 hover:cursor-pointer">
                            Enviar
                        </button>
                    </form>
                </div>
                <div className="pt-10 pl-2">
                    <div className="flex justify-start gap-6">
                        <a href="https://www.linkedin.com/in/andrea-b-reyna-guti%C3%A9rrez-9bb05534a/" target="_blank">
                        <FaLinkedin size={55} color="#0077ff" className="bg-white rounded-lg"/>
                        </a>
                        <a href="https://github.com/andreabrg15" target="_blank">
                            <FaGithub size={55}/>
                        </a>
                    </div>
                    <span className="grid text-justify text-white pt-5">
                        Los mensajes de este formulario se envían a: 
                        <a className="text-cyan-300 hover:underline hover:cursor-pointer" href="mailto:andreareyna34@gmail.com">
                            andreareyna34@gmail.com
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Contact