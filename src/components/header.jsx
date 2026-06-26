
function Header() {
    return (
        <>
            <section className="h-24 grid grid-cols-6 items-center nunito-sans font-bold text-lg text-white">
                <div className="col-start-5 col-span-2 underline underline-offset-4">
                    <a className="px-5 hover:text-fuchsia-500" href="">Proyectos</a>
                    <a className="px-5 hover:text-fuchsia-500" href="">CV</a>
                    <a className="px-5 hover:text-fuchsia-500" href="">Contacto</a>
                </div>
            </section>
        </>
    )
}

export default Header