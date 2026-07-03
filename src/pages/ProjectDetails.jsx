import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TechItem from "../components/techItem";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import data from "../projects.json";

function ProjectDetails() {

    const { id } = useParams();

    const [project, setProject] = useState("");
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        if (slide < project.imgs.length - 1) {
            setSlide(slide + 1);
        } else {
            setSlide(0);
        }
    }

    const prevSlide = () => {
        if (slide == 0) {
            setSlide(project.imgs.length - 1);
            console.log(slide);
        } else {
            setSlide(slide - 1);
        }
    }

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
                    <div className="flex justify-center items-center gap-5">
                        <FaArrowAltCircleLeft size={35} color="#fff" className="hover:cursor-pointer hover:scale-125"
                        onClick={prevSlide}/>
                        {
                            project.imgs && project.imgs.map((item, index) => (
                                <img src={item} 
                                className={slide == index ? "w-3/4 max-h-105 justify-self-center mb-7 border-white border-3" 
                                : "w-3/4 max-h-105 justify-self-center mb-7 border-white border-3 hidden"} key={index}/>
                            ))
                        }
                        <FaArrowAltCircleRight size={35} color="#fff" className="hover:cursor-pointer hover:scale-125"
                        onClick={nextSlide}/>
                    </div>
                    <div className="text-start h-fit mb-5">
                        Repositorio: <a href={project.repo} className="text-cyan-300 hover:underline" target="_blank"> {project.repo}</a>
                    </div>
                    <div className="flex justify-start gap-3 items-center h-fit">
                        {
                            project.techItems && project.techItems.map((item, index) => (
                                <TechItem name={item} key={index}></TechItem>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails