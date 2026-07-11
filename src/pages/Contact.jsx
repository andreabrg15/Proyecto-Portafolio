import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm("contact_service", "contact_form", form.current, {
            publicKey: "B8HDAOMizhuL_I7NA"
        }).then(
            () => {
                toast.success("El correo se envió con éxito!", { duration: 3000 });
                e.target.reset();
            },
            (error) => {
                console.log("Error", error.text);
            }
        );
    }

    return (
        <div className="grid nunito-sans font-bold text-lg p-3">
            <Toaster position="top-center" toastOptions={{style: {background: "#bfffa0"}}}/>
            <h1 className="text-4xl xl:text-5xl changa-one-regular text-white">Contacto</h1>
            <div className="grid lg:grid-cols-8 animate-appear p-5 lg:p-0">
                {/*Formulario de contacto*/}
                <div className="lg:col-start-3 lg:col-span-3 py-3">
                    <form ref={form} className="grid justify-center py-3 gap-2" onSubmit={sendEmail}>
                        <label htmlFor="name" className="flex justify-start text-white">Ingrese su nombre:</label>
                        <input className="bg-white/80 rounded-2xl md:w-120 lg:w-full px-7 py-2" placeholder="Nombre" type="text" id="name" 
                        name="name" required/>
                        <label htmlFor="email" className="flex justify-start text-white">Ingrese su correo:</label>
                        <input className="bg-white/80 rounded-2xl md:w-120 lg:w-full px-7 py-2" placeholder="Correo" type="email" id="email" 
                        name="from_email" required/>
                        <label htmlFor="message" className="flex justify-start text-white">Ingrese el mensaje que desea enviar:</label>
                        <textarea className="bg-white/80 rounded-2xl md:w-120 lg:w-full px-7 py-2 mb-5" placeholder="Mensaje" rows="4" id="message" 
                        name="message" required/>
                        <button className="bg-mauve-900 text-white rounded-3xl nunito-sans font-bold px-10 
                        py-3 hover:bg-mauve-900/70 hover:cursor-pointer" type="submit">
                            Enviar
                        </button>
                    </form>
                </div>
                <div className="pt-10 pl-2 justify-items-center lg:justify-items-start">
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