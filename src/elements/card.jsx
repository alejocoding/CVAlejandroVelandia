
const card = ({text, ruta, data}) =>{
    return(

        <div class="carta">
            <h3>{text}</h3>
            <img src={ruta} alt=""  className="size-7/12"/>
            <p>{data}</p>
        </div>

    )
}

export default card;