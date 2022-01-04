import React from 'react';
import './App.css';
import {Table, get_Q6} from './api_query.js'

function Query6() {

  const columns = React.useMemo(
    () => [
          {
            Header: 'Property Type',
            accessor: 'property_type',
          },
          {
            Header: 'Number of bedrooms',
            accessor: 'bedrooms',
          },
          {
            Header: 'Prix moyen',
            accessor: 'mean_price',
          }
    ],
    []
  )

  const data = React.useMemo(() => get_Q6(), [] )


    return (
      <div className="Query6">
        <h3> Répartition des prix moyens en fonction du nombre de chambre par types de biens :</h3>
        <section id='query-6' className = 'query-container'>
        </section>
        <div>
          <Table columns={columns} data={data}/>
        </div>
      </div>
    );
  }
  
export default Query6;