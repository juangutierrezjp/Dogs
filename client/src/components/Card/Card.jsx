import style from "./Card.module.css"
import { Link } from "react-router-dom"


const Card=(props)=>{
    const id=`/home/${props.id}`

    return(
    <div className={style.card}>
       
    <div className={style.cardBorderTop}>
    </div>
    <div  >
        <img src={props.imagen} className={style.img} />
    </div>
  
    <span> {props.nombre}</span>
    <p className={style.Descripcion1}>{props.temperamentos}</p>
    <p className={style.Descripcion1}>peso: {props.peso} kg</p>

    <button> 
        <Link to={id} className={style.linktext} >Ver Detalles</Link>
    </button>

    </div>
    )

}

export default Card