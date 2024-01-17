import React from "react";
import { useEffect, useState } from "react";

const RentalsContainer = ({ searchValues }) => {

  console.log('searchValues.destinationInput: ' + searchValues.destinationInput)
  console.log('searchValues.checkIn: ' + searchValues.checkIn)
  console.log('searchValues.checkOut: ' + searchValues.checkOut)

  const [mappedRentalsList, setMappedRentalsList] = useState([]);

  function handleRentalSearch() {
    console.log('Running handleRentalSearch....')
    fetch(`http://localhost:3000/api/airbnb-info?query=${searchValues.destinationInput}&checkIn=${searchValues.checkIn}&checkOut=${searchValues.checkOut}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((res) => {
        const array = [];
        res.forEach((rental, i) => {
          array.push(
            <div key={i} className="flex border rounded p-2">
              <img className="h-6" src={rental.images[0]} />
              <a href={rental.url}>{rental.name}</a>
              <p>${rental.price.rate}/night</p>
              <p>{rental.bedrooms} bedrooms</p>
              <p>{rental.bathrooms} bathrooms</p>
              <p>Rating: {rental.rating}/5</p>
            </div>)
        })
        return setMappedRentalsList(array)
      }).catch((err) => console.log(err))
  }

  useEffect(() => handleRentalSearch(), [searchValues]);

  useEffect(() => console.log('mappedRentalsList: ', mappedRentalsList), [mappedRentalsList])
  if (mappedRentalsList.length === 0) return (
    <div>
      <p className="text-5xl">
        vayK.
      </p>
      <br></br>
      <p className="text-3xl">
        Your Way.
      </p>

    </div >)
  else {
    return (
      <div className="flex-col">
        <div className="flex border rounded grow items-center m-2 p-2">
          <h1 className="mx-4">Rentals</h1>
          <button className="border-secondary border rounded mx-1 p-1">Sort By</button>
          <button className="border-secondary border rounded mx-1 p-1">Filter</button>
        </div>
        <div className="flex-col grow m-2 overflow-scroll">
          {mappedRentalsList}
        </div>
      </div>
    )
  }

}

export default RentalsContainer;