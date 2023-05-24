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
const initialState ={
    todosLosPerros: [],
    perrosMostrandose: [],
    filtrados: [],
    enfiltro: 0,
    temperamentos:[],
    buscados:[],
    creados:[],
    existentes:[]
};

const rootReducer=(state = initialState, action)=>{
    switch(action.type){
        case GET_PERROS:
            const CreadosDogs = action.payload.filter(dog => dog.created)
            const dogsPayload = [...action.payload]

            console.log("mostrando todos los perros...")
            const ordenInicial = dogsPayload.sort((a, b) => a.nombre.localeCompare(b.nombre));
            
            return{...state,
                todosLosPerros: [...dogsPayload],
                 perrosMostrandose:[...ordenInicial],
                filtrados: [...dogsPayload],
                creados:[...CreadosDogs]
                }
                
        case GET_ALL_TEMPS:
            const orderedTemps = action.payload.sort((a, b) => a.localeCompare(b));
            
            return {
                ...state,
                temperamentos: [...orderedTemps],
            };
        
        case FILTRADOS:
            const { filter, created } = action.payload;
            let updatedDogs;

            // Si created es false, mostrar creados y no creados
            if (!created) {
                // Si filter es "show all" o "rerender", mostrar todos
                if (filter === 'Show all' || filter === "rerender") {
                    updatedDogs = state.todosLosPerros;
                }
                // Si filter es cualquier otra cosa, mostrar todos los que incluyan el filtro
                else {
                    updatedDogs = [...state.todosLosPerros].filter(dog => {
                        if (typeof dog.temperamentos === 'string') return dog.temperamentos.includes(filter);
                        return false;
                    })
                }
            }
            // Si created no es false, mostrar creados
            else {
                // Si filter es "show all", mostrar todos los creados
                if (filter === 'Show all') {
                    updatedDogs = state.createdDogs;
                }
                // Si filter es "rerender" mostrar el filtro actual solo con los creados
                else if (filter === 'rerender') {
                    updatedDogs = state.filtrados.filter(dog => dog.creado)
                }
                // Si filter es cualquier otra cosa, mostrar los creados que incluyan el filtro
                else {
                    updatedDogs = [...state.creados].filter(dog => {
                        if (typeof dog.temperamento === 'string') return dog.temperamento.includes(filter);
                        return false;
                    })
                }
            }

            return {
                ...state,
                filtrados: [...updatedDogs],
                perrosMostrandose: [...updatedDogs],
                dogsQty: updatedDogs.length,
            };
            
        case ORDENAR:
            const { payload } = action;
            let filtOrderedDogs;
            let allOrderedDogs;

            if (payload === 'NAscendente') {
                filtOrderedDogs = state.filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
                allOrderedDogs = state.todosLosPerros.sort((a, b) => a.nombre.localeCompare(b.nombre));
            }
            else if (payload === 'NDescendente') {
                filtOrderedDogs = state.filtrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
                allOrderedDogs = state.todosLosPerros.sort((a, b) => b.nombre.localeCompare(a.nombre));
            }

            else if (payload === 'WAscendente') {
                filtOrderedDogs = state.filtrados.sort((a, b) => {
                    if (isNaN(a.peso.slice(-2))) return -1;
                    if (isNaN(b.peso.slice(-2))) return 1;
                    if (Number(a.peso.slice(-2)) > Number(b.peso.slice(-2))) return -1;
                    if (Number(a.peso.slice(-2)) < Number(b.peso.slice(-2))) return 1;
                    if (Number(a.peso.slice(-2)) === Number(b.peso.slice(-2))) return 1;
                    return false;
                });
                allOrderedDogs = state.todosLosPerros.sort((a, b) => {
                    if (isNaN(a.peso.slice(-2))) return -1;
                    if (isNaN(b.peso.slice(-2))) return 1;
                    if (Number(a.peso.slice(-2)) > Number(b.peso.slice(-2))) return -1;
                    if (Number(a.peso.slice(-2)) < Number(b.peso.slice(-2))) return 1;
                    if (Number(a.peso.slice(-2)) === Number(b.peso.slice(-2))) return 1;
                    return false;
                });
            }

            else if (payload === 'WDescendente') {
                filtOrderedDogs = state.filtrados.sort((a, b) => {
                    if (isNaN(a.peso.slice(-2))) return -1;
                    if (isNaN(b.peso.slice(-2))) return 1;
                    if (Number(a.peso.slice(-2)) < Number(b.peso.slice(-2))) return -1;
                    if (Number(a.peso.slice(-2)) > Number(b.peso.slice(-2))) return 1;
                    if (Number(a.peso.slice(-2)) === Number(b.peso.slice(-2))) return 1;
                    return false;
                });
                allOrderedDogs = state.todosLosPerros.sort((a, b) => {
                    if (isNaN(a.peso.slice(-2))) return -1;
                    if (isNaN(b.peso.slice(-2))) return 1;
                    if (Number(a.peso.slice(-2)) < Number(b.peso.slice(-2))) return -1;
                    if (Number(a.peso.slice(-2)) > Number(b.peso.slice(-2))) return 1;
                    if (Number(a.peso.slice(-2)) === Number(b.peso.slice(-2))) return 1;
                    return false;
                });
            }

            return {
                ...state,
                filtrados: [...filtOrderedDogs],
                todosLosPerros: [...allOrderedDogs],
                perrosMostrandose: [...filtOrderedDogs],

            };
            case GET_DOG_BY_NAME:
                return {
                    ...state,
                    buscados: [...action.payload],
                };

        default:
            return{...state}
    }
}

export default rootReducer