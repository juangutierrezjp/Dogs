import { useDispatch } from "react-redux"

import {orderDogs} from '../../redux/actions';

export default function Order() {
    const dispatch = useDispatch();

   

    const orderHandler = (e) => {
        dispatch(orderDogs(e.target.value));
    }

    return (
        <div>
            <select onChange={orderHandler} name="order" id="order">
                <option value="NAscendente">NOMBRE ↑</option>
                <option value="NDescendente">NOMBRE ↓</option>
                <option value="WAscendente">PESO ↑</option>
                <option value="WDescendente">PESO ↓</option>
            </select>
        </div>
    )
}