import CardConteiner from "../../components/cardConteiner/CardConteiner";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTemps, getPerros} from "../../redux/actions";
import Style from "./homestyle.module.css"
import {orderDogs} from '../../redux/actions';
import Toolkit from "../../components/toolkit/Toolkit";
import { useState } from "react";
import NavBar from "../../components/NavBar/navBar";


const Home = ()=>{
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getPerros())
    }, [])
    useEffect(()=>{
        dispatch(getAllTemps())
    }, [])
    useEffect(()=>{
        dispatch(orderDogs("NAscendente"))
    }, [])
    const [ventanaAbierta, setVentanaAbierta] = useState(false);
    const abrirVentana=()=>{
        setVentanaAbierta(true);
      }
    
    const cerrarVentana=()=>{
        setVentanaAbierta(false);
      }



    
    return(
        <div>
        <div className={Style.background}>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
</div>
    <div>
    <div className={Style.toolkit}>
    {ventanaAbierta && (
        <Toolkit  onClose={cerrarVentana} />
      )}
    </div>
    <div className={Style.cardsco}>
    <CardConteiner abrirVentana={abrirVentana}/>
    </div>
    </div>
    </div>
    )
}

export default Home;