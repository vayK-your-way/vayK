import React, { useEffect, useState } from 'react';
import RentalsContainer from './RentalsContainer.jsx';
import HotelsContainer from './HotelsContainer.jsx';

const PageContentContainer = () => {

  function saveValues() {
    const destinationInput = document.getElementById('destinationInput').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    setSearchValues({ destinationInput, checkIn, checkOut });
  }

  const [searchValues, setSearchValues] = useState('');

  useEffect(() => console.log('searchValues: ', searchValues), [searchValues]);

  return (
    <div className='h-screen flex justify-around items-center '>
      <div className='border rounded p-2'>
        <div>
          <div className='text-xl p-1'>
            Search destinations below.
          </div>
          <div>
            <p className='m-1'>Destination:</p>
            <input className='border-secondary border rounded m-1' placeholder='Where to?' type='text' id='destinationInput' name='destinationInput' />
          </div>
          <div>
            <h2 className='m-1'>Check-in:</h2>
            <input className='border-secondary border rounded m-1' placeholder='YYYY-MM-DD' type='text' id='checkIn'></input>
            <h2 className='m-1'>Check-out:</h2>
            <input className='border-secondary border rounded m-1' placeholder="YYYY-MM-DD" type='text' id='checkOut'></input>
          </div>
          <div>
            <br />
            <button onClick={saveValues} className='border-secondary border rounded p-1'>Run Search</button>
          </div>
        </div>
      </div>
      <RentalsContainer searchValues={searchValues} />
      <HotelsContainer searchValues={searchValues} />
    </div>
  )
}


export default PageContentContainer;