import React from 'react';
import { useState } from 'react';


const SearchContainer = () => {

  const [rentalList, setRentalList] = useState([]);

  function handleSearch() {
    const destinationInput = document.getElementById('destinationInput').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;

    fetch(`http://localhost:3000/api/airbnb-info?query=${destinationInput}&checkIn=${checkIn}&checkOut=${checkOut}`, {
      method: 'GET'
    })
      .then((res) => console.log(res))
      .then((res) => setRentalList(res))
  }

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
          <button onClick={handleSearch} className='border-secondary border rounded p-1'>Run Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchContainer;
