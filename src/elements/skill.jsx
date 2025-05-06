
const Skill = ({ nombre, ruta }) => {
    return (
        <div className="p-[1px] rounded-lg bg-gradient-to-r from-white/80 to-purple-300/100 animate-slide-in skill-container">
            <div className="relative flex items-center justify-center gap-6 p-4 h-full bg-gray-900 transition-all duration-300 transform group skill-hover">
                <img src={ruta} alt={nombre} className="w-20 h-full object-contain" />
                <h3 className="text-gray-300 font-ubuntu text-xl tracking-wider">{nombre}</h3>
            </div>
        </div>
    );
}

export default Skill;