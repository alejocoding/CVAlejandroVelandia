export function About() {
    return (

        <div className="flex justify-center py-30" id="inicio">

            <div className=" flex flex-col md:flex-row gap-12  justify-center text-white/80 container max-w-[1150px]">
                <div className="relative w-72 h-72">
                    <div className="absolute after:content-[''] after:inline-block after:w-2 after:h-2 after:bg-red-500 after:rounded-full after:ml-2"></div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaM6iV0HnZDY8rWlH_hPnqlLYoTKXCC68D0A&s" alt="" className="w-full h-full object-cover rounded-full" />
                </div>

                <div className="max-w-2xl ">
                    <h1 className="font-bold text-3xl sm:text-xl md:text-7xl  gradient-text text-start mb-5 typing-effect">Alejandro Velandia </h1>

                    <p className="text-xl leading-relaxed mb-5">Desarrollador en formación, enfocado en crear soluciones web prácticas
                        y funcionales. Apasionado por transformar ideas en sistemas útiles,
                        con experiencia desde bases de datos hasta interfaces accesibles. Comprometido, analítico y en constante aprendizaje.</p>
                    <div className=" gap-2 md:flex gap-2 text-center mt-2">
                        <button className="inline-flex items-center bg-neutral-800/70 px-3 py-1.5 rounded-lg shadow-sm border border-neutral-200  hover:bg-neutral-700 backdrop-blur-xshover:shadow-md transition-all duration-300 ease-in-out cursor-pointer">
                            <div className="w-2.5 h-2.5 bg-purple-300 rounded-full shadow-sm shadow-purple-400 mr-2 animate-pulse"></div>
                            Desarrollador Full stack
                        </button>
                        <button className="inline-flex items-center bg-neutral-800/70 px-3 py-1.5 rounded-lg shadow-sm border border-neutral-200  hover:bg-neutral-700 backdrop-blur-xshover:shadow-md transition-all duration-300 ease-in-out cursor-pointer">
                            <div className="w-2.5 h-2.5 bg-purple-500 rounded-full shadow-sm shadow-purple-200 mr-2 animate-pulse"></div>
                            Disponible para Trabajar
                        </button>
                    </div>


                </div>
            </div>

        
        </div>
    )
}