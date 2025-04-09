
import Card from '../elements/card'
export function Proyects(){

    return(

        <div className="proyects" id='proyects'>

        <section class="proyectos opacity-0 animate-pop-in">

            <h2 class="titulo opacity-0 animate-pop-in ">Some Proyects</h2>
            <div class="slider">
                <div class="contenedor">
                    <Card text ="Game with asyncs fuctions"
                    ruta="https://cdn-icons-png.flaticon.com/512/8293/8293566.png"
                    data ="I've built a basic game using languages such as JS, HTML and CSS" />
                    <Card text ="CRUD LARAVEl" 
                    ruta="https://www.trustradius.com/product-logos/Bb/LB/TTLP9HL5PK83-180x180.JPEG"
                    data ="I've built a CRUD en laravel, to learn de model MVC" />
                    <Card text ="CSS Draw"
                    ruta="https://niixer.com/wp-content/uploads/2024/02/HTML-CSS-Review.png"
                    data ="i've built a draw with only css and html" />
                    <Card text ="Landings pages" 
                    ruta="https://conviertemas.com/wp-content/uploads/2018/11/landing-page-1024x581.jpg"
                    data ="i've built a lot of landing pages, to see more check mi github" />
                    <Card text ="SenaFast" 
                    ruta ="https://cdn-icons-png.flaticon.com/512/4285/4285622.png"
                    data ="I'm working in this proyect to solve a queue problematic that we have at the sena" />
                </div>
            </div>

        </section>
        
        <a href="https://github.com/alejocoding"><i class="bi bi-github"></i> </a>

        </div>
    )
}