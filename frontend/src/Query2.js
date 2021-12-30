import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function Query2() {
    const [dateselect, setDateselect] = useState(new Date());

    return(
        <div className='Query2'>
            <h3>Commentaire le plus récent pour tous les biens disponibles sur une date :</h3>
            <section id='query-2' className = 'query-container'>
                <div className='query-card' id='selection-dispo' align = 'left'>
                Veuillez saisir une date :
                <DatePicker
                selected={dateselect}
                dateFormat = 'dd/MM/yyyy'
                onChange={(date) => {
                setDateselect(date);
                }}
                />
                </div>
            </section>
        </div>
    )
}

export default Query2;