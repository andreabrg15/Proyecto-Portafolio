
function Header() {
    return (
        <>
            <section className="h-24 grid grid-cols-4 items-center nunito-sans font-bold text-white">
                <div className="col-start-4 underline underline-offset-4">
                    <a className="px-5 hover:text-blue-500" href="">CV</a>
                    <a className="px-5 hover:text-blue-500" href="">Contacto</a>
                </div>
            </section>
        </>
    )
}

export default Header