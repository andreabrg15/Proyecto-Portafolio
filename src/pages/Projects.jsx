import ProjectCard from "../components/projectCard";

function Projects() {

    const projects = [
        {
            id: 1,
            date: "Junio 2026",
            name: "Este Portafolio",
            img: "/portafolio-web.png",
            desc: "Sitio web desarrollado en React como carta de presentación, utilizando Tailwind para el diseño.",
            link: "https://github.com/andreabrg15/Proyecto-Portafolio",
            techItems: ["HTML", "Tailwind", "JavaScript", "React"]
        },
        {
            id: 2,
            date: "Mayo 2026",
            name: "Movies API",
            img: "/movies-api.png",
            desc: "REST API desarrollada a través de ASP.NET con C# con endpoints para películas y géneros.",
            link: "https://github.com/andreabrg15/MoviesApi",
            techItems: ["ASP.NET", "C#", "Entity Framework Core"]
        },
        {
            id: 3,
            date: "Enero - Junio 2025",
            name: "Top Filter, Aplicación de escritorio",
            img: "/top-filter.png",
            desc: "Aplicación de escritorio para aplicar filtros a imágenes y vídeo.",
            link: "https://github.com/andreabrg15/Proyecto_TopFilter",
            techItems: [".NET Framework", "C#", "Windows Forms"]
        }
    ];

    return (
        <div className="grid nunito-sans font-bold text-white text-lg p-5">
            <h1 className="text-5xl changa-one-regular">Mis proyectos</h1>
            <div className="grid grid-cols-8">
                {
                    projects.map((project) =>
                        (
                            <ProjectCard project={project} key={project.id}></ProjectCard>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Projects