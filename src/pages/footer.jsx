export function Footer() {
    return (
        <footer className="relative w-full pt-16 pb-5 px-6 text-white h-[500px] bg-neutral-900 overflow-hidden" id="footer">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/90"></div>
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 font-ubuntu">

                    {/* Navegación */}
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold mb-4 text-purple-400">Explorar</h2>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#inicio" className="hover:text-purple-300 transition">Inicio</a></li>
                            <li><a href="#sobreMi" className="hover:text-purple-300 transition">Sobre mí</a></li>
                            <li><a href="#habilidades" className="hover:text-purple-300 transition">Habilidades</a></li>
                            <li><a href="#proyectos" className="hover:text-purple-300 transition">Proyectos</a></li>
                            <li><a href="#contacto" className="hover:text-purple-300 transition">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold mb-4 text-purple-400">Contacto</h2>
                        <ul className="space-y-2 text-gray-300">
                            <li><span className="font-semibold">Tel:</span> <a href="tel:+573142822521" className="hover:text-purple-300 transition">+57 314 2822521</a></li>
                            <li><span className="font-semibold">Email:</span> <a href="alejoreyvm@hotmail.com" className="hover:text-purple-300 transition">alejoreyvm@hotmail</a></li>
                            <li>
                                <a href="/hoja_vida.pdf" target="_blank" rel="noreferrer" className="flex gap-2 items-center">
                                    <i className="bi bi-file-earmark-person-fill text-purple-400"></i>
                                    <span className="font-medium">Hoja de vida</span>
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Redes */}
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold mb-4 text-purple-400">Redes Sociales</h2>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="https://github.com/alejocoding" target="_blank" className="hover:text-purple-300 transition">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/alejandro-velandia-machado-967836363/" target="_blank" className="hover:text-purple-300 transition">LinkedIn</a></li>
                        </ul>
                    </div>

                    {/* Derechos */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-bold mb-4 text-purple-400">Derechos</h2>
                            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Alejandro Velandia Machado. Todos los derechos reservados.</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </footer>

    );
}