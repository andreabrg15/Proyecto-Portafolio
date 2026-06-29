import TechItem from "../components/techItem"

function ProjectCard({project}) {
    return (
        <div className="col-start-2 col-span-6 py-3">
            <h2 className="flex justify-start pb-7">{project.date} - {project.name}</h2>
            <div className="flex justify-start">
                <img src={project.img} alt="imagen proyecto" className="w-70 border-3 rounded-lg border-white"/>
                <div className="grid gap-3 pl-7">
                    <p className="text-justify"> {project.desc} </p>
                    <div className="text-start h-fit">
                        Repositorio: <a href={project.link} className="text-cyan-300 hover:underline" target="_blank"> {project.link}</a>
                    </div>
                    <div className="flex justify-start gap-3 items-center h-fit">
                        {
                            project.techItems.map((techItem) => 
                                (
                                    <TechItem name={techItem}></TechItem>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard