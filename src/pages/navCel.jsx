import { useState } from "react";

export default function MobileNav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: 'Inicio', icon: 'bi-house', link: '#inicio' },
        { name: 'Sobre Mi', icon: 'bi-person', link: '#sobreMi' },
        { name: 'Proyectos', icon: 'bi-file-earmark-bar-graph', link: '#proyectos' },
        { name: 'Contactame', icon: 'bi-envelope', link: '#footer' }
    ];

    return (
        <div className="md:hidden fixed top-0 left-0 right-0 z-[1000]">
            <div className="flex justify-between items-center bg-neutral-900/90 px-4 py-3 border-b border-purple-500/10 shadow-lg">
                <div className="text-purple-300 font-bold text-xl">AVM</div>

                <button
                    className="text-3xl text-purple-300 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}></i>
                </button>
            </div>

            {menuOpen && (
                <div className="bg-neutral-900/95 px-4 py-6 text-white space-y-4 animate-fade-down">
                    {links.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            className="flex items-center gap-2 text-lg hover:text-purple-300 transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            <i className={`bi ${item.icon}`}></i>
                            {item.name}
                        </a>
                    ))}
                    <a
                        href="/HOJA_VIDA_ALEJANDRO_VELANDIA_MACHADO.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 border border-purple-500 rounded-lg px-3 py-2 mt-2 hover:bg-purple-700/20 transition"
                    >
                        <i className="bi bi-file-earmark-person-fill text-purple-400"></i>
                        Hoja CV
                    </a>
                </div>
            )}
        </div>
    );
}