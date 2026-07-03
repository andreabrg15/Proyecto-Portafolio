import { useNavigate } from "react-router-dom";
import TechItem from "../components/techItem";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({project}) {

    const navigate = useNavigate();

    const seeDetails = (e) => {
        e.preventDefault();

        navigate("/proyectos/"+e.currentTarget.dataset.projectId);
    }

    return (
        <div className="col-start-2 col-span-6 p-3 my-3 hover:bg-mauve-900/50 hover:rounded-2xl hover:cursor-pointer" onClick={seeDetails} data-project-id={project.id}>
            <h2 className="flex justify-start pb-7">{project.date} - {project.name}</h2>
            <div className="flex justify-start">
                <img src={project.cover} alt="imagen proyecto" className="w-70 border-3 rounded-lg border-white"/>
                <div className="grid gap-3 pl-7">
                    <p className="text-justify"> {project.summary} </p>
                    <div className="flex justify-start gap-3 items-center h-fit">
                        {
                            project.techItems.map((item, index) => (
                                <TechItem name={item} key={index}></TechItem>
                            ))
                        }
                        <FaExternalLinkAlt color="#fff"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard