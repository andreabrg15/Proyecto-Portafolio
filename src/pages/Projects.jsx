import ProjectCard from "../components/projectCard";
import data from "../projects.json";

function Projects() {

    const projects = data;

    return (
        <div className="grid nunito-sans font-bold text-white text-lg p-3">
            <h1 className="text-5xl changa-one-regular">Mis proyectos</h1>
            <div className="grid grid-cols-8 mb-6">
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