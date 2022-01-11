import './App.css';
import {Table, get_Q8} from './api_query.js'
import React from 'react';

function Query8() {

  const columns = React.useMemo(
    () => [
          {
            Header: 'Neighborhood',
            accessor: 'neighborhood',
          },
          {
            Header: 'Average rating',
            accessor: 'average_rating_score',
          },
          {
            Header: 'Average accuracy',
            accessor: 'average_accuracy_score',
          },
          {
            Header: 'Average cleanliness',
            accessor: 'average_cleanliness_score',
          },
          {
            Header: 'Average checink score',
            accessor: 'average_checkin_score',
          },
          {
            Header: 'Average communication score',
            accessor: 'average_communication_score',
          },
          {
            Header: 'Average location score',
            accessor: 'average_location_score',
          },
          {
            Header: 'Average score',
            accessor: 'average_score_value',
          }
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
        </div>
      </div>
    );
  }
  
export default Query8;