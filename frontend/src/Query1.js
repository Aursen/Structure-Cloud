import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function Query1() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;


  function display_cap() {
    let max_cap = 10 //compute max capacity
    var arr = [];
        for (var i=1;i<=max_cap;i+=1){
           arr.push(i);
        }
    return arr;
  }

  const [numpeople, setNumpeople] = useState(1);
  let cat_options = display_cap()
  return (
    <div className="Query1">
      <h3> Disponibilité entre deux dates en fonctions du nombre de personnes :</h3>
      <section id='query-1' className = 'query-container'>
        <div className='query-card' id='selection-dispo' align = 'left'>
          Veuillez saisir une plage de date :
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            minDate = {new Date()}
            dateFormat = 'dd/MM/yyyy'
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
          />
        </div>
        <div className='query-card' id='selection-cap'>
          Nombre de personnes pouvant être accueillies dans le AirBnB :
          <div>
          <select id='capa-select' onChange={(e) => {setNumpeople(e.target.value)}}>
            {cat_options.map(num => {return <option key={num}>{num}</option>})}
          </select>
          </div>
        </div>
      </section>
      <div>
          Résultats
      </div>
    </div>
  );
}

export default Query1;
