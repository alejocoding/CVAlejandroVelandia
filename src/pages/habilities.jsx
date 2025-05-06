import Skill from "../elements/skill";

export function Habilities() {
    return (
        <div className="flex flex-col items-center justify-center mb-56" >
                <div id="habilidades"></div>
            <h1 className="text-center font-bold text-6xl leading-relaxed my-14 text-animation">
                Habilidades
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1200px] relative z-10">
                <Skill nombre={"HTML"} ruta={"https://images.icon-icons.com/112/PNG/512/html5_18891.png"} />
                <Skill nombre={"CSS"} ruta={"https://img.icons8.com/?size=512&id=21278&format=png"} />
                <Skill nombre={"JavaScript"} ruta={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png"} />
                <Skill nombre={"React"} ruta={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"} />
                <Skill nombre={"Laravel"} ruta={"https://avatars.githubusercontent.com/u/958072?s=280&v=4"} />
                <Skill nombre={"PHP"} ruta={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png"} />
                <Skill nombre={"SQL"} ruta={"https://www.nexustech.je/media/yyaacx1w/sql-1.png"} />
                <Skill nombre={"Tailwind"} ruta={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"} />
                <Skill nombre={"Bootstrap"} ruta={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"} />
                <Skill nombre={"Python"} ruta={"https://149860134.v2.pressablecdn.com/wp-content/uploads/pythoned.png"} />
                <Skill nombre={"Java"} ruta={"https://education.oracle.com/file/general/p-80-java.png"} />
                <Skill nombre={"Git"} ruta={"https://victorroblesweb.es/wp-content/uploads/2018/04/git.png"} />
            </div>

            <div id="sobreMi"></div>
        </div>
    );
}