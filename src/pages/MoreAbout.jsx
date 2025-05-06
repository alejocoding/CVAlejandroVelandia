import React from 'react';
import Boton from '../elements/button';
import FotoIa from '../assets/IMAGEN IA.png';

const ExtendAbout = () => {
  return (
    <section className="max-w-5xl mx-auto p-8 bg-neutral-800 text-white rounded-2xl shadow-lg mt-10 animate-fade-in shadow-glow" >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Imagen */}

        {/* Texto */}
        <div className="transition-opacity duration-100 opacity-0 animate-fade-in-delay">
          <h2 className="text-4xl font-bold text-gray-100 mb-6 ">Sobre mí</h2>
          <p className="text-gray-300 mb-4">
            Soy un desarrollador en formación con interés en la creación de aplicaciones web interactivas. Actualmente estoy desarrollando un juego inspirado en Free Fire para practicar JavaScript, funciones asíncronas y consultas fetch.
          </p>
          <p className="text-gray-300 flex gap-4">

            <Boton  ruta={"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"} redireccion={"https://github.com/alejocoding"}/>
            <Boton  ruta={"https://static.vecteezy.com/system/resources/previews/023/986/568/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"} redireccion={"https://www.linkedin.com/in/alejandro-velandia-machado-967836363/"}/>
            <Boton ruta={"https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_1280.png"} redireccion={"mailto:alejoreyvm@hotmail.com?subject=Interesado%20en%20tu%20perfil&body=Hola%20Alejandro%2C%0A%0AEstoy%20interesado%20en%20tu%20perfil%20como%20desarrollador.%0A%0ASaludos."}/>
            <Boton ruta={"https://images.vexels.com/media/users/3/140965/isolated/preview/a945eef28564ae85fff5ac18adf637d9-icono-de-telefono-redondo.png"} redireccion={"https://wa.me/573142822521"}/>
          </p>
        </div>
        <div className="flex justify-center transition-transform duration-500 hover:scale-105">
          <img
            src={FotoIa}
            alt="Mi foto"
            className="rounded-xl w-64 h-64 object-cover shadow-md object-top "
          />
        </div>
        
      </div>
    </section>
  );
};

export default ExtendAbout;