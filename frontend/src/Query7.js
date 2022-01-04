import './App.css';
import {Table, get_Q7} from './api_query.js'
import React from 'react';

function Query7() {

  const columns = React.useMemo(
    () => [
          {
            Header: 'Year of review',
            accessor: 'year_of_review',
          },
          {
            Header: 'Month of review',
            accessor: 'month_of_review',
          },
          {
            Header: 'Number of reviews',
            accessor: 'number_of_review',
          }
    ],
    []
  )

  const data = React.useMemo(() => get_Q7(), [] )


    return (
      <div className="Query7">
        <h3> Evolution du nombre de reviews en fonction du temps :</h3>
        <section id='query-7' className = 'query-container'>
        </section>
        <div>
          <Table columns={columns} data={data}/>
        </div>
      </div>
    );
  }
  
export default Query7;