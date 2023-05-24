import styles  from "./cssLanding.module.css"
import { Link } from "react-router-dom"
const img=require("../../imgs/Recurso1icon.png")

const Landing=()=>{
    return(
        <body>
          <ul className={styles.background}>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
        <header>
          <h1 className={styles.headertitle}></h1>
        </header>
        <main>
          <section className={styles.introsection}>
            <img src={img} className={styles.imglogo}></img>
            <h2>Bienvenido a PerrosApp!</h2>
            <p>Echemos un vistazo a nuestra amplia selección de razas caninas.</p>
            <div className={styles.Link}>
            <Link to="/home" className={styles.linktext}>Ver Catálogo</Link>
            </div>
            
          </section>
        </main>
        <footer>
          <p className={styles.footertext}>App creada por Juan Patricio Gutierrez Guzmán</p>
        </footer>
</ul>
      </body>
    )
}

export default Landing