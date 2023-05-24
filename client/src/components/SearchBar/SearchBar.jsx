// SearchBar: un input de búsqueda para encontrar razas de perros por nombre.
import styles from "./SearchBar.module.css";

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import {getDogByName} from '../../redux/actions';

export default function Searchbar() {
    const dispatch = useDispatch();
    const { buscados } = useSelector(state => state);
    let shownList = [...buscados].splice(0, 8);
    const [input, setInput] = useState('');

    const searchHandler = (e) => {
        setInput(e.target.value);
        dispatch(getDogByName(e.target.value));
        shownList = [...buscados].splice(0, 8);
    }

    const selectHandler = (e) => {
        setInput('');
    }

    return (
        <div className={styles.searchbar}>
            <input
                value={input}
                placeholder='Buscar raza...'
                autoComplete='off'
                onChange={searchHandler}
                id="raceName"
                type="text"
                name="raceName"
                aria-autocomplete='both'
                aria-label='Search for breed'
            />
            <ul role='listbox'
                className={input ? '' : styles.hidden}
                aria-label='Search for breed'>
                {shownList.map(dog => <Link
                    key={dog.id}
                    className={styles.link}
                    to={`/home/${dog.id}`}
                    role='option'
                    onClick={selectHandler}
                >
                    {dog.nombre}
                </Link>)}
            </ul>
        </div >
    )
}