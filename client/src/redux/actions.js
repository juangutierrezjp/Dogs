import axios from "axios"
import {
    GET_PERROS,
    GET_ALL_TEMPS,
    GET_DOG_BY_ID,
    GET_DOG_BY_NAME,
    CREATE_DOG,
    ORDENAR,
    FILTRADOS,
    PAGINATION
} from './types';

export const getPerros = ()=>{
    return async function(dispatch){
        console.log("getPerros ejecutada, esperando res...")
        const perrosdata =  await axios.get("http://localhost:3001/dogs")
        const perros= perrosdata.data
        console.log(perros)
        dispatch({type:GET_PERROS, payload:perros})
    }
}



export const filterDogs = (filter, created) => {
    return {
        type: FILTRADOS,
        payload: { filter, created },
    }
}

export const getAllTemps = () => {
    return async (dispatch) => {
        const response = await axios('http://localhost:3001/temperaments');
        console.log("togud")
        
        return dispatch({
            type: GET_ALL_TEMPS,
            payload: response.data,
        })
    }

}

export const orderDogs = (order) => {
    return {
        type: ORDENAR,
        payload: order,
    }
}

export const getDogByName = (name) => {
    return async (dispatch) => {
        const response = await axios(`http://localhost:3001/dogs?name=${name}`);

        return dispatch({
            type: GET_DOG_BY_NAME,
            payload: response.data,
        });
    }
}