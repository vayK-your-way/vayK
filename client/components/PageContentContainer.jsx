import SearchContainer from './SearchContainer.jsx'
import React from 'react';
import RentalsContainer from './RentalsContainer.jsx';
import HotelsContainer from './HotelsContainer.jsx';

const PageContentContainer = () => {
  return (
    <div className='h-screen flex justify-around items-center '>
      <SearchContainer />
      <RentalsContainer />
      <HotelsContainer />
    </div>
  )
}


export default PageContentContainer;