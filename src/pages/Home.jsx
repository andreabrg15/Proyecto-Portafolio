
function Home() {
    return (
        <div className="grid grid-cols-6 h-dvh p-5">
            <div className="col-span-2 pt-16 pl-24 nunito-sans">
                <img src="/20260617.jpg" className="justify-self-center size-48 rounded-full" alt="Foto"/>
                <h1 className="text-5xl changa-one-regular pt-4">Andrea Reyna</h1>
                <h3 className="text-2xl pt-2">Desarrolladora Web Jr</h3>
            </div>
            <div className="col-span-4 pt-32">
                <p className="text-justify pl-20 pr-30 nunito-sans font-bold text-white">
                    Soy una desarrolladora web jr, con conocimientos en React, Node.js y .NET, egresada de la Facultad
                    de Ciencias Físico Matemáticas. Me interesa crear soluciones funcionales que brinden una buena
                    experiencia de usuario y me gusta aprender cosas nuevas. He trabajado con operaciones CRUD,
                    consumo y desarrollo de APIs, así como con bases de datos SQL a través de proyectos personales
                    y académicos. Actualmente, busco una oportunidad para construir mayor experiencia en la industria
                    del desarrollo de manera profesional.
                </p>
            </div>
        </div>
    )
}

export default Home