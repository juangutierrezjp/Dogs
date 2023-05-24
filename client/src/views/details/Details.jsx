import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import styles from"./cssDetails.module.css"



function Details() {
    const { dogId } = useParams();
    const [dog, setDog] = useState(null);
  
    useEffect(() => {
      async function fetchDog() {
        const response = await fetch(`http://localhost:3001/dogs/${dogId}`);
        const data = await response.json();
        console.log(data)
        setDog(data);
      }
      fetchDog();
    }, [dogId]);
  
    if (!dog) {
      return <div className={styles.background}>
        <h1 className={styles.titulo}>
        Cargando...
        </h1>
        </div>;
    }
    

    return (
      <div>
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
   </ul>
        <body className={styles.body}>
        <h1 className={styles.titulo}>Te presentamos a {dog.nombre}</h1>
        <img src={dog.imagen} alt={dog.name} className={styles.imagen} />
        <div className={styles.parrafos}>
        <p>este perro tiene una altura de alrededor de {dog.altura} centímetros</p>
        <p>su periodo de vida ronda entre los {dog.esperanzaDeVida} años</p>
        <p>su peso promedio es de {dog.peso} kg</p>
        <p>temperamentos: {dog.temperamentos}</p>
        <p>este perro {dog.creado?"fue publicado por un usuario :)":"estaba en el servidor canino"}</p>
        </div>
      </body>
      </div>
    );
  }
export default Details