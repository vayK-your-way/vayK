import React from 'react';
import { useState } from 'react';


const SearchContainer = (props) => {

  return (
    <div className='font-montserrat border rounded p-2'>
      <div>
        <div className='p-1'>
          Search destinations below.
        </div>
        <div>
          <p className=''>Destination:</p>
          <input className='border-secondary border rounded' placeholder='Where to?' type='text' id='destinationInput' name='destinationInput' />
        </div>
        <div>
          <h2>Check-in:</h2>
          <input className='border-secondary border rounded' placeholder='YYYY-MM-DD' type='text' id='checkIn'></input>
          <h2>Check-out:</h2>
          <input className='border-secondary border rounded' placeholder="YYYY-MM-DD" type='text' id='checkOut'></input>
        </div>
        <div>
          <br />
          <button onClick={props.handleSearch} className='border-secondary border rounded p-1'>Run Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchContainer;
