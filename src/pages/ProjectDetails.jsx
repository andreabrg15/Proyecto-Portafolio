import { useEffect, useState } from "react";
import data from "../projects.json";
import { useParams } from "react-router-dom";

function ProjectDetails() {

    const { id } = useParams();

    const [project, setProject] = useState("");

    // Solo corre una vez, porque le puse el array vacio
    useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (element.id == id) {
                setProject(element);
            }
        }
    }, []);

    return (
        <div className="grid nunito-sans font-bold text-white text-lg p-3">
            <h1 className="text-5xl changa-one-regular">{project.name}</h1>
            <div className="grid grid-cols-8 mb-6">
                {/*Imagenes y descripcion a detalle*/}
                <div className="col-start-2 col-span-6 py-5">
                    <img src={project.img} className="w-3/4 max-h-105 justify-self-center mb-5 border-white border-3"/>
                    <div className="text-start h-fit">
                        Repositorio: <a href={project.repo} className="text-cyan-300 hover:underline" target="_blank"> {project.repo}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails