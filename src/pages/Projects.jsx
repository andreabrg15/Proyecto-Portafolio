import ProjectCard from "../components/projectCard";
import data from "../projects.json";

function Projects({shouldTranslate}) {

    const projects = data;

    return (
        <div className="grid nunito-sans font-bold text-white text-lg p-3">
            <h1 className="text-4xl xl:text-5xl changa-one-regular">{(shouldTranslate) ? "My Projects" : "Mis proyectos"}</h1>
            <div className="grid md:grid-cols-8 px-4 md:px-3 pt-5 lg:pt-0 mb-6 animate-appear">
                {
                    projects.map((project) =>
                        (
                            <ProjectCard project={project} shouldTranslate={shouldTranslate} key={project.id}/>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Projects