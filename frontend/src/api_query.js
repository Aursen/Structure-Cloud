import { usePagination, useSortBy, useTable } from 'react-table'

export function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
    } = useTable({
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    useSortBy,
    usePagination)
    
    const { pageIndex, pageSize } = state;

    // Render the UI for your table
    return (
<>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div id='pagination'>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
    )
  }

export async function get_Q1(startDate, endDate, capacity) {
  // let url = `http://localhost:8080/api/disponibility?nb=${capacity}&start=${startDate}&end=${endDate}`
  // let response = await fetch(url)
  // let data = await response.json();
  // return data
  return [{}]
}

export async function get_Q2(selectDate) {
  // let url = `http://localhost:8080/api/comments?date=${selectDate}`
  // let response = await fetch(url)
  // let data = await response.json();
  //   return data
  return []
}

export async function get_Q3(startDate, endDate) {
  // let url = `http://localhost:8080/api/cheapest?tart=${startDate}&end=${endDate}`
  // let response = await fetch(url)
  // let data = await response.json();
  //   return data
  return []
}

export async function get_Q4(numroom, numpeople) {
  // let url = `http://localhost:8080/api/availability?nb_bedrooms=${numroom}&nb_beds=${numpeople}`
  // let response = await fetch(url)
  // let data = await response.json();
  //   return data
  return []
}

export async function get_Q5() {
  // let url = `http://localhost:8080/api/adjusted_prices`
  // let response = await fetch(url)
  // let data = await response.json();
  //   return data
  return []
}

export  async function get_Q6() {
  // let url = `http://localhost:8080/api/average_prices`
  // let response = await fetch(url)
  // let data = await response.json();
  //   return data
  return []
}

export function get_Q7() {
  // let url = `http://localhost:8080/api/reviews_evolution`
  // let response = await fetch(url)
  // let data = await response.json();
  //   return data
  return ([
    {
  
        "month_of_review": 11,
        "year_of_review": 2011,
      "number_of_review": 49
    },
    {
  
        "month_of_review": 4,
        "year_of_review": 2019,
      "number_of_review": 17048
    },
    {
  
        "month_of_review": 9,
        "year_of_review": 2015,
      "number_of_review": 2913
    },
    {
  
        "month_of_review": 8,
        "year_of_review": 2013,
      "number_of_review": 296
    },
    {
  
        "month_of_review": 4,
        "year_of_review": 2018,
      "number_of_review": 12678
    },
    {
  
        "month_of_review": 12,
        "year_of_review": 2020,
      "number_of_review": 3820
    },
    {
  
        "month_of_review": 2,
        "year_of_review": 2012,
      "number_of_review": 53
    },
    {
  
        "month_of_review": 5,
        "year_of_review": 2015,
      "number_of_review": 2509
    },
    {
  
        "month_of_review": 3,
        "year_of_review": 2010,
      "number_of_review": 2
    },
    {
  
        "month_of_review": 9,
        "year_of_review": 2010,
      "number_of_review": 5
    },
    {
  
        "month_of_review": 11,
        "year_of_review": 2020,
      "number_of_review": 3017
    },
    {
  
        "month_of_review": 11,
        "year_of_review": 2019,
      "number_of_review": 18449
    },
    {
  
        "month_of_review": 6,
        "year_of_review": 2014,
      "number_of_review": 845
    },
    {
  
        "month_of_review": 8,
        "year_of_review": 2016,
      "number_of_review": 3641
    },
    {
  
        "month_of_review": 6,
        "year_of_review": 2011,
      "number_of_review": 29
    },
    {
  
        "month_of_review": 9,
        "year_of_review": 2014,
      "number_of_review": 1346
    },
    {
  
        "month_of_review": 10,
        "year_of_review": 2011,
      "number_of_review": 68
    },
    {
  
        "month_of_review": 12,
        "year_of_review": 2011,
      "number_of_review": 46
    },
    {
  
        "month_of_review": 11,
        "year_of_review": 2015,
      "number_of_review": 2561
    },
    {
  
        "month_of_review": 10,
        "year_of_review": 2010,
      "number_of_review": 5
    },
    {
  
        "month_of_review": 9,
        "year_of_review": 2012,
      "number_of_review": 190
    },
    {
  
        "month_of_review": 4,
        "year_of_review": 2013,
      "number_of_review": 328
    },
    {
  
        "month_of_review": 3,
        "year_of_review": 2012,
      "number_of_review": 74
    },
    {
  
        "month_of_review": 5,
        "year_of_review": 2016,
      "number_of_review": 5050
    },
    {
  
        "month_of_review": 8,
        "year_of_review": 2014,
      "number_of_review": 798
    },
    {
  
        "month_of_review": 6,
        "year_of_review": 2019,
      "number_of_review": 20855
    },
    {
  
        "month_of_review": 9,
        "year_of_review": 2018,
      "number_of_review": 13864
    },
    {
  
        "month_of_review": 10,
        "year_of_review": 2013,
      "number_of_review": 567
    },
    {
  
        "month_of_review": 3,
        "year_of_review": 2020,
      "number_of_review": 9093
    },
    {
  
        "month_of_review": 5,
        "year_of_review": 2013,
      "number_of_review": 396
    },
    {
  
        "month_of_review": 9,
        "year_of_review": 2013,
      "number_of_review": 487
    },
    {
  
        "month_of_review": 7,
        "year_of_review": 2013,
      "number_of_review": 377
    },
    {
  
        "month_of_review": 5,
        "year_of_review": 2020,
      "number_of_review": 780
    },
    {
  
        "month_of_review": 6,
        "year_of_review": 2018,
      "number_of_review": 12203
    },
    {
  
        "month_of_review": 7,
        "year_of_review": 2020,
      "number_of_review": 4317
    },
    {
  
        "month_of_review": 10,
        "year_of_review": 2014,
      "number_of_review": 1517
    },
    {
  
        "month_of_review": 10,
        "year_of_review": 2018,
      "number_of_review": 16982
    },
    {
  
        "month_of_review": 2,
        "year_of_review": 2014,
      "number_of_review": 388
    },
    {
  
        "month_of_review": 8,
        "year_of_review": 2011,
      "number_of_review": 27
    },
    {
  
        "month_of_review": 1,
        "year_of_review": 2011,
      "number_of_review": 4
    },
    {
  
        "month_of_review": 1,
        "year_of_review": 2016,
      "number_of_review": 2449
    },
    {
  
        "month_of_review": 1,
        "year_of_review": 2020,
      "number_of_review": 16555
    },
    {
  
        "month_of_review": 9,
        "year_of_review": 2011,
      "number_of_review": 47
    },
    {
  
        "month_of_review": 9,
        "year_of_review": 2017,
      "number_of_review": 10142
    },
    {
  
        "month_of_review": 4,
        "year_of_review": 2012,
      "number_of_review": 110
    },
    {
  
        "month_of_review": 4,
        "year_of_review": 2011,
      "number_of_review": 7
    },
    {
  
        "month_of_review": 6,
        "year_of_review": 2020,
      "number_of_review": 1629
    },
    {
  
        "month_of_review": 2,
        "year_of_review": 2019,
      "number_of_review": 12044
    },
    {
  
        "month_of_review": 2,
        "year_of_review": 2016,
      "number_of_review": 2652
    },
    {
  
        "month_of_review": 3,
        "year_of_review": 2011,
      "number_of_review": 8
    },
    {
  
        "month_of_review": 4,
        "year_of_review": 2017,
      "number_of_review": 8435
    },
    {
  
        "month_of_review": 1,
        "year_of_review": 2019,
      "number_of_review": 12292
    },
    {
  
        "month_of_review": 10,
        "year_of_review": 2012,
      "number_of_review": 227
    },
    {
  
        "month_of_review": 1,
        "year_of_review": 2017,
      "number_of_review": 5181
    },
    {
  
        "month_of_review": 11,
        "year_of_review": 2010,
      "number_of_review": 6
    },
    {
  
        "month_of_review": 10,
        "year_of_review": 2015,
      "number_of_review": 3476
    },
    {
  
        "month_of_review": 7,
        "year_of_review": 2016,
      "number_of_review": 4208
    },
    {
  
        "month_of_review": 6,
        "year_of_review": 2017,
      "number_of_review": 9374
    },
    {
  
        "month_of_review": 12,
        "year_of_review": 2016,
      "number_of_review": 4439
    },
    {
  
        "month_of_review": 2,
        "year_of_review": 2013,
      "number_of_review": 152
    },
    {
  
        "month_of_review": 8,
        "year_of_review": 2017,
      "number_of_review": 6295
    },
    {
  
        "month_of_review": 6,
        "year_of_review": 2012,
      "number_of_review": 155
    },
    {
  
        "month_of_review": 8,
        "year_of_review": 2012,
      "number_of_review": 132
    },
    {
  
        "month_of_review": 3,
        "year_of_review": 2018,
      "number_of_review": 9983
    },
    {
  
        "month_of_review": 8,
        "year_of_review": 2015,
      "number_of_review": 1927
    },
    {
  
        "month_of_review": 11,
        "year_of_review": 2018,
      "number_of_review": 13001
    },
    {
  
        "month_of_review": 8,
        "year_of_review": 2019,
      "number_of_review": 13436
    },
    {
  
        "month_of_review": 11,
        "year_of_review": 2012,
      "number_of_review": 173
    },
    {
  
        "month_of_review": 7,
        "year_of_review": 2011,
      "number_of_review": 49
    },
    {
  
        "month_of_review": 5,
        "year_of_review": 2018,
      "number_of_review": 13478
    },
    {
  
        "month_of_review": 10,
        "year_of_review": 2019,
      "number_of_review": 23488
    },
    {
  
        "month_of_review": 4,
        "year_of_review": 2020,
      "number_of_review": 388
    },
    {
  
        "month_of_review": 4,
        "year_of_review": 2014,
      "number_of_review": 752
    },
    {
  
        "month_of_review": 12,
        "year_of_review": 2017,
      "number_of_review": 8131
    },
    {
  
        "month_of_review": 1,
        "year_of_review": 2012,
      "number_of_review": 56
    },
    {
  
        "month_of_review": 9,
        "year_of_review": 2016,
      "number_of_review": 5513
    },
    {
  
        "month_of_review": 6,
        "year_of_review": 2013,
      "number_of_review": 383
    },
    {
  
        "month_of_review": 11,
        "year_of_review": 2014,
      "number_of_review": 1129
    },
    {
  
        "month_of_review": 3,
        "year_of_review": 2015,
      "number_of_review": 1534
    },
    {
  
        "month_of_review": 3,
        "year_of_review": 2021,
      "number_of_review": 6038
    },
    {
  
        "month_of_review": 1,
        "year_of_review": 2013,
      "number_of_review": 143
    },
    {
  
        "month_of_review": 4,
        "year_of_review": 2015,
      "number_of_review": 2018
    },
    {
  
        "month_of_review": 5,
        "year_of_review": 2010,
      "number_of_review": 5
    },
    {
  
        "month_of_review": 2,
        "year_of_review": 2017,
      "number_of_review": 5155
    },
    {
  
        "month_of_review": 5,
        "year_of_review": 2014,
      "number_of_review": 825
    },
    {
  
        "month_of_review": 12,
        "year_of_review": 2019,
      "number_of_review": 17825
    },
    {
  
        "month_of_review": 3,
        "year_of_review": 2017,
      "number_of_review": 6019
    },
    {
  
        "month_of_review": 5,
        "year_of_review": 2017,
      "number_of_review": 9436
    },
    {
  
        "month_of_review": 11,
        "year_of_review": 2013,
      "number_of_review": 448
    },
    {
  
        "month_of_review": 11,
        "year_of_review": 2016,
      "number_of_review": 4943
    },
    {
  
        "month_of_review": 9,
        "year_of_review": 2019,
      "number_of_review": 19969
    },
    {
  
        "month_of_review": 7,
        "year_of_review": 2019,
      "number_of_review": 16838
    },
    {
  
        "month_of_review": 11,
        "year_of_review": 2017,
      "number_of_review": 8006
    },
    {
  
        "month_of_review": 7,
        "year_of_review": 2012,
      "number_of_review": 146
    },
    {
  
        "month_of_review": 5,
        "year_of_review": 2012,
      "number_of_review": 177
    },
    {
  
        "month_of_review": 3,
        "year_of_review": 2014,
      "number_of_review": 609
    },
    {
  
        "month_of_review": 3,
        "year_of_review": 2016,
      "number_of_review": 3243
    },
    {
  
        "month_of_review": 2,
        "year_of_review": 2018,
      "number_of_review": 8605
    },
    {
  
        "month_of_review": 9,
        "year_of_review": 2020,
      "number_of_review": 4026
    },
    {
  
        "month_of_review": 8,
        "year_of_review": 2010,
      "number_of_review": 1
    },
    {
  
        "month_of_review": 4,
        "year_of_review": 2021,
      "number_of_review": 1984
    },
    {
  
        "month_of_review": 12,
        "year_of_review": 2015,
      "number_of_review": 2523
    },
    {
  
        "month_of_review": 1,
        "year_of_review": 2015,
      "number_of_review": 1091
    },
    {
  
        "month_of_review": 7,
        "year_of_review": 2010,
      "number_of_review": 1
    },
    {
  
        "month_of_review": 6,
        "year_of_review": 2015,
      "number_of_review": 2275
    },
    {
  
        "month_of_review": 3,
        "year_of_review": 2013,
      "number_of_review": 219
    },
    {
  
        "month_of_review": 10,
        "year_of_review": 2020,
      "number_of_review": 2856
    },
    {
  
        "month_of_review": 12,
        "year_of_review": 2012,
      "number_of_review": 127
    },
    {
  
        "month_of_review": 7,
        "year_of_review": 2014,
      "number_of_review": 879
    },
    {
  
        "month_of_review": 6,
        "year_of_review": 2016,
      "number_of_review": 4330
    },
    {
  
        "month_of_review": 10,
        "year_of_review": 2017,
      "number_of_review": 10969
    },
    {
  
        "month_of_review": 7,
        "year_of_review": 2018,
      "number_of_review": 12776
    },
    {
  
        "month_of_review": 6,
        "year_of_review": 2010,
      "number_of_review": 3
    },
    {
  
        "month_of_review": 2,
        "year_of_review": 2021,
      "number_of_review": 4453
    },
    {
  
        "month_of_review": 4,
        "year_of_review": 2016,
      "number_of_review": 3875
    },
    {
  
        "month_of_review": 12,
        "year_of_review": 2010,
      "number_of_review": 3
    },
    {
  
        "month_of_review": 10,
        "year_of_review": 2016,
      "number_of_review": 6580
    },
    {
  
        "month_of_review": 3,
        "year_of_review": 2019,
      "number_of_review": 16544
    },
    {
  
        "month_of_review": 2,
        "year_of_review": 2020,
      "number_of_review": 17043
    },
    {
  
        "month_of_review": 12,
        "year_of_review": 2014,
      "number_of_review": 1158
    },
    {
  
        "month_of_review": 8,
        "year_of_review": 2020,
      "number_of_review": 4167
    },
    {
  
        "month_of_review": 7,
        "year_of_review": 2017,
      "number_of_review": 7790
    },
    {
  
        "month_of_review": 1,
        "year_of_review": 2018,
      "number_of_review": 8392
    },
    {
  
        "month_of_review": 1,
        "year_of_review": 2021,
      "number_of_review": 4008
    },
    {
  
        "month_of_review": 4,
        "year_of_review": 2010,
      "number_of_review": 3
    },
    {
  
        "month_of_review": 12,
        "year_of_review": 2018,
      "number_of_review": 12376
    },
    {
  
        "month_of_review": 2,
        "year_of_review": 2011,
      "number_of_review": 5
    },
    {
  
        "month_of_review": 5,
        "year_of_review": 2019,
      "number_of_review": 19201
    },
    {
  
        "month_of_review": 8,
        "year_of_review": 2018,
      "number_of_review": 9499
    },
    {
  
        "month_of_review": 12,
        "year_of_review": 2013,
      "number_of_review": 406
    },
    {
  
        "month_of_review": 2,
        "year_of_review": 2015,
      "number_of_review": 1135
    },
    {
  
        "month_of_review": 7,
        "year_of_review": 2015,
      "number_of_review": 2261
    },
    {
  
        "month_of_review": 1,
        "year_of_review": 2014,
      "number_of_review": 462
    },
    {
  
        "month_of_review": 5,
        "year_of_review": 2011,
      "number_of_review": 24
    }
  ])
}

export async function get_Q8() {
  // let url = `http://localhost:8080/api/average_scores`
  // let response = await fetch(url)
  // let data = await response.json();
  //   return data
  return []
}