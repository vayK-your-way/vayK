import React from 'react';


const SearchContainer = () => {
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
          <input className='border-secondary border rounded' placeholder='MM/DD/YY' type='text' id='check-in'></input>
          <h2>Check-out:</h2>
          <input className='border-secondary border rounded' placeholder="MM/DD/YY" type='text' id='check-out'></input>
        </div>
        <div>
          <br />
          <button className='border-secondary border rounded p-1'>Run Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchContainer;
