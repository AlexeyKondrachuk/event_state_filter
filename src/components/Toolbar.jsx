import React from 'react';
import "../App.css"


function Toolbar(props) { 
    const {filters, selected, onSelectFilter } = props
    return (
      <div className='selected_button'>
        {filters.map((f, i) => {
          const className = f === selected ? 'filter-selected' : 'filter'        
          return (
            <button className={className} onClick={e => onSelectFilter(f)} key={`${i++}`}> {f} </button>   
          )
        })}
      </div>
    )
  }

  export default Toolbar