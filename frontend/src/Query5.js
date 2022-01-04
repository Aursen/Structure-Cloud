import React from 'react';
import './App.css';
import {Table, get_Q5} from './api_query.js'

function Query5() {

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
            Header: 'Defined Price',
            accessor: 'price',
          },
          {
            Header: 'Adjusted Price',
            accessor: 'adjusted_price',
          }
    ],
    []
  )

  const data = React.useMemo(() => get_Q5(), [] )
    return (
      <div className="Query5">
        <h3> Nombre de AirBnB n'ayant pas un prix ajusté correspondant au prix catalogue :</h3>
        <section id='query-5' className = 'query-container'>
        </section>
        <div>
          <Table columns={columns} data={data}/>
        </div>
      </div>
    );
  }
  
export default Query5;
  