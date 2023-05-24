import style from "./CardConteiner.module.css"
import Card from "../Card/Card"
import Paginacion from "../Paginacion/Paginacion"
import { useSelector } from "react-redux"
import { useState } from "react"





const CardConteiner=(props)=>{


    const perros= useSelector(state=>state.perrosMostrandose) 

    const[pagina,setPagina]= useState(1)
    const[porPagina,setPorPagina]= useState(8)

    const maximo=Math.ceil(perros.length/porPagina);

    return(
    <div className={style.CardConteiner}>

        {perros
        .slice((pagina-1)*porPagina, (pagina-1)*porPagina+porPagina)
        .map((perro)=>{
            return(
            <div key={perro.id} className={style.fadeIn}>
            <Card 
            id={perro.id}
            nombre={perro.nombre}
            imagen={perro.imagen}
            altura={perro.altura}
            peso={perro.peso}
            temperamentos={perro.temperamentos}
            esperanzaDeVida={perro.esperanzaDeVida}
            />
            </div>
            )
        })}
        <div className={style.paginador}>
        <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo}  />
        <button className={style.vnt}onClick={props.abrirVentana}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16" id="briefcase"><path fill="#212121" d="M9.50696,3 C10.3354,3 11.007,3.67157 11.007,4.5 L11.007,4.5 L11.007,5 L12,5 C13.1046,5 14,5.89543 14,7 L14,7 L14,10.9995 C14,12.104 13.1046,12.9995 12,12.9995 L12,12.9995 L4,12.9995 C2.89543,12.9995 2,12.104 2,10.9995 L2,10.9995 L2,7 C2,5.89543 2.89543,5 4,5 L4,5 L5.00696,5 L5.00696,4.5 C5.00696,3.67157 5.67853,3 6.50696,3 L6.50696,3 Z M5,9 L3,9 L3,10.9995 C3,11.5517 3.44772,11.9995 4,11.9995 L4,11.9995 L12,11.9995 C12.5523,11.9995 13,11.5517 13,10.9995 L13,10.9995 L13,9 L11,9 L11,9.49997 C11,9.77611 10.7761,9.99997 10.5,9.99997 C10.2239,9.99997 10,9.77611 10,9.49997 L10,9.49997 L10,9 L6,9 L6,9.50345 C6,9.77959 5.77614,10.0034 5.5,10.0034 C5.22386,10.0034 5,9.77959 5,9.50345 L5,9.50345 L5,9 Z M12,6 L4,6 C3.44772,6 3,6.44772 3,7 L3,8 L5,8 L5,7.50003 C5,7.22389 5.22386,7.00003 5.5,7.00003 C5.77614,7.00003 6,7.22389 6,7.50003 L6,8 L10,8 L10,7.5 C10,7.22386 10.2239,7 10.5,7 C10.7761,7 11,7.22386 11,7.5 L11,8 L13,8 L13,7 C13,6.44772 12.5523,6 12,6 Z M9.50696,4 L6.50696,4 C6.23082,4 6.00696,4.22386 6.00696,4.5 L6.00696,5 L10.007,5 L10.007,4.5 C10.007,4.22386 9.7831,4 9.50696,4 Z"></path></svg></button>
        </div>
    </div>
    )

}

export default CardConteiner