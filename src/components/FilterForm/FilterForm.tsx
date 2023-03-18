import React from "react";
import { MDBContainer, MDBBtn  } from "mdb-react-ui-kit";
import './FilterForm.css'

export default function FilterForm() {
  return (
    <div className="py-5 ">
      <input
        type="text"
        className="search-principal"
        placeholder="Search"
      />
      <label htmlFor="date-for">For</label>
      <input
        id="date-for"
        type="text"
        className="search-date"
        placeholder="10/25/2022"
      />
      <label htmlFor="date-for">For</label>

      <input
      type="text"
      className="search-date"
      placeholder="10/25/2022"
    />
    <MDBBtn className="button-filter" color='secondary'>Filter</MDBBtn>
    </div>
  );
}