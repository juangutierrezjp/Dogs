import { Link } from "react-router-dom"
import style from "./navBar.module.css"

const NavBar=()=>{
    return(
        <div className={style.mainConteiner}>
              <div className={style.logo}>

                <h1><Link to="/" className={style.link2}>Perros App!</Link></h1>
            </div>
            <ul>
                <li><Link to="/home" className={style.link}>Home</Link></li>
                <li><Link to="/crear"className={style.link}>crear...</Link></li>
            </ul>
            
            
        </div>
    )
}

export default NavBar