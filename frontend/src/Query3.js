import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function Query3() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
  
    return (
      <div className="Query3">
        <h3> Bien les moins chers disponibles entre deux dates en fonction des quartiers :</h3>
        <section id='query-3' className = 'query-container'>
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
        </section>
        <div>
            Résultats
        </div>
      </div>
    );
  }
  
export default Query3;