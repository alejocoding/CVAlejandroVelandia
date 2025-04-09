import Yo from '../assets/personal.jpeg'

export function Contact(){

    return(

        <div className="contact" id="contact">

        <img src={Yo} className="personal" alt="" />
        
        <div className="contactCard opacity-0 animate-pop-in">

            <p className="Nombre">
            Alejandro Velandia Machado
            </p>
            <span> <i class="bi bi-envelope-at-fill"></i>  Alejoreyvm@hotmail.com</span>
            <span> <i class="bi bi-telephone-fill"></i>  314 282 2521</span>
            <span> <a href="https://github.com/alejocoding"> <i class="bi bi-github"></i> GitHub AlejoCoding</a></span>
            <span> <i class="bi bi-building"></i> Ibague-Tolima</span>
        </div>

        
        </div>
    )


} 