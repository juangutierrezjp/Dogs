import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Order from "../order/Order"
import {filterDogs} from '../../redux/actions';
import style from "./filter.module.css"

export default function Filter() {
    const dispatch = useDispatch();
    const { temperamentos } = useSelector(state => state);
    const [created, setCreated] = useState(false)

    const createdHandler = () => {
        setCreated(!created);
        dispatch(filterDogs('rerender', !created));
    }

    const filterHandler = (e) => {
        
        dispatch(filterDogs(e.target.value, created))
    }

    return (
        <div className={style.cont}>
            <h1></h1>
            <div>
            <label htmlFor="NoCreated">solo mostrar creados</label>
            <input onChange={createdHandler} type="checkbox" id="NoCreated" />
            </div>
            <div>
            <label htmlFor="NoCreated">temperamentos</label>
            <select onChange={filterHandler} name="filter" id="filter">
                <option value="Show all">Show all</option>
                {temperamentos?.map((temp, i) => (
                    <option key={i} value={temp}>{temp}</option>
                ))}
            </select>
            </div>
            <div>
            <label htmlFor="NoCreated">ordenar por</label>          
            <Order/>
            </div>
        </div>
    )
}