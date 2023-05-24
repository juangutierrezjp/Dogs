import axios from "axios"
import { useState } from "react"
import styles from "./Form.module.css"
import { useSelector } from "react-redux"
import { getAllTemps} from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";




const Form=()=>{
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getAllTemps())
    }, [])

    const { temperamentos } = useSelector(state => state)
    const[form,setForm]=useState({
        imagen:"",
        nombre:"",
        altura:"",
        peso:"",
        temperamentos:[],
        esperanzaDeVida:""
    })
    const selecteds=[]

    const[errors,setErrors]=useState({
        imagen:"",
        nombre:"",
        altura:"",
        peso:"",
        temperamentos:"",
        esperanzaDeVida:""
    })

    const validar=(estado, prop)=>{
        
        if (prop==="nombre"){
            const regex = /^[^0-9]*$/; // Expresión regular que coincide con cualquier caracter que no sea un número
            if(regex.test(estado.nombre)){
                setErrors({...errors, nombre:""})
            }
            else{
                setErrors({...errors, nombre:"por favor introducir una raza válida"})
            }
        }
        if (prop==="temperamentos"){
            const regex = /^[^0-9]*$/; // Expresión regular que coincide con cualquier caracter que no sea un número
            if(regex.test(estado.temperamentos)){
                setErrors({...errors, temperamentos:""})
            }
            else{
                setErrors({...errors, temperamentos:"por favor introducir temperamentos válidos"})
            }
        }
        if(prop==="altura"){
            const regex = /^[0-9.-]*$/;
            if(regex.test(estado.altura)){
                setErrors({...errors, altura:""})
            }
            else{
                setErrors({...errors, altura:"por favor introducir una altura válida"})
            }
        }
        if(prop==="peso"){
            const regex = /^[0-9.-]*$/;
            if(regex.test(estado.peso)){
                setErrors({...errors, peso:""})
            }
            else{
                setErrors({...errors, peso:"por favor introducir un peso válido"})
            }
        }
        if(prop==="esperanzaDeVida"){
            const regex = /^[0-9.-]*$/;
            if(regex.test(estado.esperanzaDeVida)){
                setErrors({...errors, esperanzaDeVida:""})
            }
            else{
                setErrors({...errors, esperanzaDeVida:"por favor introducir una esperanza de vida válida"})
            }
        }




    
    
    }

    const changeHandler= (event)=>{
        const prop= event.target.name;
        const value= event.target.value;
        validar({...form,[prop]:value}, prop)
        setForm( {...form,[prop]:value})
        
    }
    
    const submitHandler=(event)=>{
        event.preventDefault();
        if(errors.imagen==="" &&
        errors.nombre===""&&
        errors.altura===""&&
        errors.peso===""&&
        errors.temperamentos===""&&
        errors.esperanzaDeVida===""&&
        form.imagen!==""&&
        form.nombre!==""&&
        form.altura!==""&&
        form.peso!==""&&
        form.temperamentos!==""&&
        form.esperanzaDeVida!==""


        ){
            const tps=form.temperamentos.join(", ")
            

            axios.post("http://localhost:3001/dogs/", {imagen:form.imagen, nombre:form.nombre, altura:form.altura, peso:form.peso, temperamentos:tps, esperanzaDeVida:form.esperanzaDeVida})
            .then(res=>alert("perro guardado"))
            .catch(err=>alert(err))
            console.log(form)
        }else{
            alert("Por favor completar todos los campos correctamente")
        }
        

    }


 const temperHandler=(e)=>{
    
    const { value } = e.target;
    console.log(form.temperamentos)
    // Si ya existe el temperamento, no hace nada
    if (form.temperamentos.includes(value)) {return}
    else{
        console.log(e.target.value)
        // Si no, lo pasa a inputs y errors
        setForm({
            ...form, temperamentos: [e.target.value + "", ...form.temperamentos],
        });
        console.log(form.temperamentos)
    }
 }
    return(<div>
        <div className={styles.background}>
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
        <form onSubmit={submitHandler} >
            <div className={styles.form}>
            <h1>¡Vamos a crear un nuevo Perro!</h1>
                <div>
                    <input class={styles.input} type="text" placeholder="url de la imagen" value={form.imagen} onChange={changeHandler} name="imagen"/>
                    <span className={styles.floatimg}><img src={form.imagen} alt="" /></span>
                </div>

                <div>
                    <input class={styles.input}  type="text" placeholder="Raza" value={form.nombre} onChange={changeHandler} name="nombre"/>
                    <span>{errors.nombre}</span>
                </div>
                <div >

                    <input class={styles.input} type="text" placeholder="Altura (cm)" value={form.altura} onChange={changeHandler}  name="altura"/>
                    <span>{errors.altura}</span>
                </div>
                <div>
                    
                    <input class={styles.input} type="text" placeholder="Peso (kg)"value={form.peso} onChange={changeHandler}  name="peso"/>
                    <span>{errors.peso}</span>
                </div>
                <div>
                <select onChange={temperHandler} name="temperament" class={styles.inputtype1} >
                    <option value='' hidden>Selecciona temperamentos</option>
                    {temperamentos.map((temper, i) => {
                        return <option key={i} value={temper}>{temper}</option>
                    })}
                </select>
                    
                    <input class={styles.input} type="text" placeholder="temperamentos" autoComplete="off"  value={form.temperamentos}  name="temperamentos"/>
                    <span>{errors.temperamentos}</span>
                </div>
                <div>
                    
                    <input class={styles.input} type="text" placeholder="Esperanza de vida (años):"value={form.esperanzaDeVida} onChange={changeHandler}  name="esperanzaDeVida"/>
                    <span>{errors.esperanzaDeVida}</span>
                </div>
                <button class={styles.btn} type="submit">Enviar</button>
            </div>
        </form>
        </div>
        </div>
        
    )
}

export default Form