import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import {Table, get_Q2} from './api_query.js'

function Query2() {
    const [dateselect, setDateselect] = useState(new Date());

    const columns = React.useMemo(
        () => [
              {
                Header: 'Id',
                accessor: 'id',
              },
              {
                Header: 'Name',
                accessor: 'name',
              },
              {
                Header: 'Review',
                accessor: 'comment',
              },
              {
                Header: 'Date of the review',
                accessor: 'date',
              },
              {
                Header: 'Reviewer',
                accessor: 'reviewer_name',
              }
        ],
        []
      )
    
      const data = React.useMemo(() => get_Q2(dateselect), [] )

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
            <div>
            </div>
        </div>
    )
}

export default Query2;