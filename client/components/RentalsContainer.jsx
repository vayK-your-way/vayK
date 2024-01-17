import React from "react";

const RentalsContainer = () => {
  return (
    <div className="flex-col">
      <div className="flex border rounded grow items-center m-2 p-2">
        <h1 className="mx-4">Rentals</h1>
        <button className="border-secondary border rounded mx-1 p-1">Sort By</button>
        <button className="border-secondary border rounded mx-1 p-1">Filter</button>
      </div>
      <div className="flex-col grow m-2">
        <div className="border rounded p-2">Beachside Cottage</div>
        <div className="border rounded p-2">City Highrise</div>
        <div className="border rounded p-2">Sea Shack</div>
        <div className="border rounded p-2">The Love Nest</div>
        <div className="border rounded p-2">The Writer's Retreat</div>
      </div>
    </div>
  )
}

export default RentalsContainer;