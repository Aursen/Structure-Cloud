import './App.css';
import {Table, get_Q8} from './api_query.js'
import React from 'react';

function Query8() {

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
            Header: 'Property type',
            accessor: 'property_type',
          },
          {
            Header: 'Room type',
            accessor: 'room_type',
          },
          {
            Header: 'Capacity',
            accessor: 'accommodates',
          },
    ],
    []
  )

  const data = React.useMemo(() => get_Q8(), [] )


    return (
      <div className="Query8">
        <h3> Notes moyenne des biens dans chaque catégorie en fonction des quartiers :</h3>
        <section id='query-8' className = 'query-container'>
        </section>
        <div>
          <Table columns={columns} data={data}/>
        </div>
      </div>
    );
  }
  
export default Query8;