import "tailwindcss";



export function Header(){


    return(
        

        <header className="w-vw h-20 m-0 flex justify-between p-8 text-white bg-gray-950 items-center ">
            <nav className="opacity-0 animate-pop-in">
                <ul className="flex gap-2.5 ">
                    <li><a href="header.jsx#About" className="">About me</a></li>
                    <li><a href="header.jsx#proyects">Proyects</a></li>
                    <li><a href="header.jsx#contact">Contact me</a></li>
                </ul>
            </nav>

            <div className="opacity-0 animate-pop-in">
                MADE IN REACT
            </div>

            
        </header>
    )


}