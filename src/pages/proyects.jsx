import React from 'react';
import ProjectCard from '../elements/carta';
import Foto1 from '../assets/sfr.png';
import Foto2 from '../assets/15.png';
import Foto3 from '../assets/16.png';
const projects = [
    {
        title: "Sena fast Register",
        description: "El proyecto es un software para gestionar el ingreso y salida de vehículos y objetos al SENA, registrando fechas, horarios y generando informes para asegurar un control eficiente y seguro.",
        imageUrl: Foto1,
        technologies: ["Tailwind", "JavaScript", "PHP", "MySQL"],
        gitHub: 'https://github.com/Brandonvilla10/SFR',
    },
    {
        title: "Free fire Javascript",
        description: "Creé un juego con temática de *Free Fire* para aprender a usar `fetch`, funciones asíncronas y JavaScript. En él practico peticiones a datos externos, manejo de eventos y actualización dinámica del DOM, aplicando conceptos clave del desarrollo web moderno",
        imageUrl: Foto2,
        technologies: ["CSS", "JavaScript", "PHP", "MySQL"],
        gitHub: 'https://advancedproyectgame.online/index.php#home',



    },
    {
        title: "Sistema de Certificados",
        description: "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal...",
        imageUrl: Foto3,
        technologies: ["Boostrap", "JavaScript", "PHP", "MySQL"],
        gitHub: 'https://github.com/alejocoding/Alejandro_Velandia_licenciamiento',

    },
];

export function Proyecto() {
    return (
        <div className="min-h-screen px-2 py-16 flex flex-col gap-10 justify-center" id="proyectos">

            <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl leading-relaxed text-animation">
                Proyectos
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>

        </div>
    );
};


