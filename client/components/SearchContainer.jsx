import React from 'react';

const SearchContainer = () => {
  return (
    <div className='font-montserrat flex justify-center border-2'>
      <div>
        <div>
          Search destinations below.
        </div>
        <div className='justify-center items-center'>
            <p className=''>Destination:</p>
            <input className='border-secondary border-2 rounded' type='text' id='destinationInput' name='destinationInput' />
        </div>
        <div>
          <h2>Check-in:</h2>
          <input className = 'border-secondary border-2 rounded' type='text' id='check-in'></input>
          <h2>Check-out:</h2>
  
          <input className = 'border-secondary border-2 rounded' type='text' id='check-out'></input>
        </div>
        <div>
          <br />
          <button className = 'border-secondary border-2 rounded'>Run Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchContainer;
