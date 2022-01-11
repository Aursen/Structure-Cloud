import './App.css';
import {Table, get_Q7} from './api_query.js'
import React from 'react';
import { VictoryChart, VictoryTheme, VictoryLine, VictoryLegend, VictoryTooltip, VictoryVoronoiContainer } from 'victory';

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

  const query_data = get_Q7().sort((a, b) => a.year_of_review - b.year_of_review || a.month_of_review - b.month_of_review);
  const data = React.useMemo(() => query_data, [] )

  const data_2010 = query_data.filter(res => res.year_of_review === 2010)
  const data_2011 = query_data.filter(res => res.year_of_review === 2011)
  const data_2012 = query_data.filter(res => res.year_of_review === 2012)
  const data_2013 = query_data.filter(res => res.year_of_review === 2013)
  const data_2014 = query_data.filter(res => res.year_of_review === 2014)
  const data_2015 = query_data.filter(res => res.year_of_review === 2015)
  const data_2016 = query_data.filter(res => res.year_of_review === 2016)
  const data_2017 = query_data.filter(res => res.year_of_review === 2017)
  const data_2018 = query_data.filter(res => res.year_of_review === 2018)
  const data_2019 = query_data.filter(res => res.year_of_review === 2019)
  const data_2020 = query_data.filter(res => res.year_of_review === 2020)
  const data_2021 = query_data.filter(res => res.year_of_review === 2021)
    return (
      <div className="Query7">
        <h3> Evolution du nombre de reviews en fonction du temps :</h3>
        <section id='query-7' className = 'query-container'>
        </section>
        <div>
          <Table columns={columns} data={data}/>
        </div>
        <VictoryChart theme={VictoryTheme.material}
        containerComponent={
          <VictoryVoronoiContainer
          labels={({datum}) => datum.year_of_review}
          />}>
          <VictoryLine style={{
      data: { stroke: "Maroon", strokeWidth: 4},
      parent: { border: "1px solid #ccc"}
    }}
    data={
      data_2010
    }
    x="month_of_review"
    y="number_of_review"
    />
    <VictoryLine style={{
      data: { stroke: "Red" },
      parent: { border: "1px solid #ccc"}
    }}
    data={
      data_2011
    }
    x="month_of_review"
    y="number_of_review"
    />
    <VictoryLine style={{
      data: { stroke: "brown" },
      parent: { border: "1px solid #ccc"}
    }}
    data={
      data_2012
    }
    x="month_of_review"
    y="number_of_review"
    />
    <VictoryLine style={{
      data: { stroke: "orange" },
      parent: { border: "1px solid #ccc"}
    }}
    data={
      data_2013
    }
    x="month_of_review"
    y="number_of_review"
    />
    <VictoryLine style={{
      data: { stroke: "olive" },
      parent: { border: "1px solid #ccc"}
    }}
    data={
      data_2014
    }
    x="month_of_review"
    y="number_of_review"
    />
    <VictoryLine style={{
      data: { stroke: "yellow" },
      parent: { border: "1px solid #ccc"}
    }}
    data={
      data_2015
    }
    x="month_of_review"
    y="number_of_review"
    />
    <VictoryLine style={{
      data: { stroke: "lime" },
      parent: { border: "1px solid #ccc"}
    }}
    data={
      data_2016
    }
    x="month_of_review"
    y="number_of_review"
    />
    <VictoryLine style={{
      data: { stroke: "green" },
      parent: { border: "1px solid #ccc"}
    }}
    data={
      data_2017
    }
    x="month_of_review"
    y="number_of_review"
    />
    <VictoryLine style={{
      data: { stroke: "cyan" },
      parent: { border: "1px solid #ccc"}
    }}
    data={
      data_2018
    }
    x="month_of_review"
    y="number_of_review"
    />
    <VictoryLine style={{
      data: { stroke: "blue" },
      parent: { border: "1px solid #ccc"}
    }}
    data={
      data_2019
    }
    x="month_of_review"
    y="number_of_review"
    />
    <VictoryLine style={{
      data: { stroke: "purple" },
      parent: { border: "1px solid #ccc"}
    }}
    data={
      data_2020
    }
    x="month_of_review"
    y="number_of_review"
    />
    <VictoryLine style={{
      data: { stroke: "magenta" },
      parent: { border: "1px solid #ccc"}
    }}
    data={
      data_2021
    }
    x="month_of_review"
    y="number_of_review"
    />
        </VictoryChart>
        </div>
    );
  }
  
export default Query7;