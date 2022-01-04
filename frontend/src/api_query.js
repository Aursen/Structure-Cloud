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

export function get_Q1(startDate, endDate, capacity) {
    return ([{
        "index": 0,
        "id": 6369,
        "host_id": 13660,
        "name": "Rooftop terrace room ,  ensuite bathroom",
        "neighborhood": "Hispanoamérica",
        "property_type": "Private room in apartment",
        "room_type": "Private room",
        "accommodates": 2,
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "price": 60.0,
        "minimum_nights": 1.0,
        "maximum_nights": 1125.0,
        "has_availability": true,
        "availability_30": 30.0,
        "instant_bookable": true
    }]
    )
}

export function get_Q2(selectDate) {
    return ([{
        "index": 0,
        "id": 6369,
        "host_id": 13660,
        "name": "Rooftop terrace room ,  ensuite bathroom",
        "neighborhood": "Hispanoamérica",
        "property_type": "Private room in apartment",
        "room_type": "Private room",
        "accommodates": 2,
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "price": 60.0,
        "minimum_nights": 1.0,
        "maximum_nights": 1125.0,
        "has_availability": true,
        "availability_30": 30.0,
        "instant_bookable": true
    }]
    )
}

export function get_Q3(startDate, endDate) {
    return ([{
        "index": 0,
        "id": 6369,
        "host_id": 13660,
        "name": "Rooftop terrace room ,  ensuite bathroom",
        "neighborhood": "Hispanoamérica",
        "property_type": "Private room in apartment",
        "room_type": "Private room",
        "accommodates": 2,
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "price": 60.0,
        "minimum_nights": 1.0,
        "maximum_nights": 1125.0,
        "has_availability": true,
        "availability_30": 30.0,
        "instant_bookable": true
    }]
    )
}

export function get_Q4(numroom, numpeople) {
    return ([{
        "index": 0,
        "id": 6369,
        "host_id": 13660,
        "name": "Rooftop terrace room ,  ensuite bathroom",
        "neighborhood": "Hispanoamérica",
        "property_type": "Private room in apartment",
        "room_type": "Private room",
        "accommodates": 2,
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "price": 60.0,
        "minimum_nights": 1.0,
        "maximum_nights": 1125.0,
        "has_availability": true,
        "availability_30": 30.0,
        "instant_bookable": true
    }]
    )
}

export function get_Q5() {
    return ([{
        "index": 0,
        "id": 6369,
        "host_id": 13660,
        "name": "Rooftop terrace room ,  ensuite bathroom",
        "neighborhood": "Hispanoamérica",
        "property_type": "Private room in apartment",
        "room_type": "Private room",
        "accommodates": 2,
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "price": 60.0,
        "minimum_nights": 1.0,
        "maximum_nights": 1125.0,
        "has_availability": true,
        "availability_30": 30.0,
        "instant_bookable": true
    }]
    )
}

export function get_Q6() {
    return ([{
        "index": 0,
        "id": 6369,
        "host_id": 13660,
        "name": "Rooftop terrace room ,  ensuite bathroom",
        "neighborhood": "Hispanoamérica",
        "property_type": "Private room in apartment",
        "room_type": "Private room",
        "accommodates": 2,
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "price": 60.0,
        "minimum_nights": 1.0,
        "maximum_nights": 1125.0,
        "has_availability": true,
        "availability_30": 30.0,
        "instant_bookable": true
    }]
    )
}

export function get_Q7() {
    return ([{
        "index": 0,
        "id": 6369,
        "host_id": 13660,
        "name": "Rooftop terrace room ,  ensuite bathroom",
        "neighborhood": "Hispanoamérica",
        "property_type": "Private room in apartment",
        "room_type": "Private room",
        "accommodates": 2,
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "price": 60.0,
        "minimum_nights": 1.0,
        "maximum_nights": 1125.0,
        "has_availability": true,
        "availability_30": 30.0,
        "instant_bookable": true
    }]
    )
}

export function get_Q8() {
    return ([{
        "index": 0,
        "id": 6369,
        "host_id": 13660,
        "name": "Rooftop terrace room ,  ensuite bathroom",
        "neighborhood": "Hispanoamérica",
        "property_type": "Private room in apartment",
        "room_type": "Private room",
        "accommodates": 2,
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "price": 60.0,
        "minimum_nights": 1.0,
        "maximum_nights": 1125.0,
        "has_availability": true,
        "availability_30": 30.0,
        "instant_bookable": true
    }]
    )
}