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
        <div className="md:col-start-2 md:col-span-6 p-3 my-3 bg-mauve-900/50 rounded-xl lg:bg-inherit lg:hover:bg-mauve-900/50 hover:rounded-2xl hover:cursor-pointer" onClick={seeDetails} data-project-id={project.id}>
            <h2 className="md:flex md:justify-start pb-7">{project.date} - {project.name}</h2>
            <div className="grid gap-y-5 md:flex md:justify-start">
                <img src={project.cover} alt="imagen proyecto" className="justify-self-center md:justify-self-start w-70 border-3 rounded-lg border-white"/>
                <div className="grid gap-3 md:pl-7 max-w-dvw">
                    <p className="text-justify"> {project.summary} </p>
                    <FaExternalLinkAlt color="#fff" className="flex justify-self-end lg:hidden"/>
                    <div className="lg:text-xs xl:text-lg lg:flex justify-start gap-3 items-center h-fit hidden">
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