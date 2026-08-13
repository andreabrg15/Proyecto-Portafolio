import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TechItem from "../components/techItem";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle, IoMdCheckmarkCircleOutline } from "react-icons/io";
import data from "../projects.json";
import translate from "translate";

function ProjectDetails({shouldTranslate}) {

    const { id } = useParams();

    const [project, setProject] = useState(() => {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (element.id == id) {
                return element;
            }
        }
    })
    const [slide, setSlide] = useState(0);

    const [name, setName] = useState(project.name);
    const [summary, setSummary] = useState(project.summary);
    const [goal, setGoal] = useState(project.goal);
    const [achieves, setAchieves] = useState(project.achieve);

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

    useEffect(() => {
        async function translateText() {
            var result = await translate(name, { to: "English", from: "Spanish"})
            setName(result)

            result = await translate(summary, { to: "English", from: "Spanish" })
            setSummary(result)

            result = await translate(goal, { to: "English", from: "Spanish" })
            setGoal(result)

            var temp = new Array(achieves.length);
            for (let i = 0; i < achieves.length; i++) {
                result = await translate(achieves[i], { to: "English", from: "Spanish" })
                temp[i] = result
            }
            setAchieves(temp)
        }

        if (shouldTranslate) {
            translateText()
        } else {
            setName(project.name)
            setSummary(project.summary)
            setGoal(project.goal)
            setAchieves(project.achieve)
        }
    }, [shouldTranslate]);

    return (
        <div className="grid nunito-sans font-bold text-white text-lg md:p-3">
            <h1 className="text-4xl xl:text-5xl changa-one-regular pb-6 lg:pb-0">{name}</h1>
            <div className="grid lg:grid-cols-8 mb-6 animate-appear">
                {/*Imagenes y descripcion a detalle*/}
                <div className="lg:col-start-2 lg:col-span-6 py-5 px-5 md:px-10 lg:px-0 max-w-screen">
                    <div className="flex justify-center items-center gap-5">
                        <IoIosArrowDropleftCircle size={"2em"} color="#fff" className="hover:cursor-pointer hover:scale-125"
                        onClick={prevSlide}/>
                        {
                            project.imgs && project.imgs.map((item, index) => (
                                <img src={item} 
                                className={slide == index ? "w-3/4 md:h-85 xl:w-3/4 xl:h-105 justify-self-center mb-7 border-white border-3" 
                                : "w-3/4 md:h-85 xl:w-3/4 xl:h-105 justify-self-center mb-7 border-white border-3 hidden"} key={index}/>
                            ))
                        }
                        <IoIosArrowDroprightCircle size={"2em"} color="#fff" className="hover:cursor-pointer hover:scale-125"
                        onClick={nextSlide}/>
                    </div>
                    <div className="md:text-start h-fit mb-5 xl:flex">
                        {(shouldTranslate) ? "Repository(ies)" : "Repositorio(s)"} &nbsp;
                        {
                            project.repo && project.repo.map((item, index) => (
                                <div className="wrap-anywhere" key={index}>
                                    <a href={item} className="text-cyan-300 hover:underline" target="_blank"> {item}</a>&nbsp;,&nbsp;
                                </div>
                            ))
                        }
                    </div>
                    <div className="md:flex md:justify-start md:gap-3 items-center h-fit mb-6">
                        {
                            project.techItems && project.techItems.map((item, index) => (
                                <div className="my-2 md:my-0" key={index}><TechItem name={item}></TechItem></div>
                            ))
                        }
                    </div>
                    <div className="md:flex md:text-start mb-5">
                        <div className="md:px-6 py-1 bg-fuchsia-500/60 rounded-xl md:mr-3 h-fit">{(shouldTranslate) ? "Project" : "Proyecto"}</div>
                        <div className="text-justify py-1">{summary}</div>
                    </div>
                    <div className="md:flex md:text-start mb-5">
                        <div className="md:px-6 py-1 bg-fuchsia-500/60 rounded-xl md:mr-3 h-fit">{(shouldTranslate) ? "Goal" : "Objetivo"}</div>
                        <div className="text-justify py-1">{goal}</div>
                    </div>
                    <div className="md:flex md:text-start mb-5">
                        <div className="md:px-6 py-1 bg-fuchsia-500/60 rounded-xl md:mr-3 h-fit">{(shouldTranslate) ? "My work" : "Mi trabajo"}</div>
                        <div className="grid">
                        {
                            achieves && achieves.map((item, index) => (
                                <div key={index} className="flex gap-2 mb-1 py-1">
                                    <IoMdCheckmarkCircleOutline size={"1.5em"} className="flex-none"/>
                                    <p className="text-justify">{item}</p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails