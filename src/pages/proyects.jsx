import React from 'react';
import ProjectCard from '../elements/carta';
import Foto1 from '../assets/sfr.png';
import Foto2 from '../assets/15.png';
import Foto3 from '../assets/16.png';
import { Buttons } from '../elements/button';
const projects = [
    {
        title: "Sena fast Register",
        description: "El proyecto es un software para gestionar el ingreso y salida de vehículos y objetos al SENA, registrando fechas, horarios y generando informes para asegurar un control eficiente y seguro.",
        imageUrl: Foto1,
        technologies: ["Tailwind", "JavaScript", "PHP", "MySQL"],
        gitHub:'https://github.com/Brandonvilla10/SFR',
    },
    {
        title: "Free fire Javascript",
        description: "Creé un juego con temática de *Free Fire* para aprender a usar `fetch`, funciones asíncronas y JavaScript. En él practico peticiones a datos externos, manejo de eventos y actualización dinámica del DOM, aplicando conceptos clave del desarrollo web moderno",
        imageUrl: Foto2,
        technologies: ["CSS", "JavaScript", "PHP", "MySQL"],
        gitHub:'https://advancedproyectgame.online/index.php#home',
        
        
        
    },
    {
        title: "Sistema de Certificados",
        description: "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal...",
        imageUrl: Foto3,
        technologies: ["Boostrap", "JavaScript", "PHP", "MySQL"],
        gitHub:'https://github.com/alejocoding/Alejandro_Velandia_licenciamiento',
        
    },
];

export function Proyecto() {
    return (

        <div className="min-h-screen p-8 flex flex-col gap-6 justify-center" id='proyectos'>

             <h1 className="text-center font-bold text-6xl leading-relaxed my-14 text-animation">
                Proyectos
            </h1>

            <div className="min-h-screen p-8 flex flex-wrap gap-6 justify-center min-w-[310px]">
                
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>

        </div>
    );
};


