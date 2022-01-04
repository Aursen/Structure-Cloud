import { useTable } from 'react-table'

export function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })
  
    // Render the UI for your table
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

export async function get_Q1(startDate, endDate, capacity) {
  let url = `localhost:8080/api/disponibility?nb=${capacity}&start=${startDate}&end=${endDate}`
  let response = await fetch(url)
  let data = await response.json();
  return data
}

export async function get_Q2(selectDate) {
  let url = `localhost:8080/api/comments?date=${selectDate}`
  let response = await fetch(url)
  let data = await response.json();
    return data
}

export async function get_Q3(startDate, endDate) {
  let url = `localhost:8080/api/cheapest?tart=${startDate}&end=${endDate}`
  let response = await fetch(url)
  let data = await response.json();
    return data
}

export async function get_Q4(numroom, numpeople) {
  let url = `localhost:8080/api/availability?nb_bedrooms=${numroom}&nb_beds=${numpeople}`
  let response = await fetch(url)
  let data = await response.json();
    return data
}

export async function get_Q5() {
  let url = `localhost:8080/api/adjusted_prices`
  let response = await fetch(url)
  let data = await response.json();
    return data
}

export  async function get_Q6() {
  let url = `localhost:8080/api/average_prices`
  let response = await fetch(url)
  let data = await response.json();
    return data
}

export async function get_Q7() {
  // let url = `localhost:8080/api/reviews_evolution`
  // let response = await fetch(url)
  // let data = await response.json();
  //   return data
  return ([
    {
        "_id":
        {
            "month_of_review": 12,
            "year_of_review": 2019
        },
        "number_of_review": 17825
    },
    {
        "_id":
        {
            "month_of_review": 4,
            "year_of_review": 2018
        },
        "number_of_review": 12678
    },
    {
        "_id":
        {
            "month_of_review": 6,
            "year_of_review": 2014
        },
        "number_of_review": 845
    },
    {
        "_id":
        {
            "month_of_review": 11,
            "year_of_review": 2015
        },
        "number_of_review": 2561
    },
    {
        "_id":
        {
            "month_of_review": 6,
            "year_of_review": 2011
        },
        "number_of_review": 29
    }
])
}

export async function get_Q8() {
  let url = `localhost:8080/api/average_scores`
  let response = await fetch(url)
  let data = await response.json();
    return data
}