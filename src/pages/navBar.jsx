export function Nav() {

    return (

        <div className=" hidden md:flex lg:h-24 fixed top-0 right-0 left-0 flex justify-center z-[900] animate-fade-down transition-all duration-500 ease-in-out">
        <nav className="container bg-neutral-800/70 backdrop-blur-xl mt-8 flex justify-between items-center max-w-[1150px] rounded-2xl border border-white/10 text-white px-4 shadow-lg shadow-purple-500/10 transition-all duration-300 ease-in-out hover:shadow-purple-500/20">
      
     
          <div className="text-xl font-bold tracking-wide text-purple-400 transition-transform hover:scale-105 duration-300">
            AVM
          </div>
      
          {/* Enlaces */}
          <div className="flex gap-2 space-x-1.5 text-sm font-medium">
            {[
              { name: 'Inicio', icon: 'bi-house', link: '#inicio' },
              { name: 'Sobre Mi', icon: 'bi-person', link: '#sobreMi' },
              { name: 'Proyectos', icon: 'bi-file-earmark-bar-graph', link: '#proyectos' },
              { name: 'Contactame', icon: 'bi-envelope', link: '#footer' }
            ].map((item, idx) => (
              <a key={idx} href={item.link} className="flex items-center gap-1 px-2 py-1 rounded hover:bg-purple-800/20 hover:text-purple-300 transition duration-300">
                <span>
                  <i className={`bi ${item.icon} transition-transform duration-300 group-hover:-translate-y-1`}></i>
                </span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>
      
          {/* Botón CV */}
          <div className="relative flex items-center border border-purple-400/70 py-2 px-4 rounded-xl bg-black/30 text-white/90 hover:bg-purple-700/20 backdrop-blur-xl transition duration-300 hover:scale-105">
            <a  href="/HOJA_VIDA_ALEJANDRO_VELANDIA_MACHADO.pdf" target="_blank" rel="noreferrer" className="flex gap-2 items-center" >
              <i className="bi bi-file-earmark-person-fill text-purple-400"></i>
              <span className="font-medium">Hoja CV</span>
            </a>
          </div>
        </nav>

      </div>
      
        
    );
}