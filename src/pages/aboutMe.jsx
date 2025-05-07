import Foto from "../assets/portafoleo.jpg"

export function About() {
    return (

        <div className="flex justify-center py-30" id="inicio">

            <div className=" flex flex-col lg:flex-row  items-center gap-12  justify-center text-white/80 container max-w-[1150px]">
           
                <div className="relative w-72 h-72 sm:w-60 sm:h-60 md:w-72 md:h-72 rainbow-ring">
                   
                    <img src={Foto} alt="" className="w-full h-full object-cover rounded-full" />
                </div>

                <div className="max-w-2xl ">
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-7xl  gradient-text text-start mb-5 typing-effect py-2">Alejandro Velandia </h1>
                
                    <p className="text-xl leading-relaxed mb-5">Desarrollador full stack, enfocado en crear soluciones web prácticas
                        y funcionales. Apasionado por transformar ideas en sistemas útiles,
                        con experiencia desde bases de datos hasta interfaces accesibles. Comprometido, analítico y en constante aprendizaje.</p>
                    <div className=" gap-2 md:flex gap-2 text-center mt-2">
                        <button className=" inline-flex  items-center bg-neutral-800/70 px-3 py-1.5 rounded-lg shadow-sm border border-neutral-200 mt-2  hover:bg-neutral-700 backdrop-blur-xshover:shadow-md transition-all duration-300 ease-in-out cursor-pointer mx-1 ">
                            <div className="w-2.5 h-2.5 bg-purple-300 rounded-full shadow-sm shadow-purple-400 mr-2 animate-pulse -2 "></div>
                            Desarrollador Full stack
                        </button>
                        <button className="inline-flex items-center bg-neutral-800/70 px-3 py-1.5 rounded-lg shadow-sm border border-neutral-200  hover:bg-neutral-700 backdrop-blur-xshover:shadow-md transition-all duration-300 ease-in-out cursor-pointer mt-2">
                            <div className="w-2.5 h-2.5 bg-purple-500 rounded-full shadow-sm shadow-purple-200 mr-2 animate-pulse"></div>
                            Disponible para Trabajar
                        </button>
                    </div>


                </div>
            </div>

        
        </div>
    )
}