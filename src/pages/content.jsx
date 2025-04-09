import "tailwindcss";
import "./tail.css"
import picture from '../assets/header.jpg'


export function Content(){

    return(

        <div className="min-h-screen content">

            <img src={picture} className="img" alt="" />

            <div className="name opacity-0 animate-pop-in">
                <p className="first "> Alejandro</p>
                <p className="second">Velandia</p>
                <p className="third">Software Developer </p>
                 
            </div>
          

        </div>

    )

}