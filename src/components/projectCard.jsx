import { useNavigate } from "react-router-dom";
import TechItem from "../components/techItem";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import translate from "translate";

function ProjectCard({project, shouldTranslate}) {

    const navigate = useNavigate();

    const [name, setName] = useState(project.name)
    const [date, setDate] = useState(project.date)
    const [summary, setSummary] = useState(project.summary)

    const seeDetails = (e) => {
        e.preventDefault();

        navigate("/proyectos/"+e.currentTarget.dataset.projectId);
    }

    useEffect(() => {

        async function translateText() {
            var result = await translate(name, { to: "English", from: "Spanish"})
            setName(result)

            result = await translate(date, { to: "English", from: "Spanish" })
            setDate(result)

            result = await translate(summary, { to: "English", from: "Spanish" })
            setSummary(result)
        }

        if (shouldTranslate) {
            translateText()
        } else {
            setName(project.name)
            setDate(project.date)
            setSummary(project.summary)
        }

    }, [shouldTranslate]);

    return (
        <div className="md:col-start-2 md:col-span-6 p-3 my-3 xl:my-1 bg-mauve-900/50 rounded-xl lg:bg-inherit lg:hover:bg-mauve-900/50 hover:rounded-2xl hover:cursor-pointer" onClick={seeDetails} data-project-id={project.id}>
            <h2 className="md:flex md:justify-start pb-7">{name} : &nbsp;{date}</h2>
            <div className="grid gap-y-5 md:flex md:justify-start">
                <img src={project.cover} alt="imagen proyecto" className="justify-self-center md:justify-self-start w-70 border-3 rounded-lg border-white"/>
                <div className="grid gap-3 md:pl-7 max-w-dvw">
                    <p className="text-justify"> {summary} </p>
                    <FaExternalLinkAlt color="#fff" className="flex justify-self-end lg:hidden"/>
                    <div className="lg:text-xs xl:text-lg lg:flex justify-start gap-3 items-center h-fit hidden">
                        {
                            project.techItems.map((item, index) => (
                                <TechItem name={item} key={index}></TechItem>
                            ))
                        }
                        <FaExternalLinkAlt color="#fff" className="lg:flex-none"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard