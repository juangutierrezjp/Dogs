import React, { useState } from "react";
import styles from "./styles.module.css"

const Paginacion=({pagina, setPagina, maximo})=>{
    const[input,setInput]=useState(1)
    const nextPage=()=>{
        setInput(parseInt(input)+1)
        setPagina(parseInt(pagina)+1)
    }
    const previusPage=()=>{
        setInput(parseInt(input)-1)
        setPagina(parseInt(pagina)-1)
    }
    const onKeyDown=(e)=>{
        if(e.keyCode==13){
            setPagina(parseInt(e.target.value))
            if(parseInt(e.target.value)<1 || parseInt(e.target.value)>maximo || isNaN(parseInt(e.target.value)) ){
                setInput(1)
                setPagina(1)
            }else{
                setPagina(parseInt(e.target.value))
            }
        }
    }
    const onChange=(e)=>{
        setInput(parseInt(e.target.value))
    }
    return(
        <div className={styles.cont}>
            <button disabled={pagina===1||pagina<1} className={styles.button} onClick={previusPage}><svg width="25" height="32" viewBox="0 0 75 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.748263 41.7013L74.0031 0.986886L74.4907 81.5258L0.748263 41.7013Z" fill="white"/></svg>
            </button>
            <input onChange={(e)=>onChange(e)} onKeyDown={(e)=>onKeyDown(e)} name="page" value={input} autoComplete="off" className={styles.input}/>
            <p> DE {maximo}</p>
            <button disabled={pagina===maximo||pagina>maximo} className={styles.button} onClick={nextPage}><svg width="25" height="32" viewBox="0 0 73 84" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.988579 0.119827L72.8781 43.1993L3.37537 83.8948L0.988579 0.119827Z" fill="white"/></svg>
            </button>

        </div>
    )
}
export default Paginacion;