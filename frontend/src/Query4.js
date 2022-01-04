import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import {Table, get_Q4} from './api_query.js'

function Query4() {
    function display_cap() {
      let max_cap = 10 //compute max capacity
      var arr = [];
          for (var i=1;i<=max_cap;i+=1){
             arr.push(i);
          }
      return arr;
    }
  
    const [numroom, setNumroom] = useState(1);
    const [numpeople, setNumpeople] = useState(1);
    let room_options = display_cap()
    let cap_options = display_cap()

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
              Header: 'Neighborhood',
              accessor: 'neighborhood',
            },
            {
              Header: 'Number of bedrooms',
              accessor: 'bedrooms',
            },
            {
              Header: 'Nombre de lits',
              accessor: 'beds',
            },
            {
              Header: 'Capacity',
              accessor: 'accommodates',
            },
      ],
      []
    )
  
    const data = React.useMemo(() => get_Q4(numroom, numpeople), [] )


    return (
      <div className="Query4">
        <h3> Disponibilité pour partir avec votre couple d'amis :</h3>
        <section id='query-4' className = 'query-container'>
          <div className='query-card' id='room-cap'>
            Nombre de chambres dans le AirBnB :
            <div>
            <select id='room-select' onChange={(e) => {setNumroom(e.target.value)}}>
              {room_options.map(num => {return <option key={num}>{num}</option>})}
            </select>
            </div>
          </div>
          <div className='query-card' id='selection-cap'>
            Nombre de lits dans le AirBnB :
            <div>
            <select id='capa-select' onChange={(e) => {setNumpeople(e.target.value)}}>
              {cap_options.map(num => {return <option key={num}>{num}</option>})}
            </select>
            </div>
          </div>
        </section>
        <div>
          <Table columns={columns} data={data}/>
        </div>
      </div>
    );
  }
  
export default Query4;
  