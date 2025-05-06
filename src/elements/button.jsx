
const  Boton = ({ruta, redireccion}) => {
    return(
        <div className="flex justify-center">
            <a href={redireccion}>
                <img  src={ruta} target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300" aria-label="GitHub" tabindex="0" />
            </a>
        </div>
    );
} 

export default Boton;