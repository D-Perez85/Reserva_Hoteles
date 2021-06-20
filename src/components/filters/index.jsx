import React, { useState } from "react";
import "./styles.css";
import Enter from "./inputs/enter";
import Outer from "./inputs/outer";
import Select from "./selects/index";
import Button from "./button/index";
import { hotelsData } from "../../data";
/**
 * @description Function that return all the components of filters type.
 * @param result is the reference for the  finalList fn, who contains the last value/s selected.
 * @param refresh is the reference for the lastRefresh fn, which make a reset of all the filter elements.
 * @param date is the reference for the finalDate fn, who contains the last value/s selected.
 */
function Filters({ result, refresh, date }) {
  let countryList = ["Todos", "Argentina", "Brasil", "Uruguay", "Chile"];
  let priceList = ["Todos", "$", "$$", "$$$", "$$$$"];
  let roomList = [
    "Todos",
    "Habitacion Pequeña",
    "Habitacion Mediana",
    "Habitacion Grande",
  ];
  let [country, setCountry] = useState("Todos");
  let [price, setPrice] = useState("Todos");
  let [room, setRoom] = useState("Todos");
  let [stateDateOut, setDateOut] = useState("");
  let [stateDateIn, setDateIn] = useState("");

  /**
   * @description Functions that receives the filtered value from the child component
   * @param countryUpdate is the parameter that comes from the child component
   * @param priceUpdate is the parameter that comes from the child component
   * @param roomsUpdate is the parameter that comes from the child component
   */
  function filterCountry(countryUpdate, countrySelected) {
    setCountry(countrySelected);
    result(countryUpdate);
  }
  function filterPrice(priceUpdate, priceSelected) {
    setPrice(priceSelected);
    result(priceUpdate);
  }
  function filterRoom(roomsUpdate, roomSelected) {
    setRoom(roomSelected);
    result(roomsUpdate);
  }
  /**
   * @description Function that receive the event onClick from the button Reset, and set the list of the original object.
   */
  function reset() {
    refresh(hotelsData);
    setCountry("Todos");
    setPrice("Todos");
    setRoom("Todos");
    setDateIn("");
    setDateOut("");
  }
  /**
   * @description Function that receive the state of DateIn and set the list of the original object with the list of filtered objetcts.
   */
  function dateIn(hotelsFiltered, state) {
    setDateIn(state);
    date(hotelsFiltered);
  }
  /**
   * @description Function that receive the state of DateOut, and set the list of the original object with the list of filtered objetcts.
   */
  function dateOut(hotelsFiltered, state) {
    setDateOut(state);
    date(hotelsFiltered);
  }
  /**
   * @description Function that receives the status of DateIn, and creates a new format for the check in date, manipulating the data in Unix time.
   */
  function checkIn() {
    let day = new Date(stateDateIn).getDate();
    let month = new Date(stateDateIn).getMonth();
    let year = new Date(stateDateIn).getFullYear();
    let nameMonths = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    if (stateDateIn === "") {
      return "";
    } else {
      return (
        " -Ingreso (" + day + " de " + nameMonths[month] + " de " + year + ")"
      );
    }
  }
  /**
   * @description Function that receives the status of DateIn, and creates a new format for the check in date, manipulating the data in Unix time.
   */
  function checkOut() {
    let day = new Date(stateDateOut).getDate();
    let month = new Date(stateDateOut).getMonth();
    let year = new Date(stateDateOut).getFullYear();
    let nameMonths = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    if (stateDateOut === "") {
      return "";
    } else {
      return (
        " -Salida (" + day + " de " + nameMonths[month] + " de " + year + ")"
      );
    }
  }
  /**
   * @description Function that prints on screen the result of the clicked element with Country tag.
   */
  function countrySelected() {
    if (country === "Todos") {
      return "";
    } else {
      return " -" + country + "";
    }
  }
  /**
   * @description Function that prints on screen the result of the clicked element with Rooms tag.
   */
  function rooms() {
    if (room === "Habitacion Pequeña") {
      return " -Capacidad Pequeña";
    } else if (room === "Habitacion Mediana") {
      return " -Capacidad Mediana";
    } else if (room === "Habitacion Grande") {
      return " -Capacidad Grande";
    } else {
      return "";
    }
  }
  /**
   * @description Function that prints on screen the result of the clicked element with Price tag.
   */
  function prices() {
    if (price === "$") {
      return " - Baja";
    } else if (price === "$$") {
      return " - Económico";
    } else if (price === "$$$") {
      return " - Superior";
    } else if (price === "$$$$") {
      return " - All Inclusive";
    } else {
      return "";
    }
  }
  return (
    <>
      <form className="form-flex" action="">
        <Enter filtrar={dateIn} stateOut={stateDateOut} />
        <Outer filtrar={dateOut} stateIn={stateDateIn} />
        <div className="text-filter">
          <h5>Pais:</h5>
          <Select
            className="select"
            list={countryList}
            id={1}
            filterRef={filterCountry}
            stateCountry={country}
            statePrice={price}
            stateRoom={room}
            stateIn={stateDateIn}
            stateOut={stateDateOut}
          />
        </div>
        <div className="text-filter">
          <h5>Precio: </h5>
          <Select
            list={priceList}
            id={2}
            filterRef={filterPrice}
            stateCountry={country}
            statePrice={price}
            stateRoom={room}
            stateIn={stateDateIn}
            stateOut={stateDateOut}
          />
        </div>
        <div className="text-filter">
          <h5>Tamaño: </h5>
          <Select
            list={roomList}
            id={3}
            filterRef={filterRoom}
            stateCountry={country}
            statePrice={price}
            stateRoom={room}
            stateIn={stateDateIn}
            stateOut={stateDateOut}
          />
        </div>
        <div>
          <Button stateReset={reset} />
        </div>
      </form>

      <div className="results">
        {checkIn()} <br /> {checkOut()} <br />
        {countrySelected()} {prices()} {rooms()}
      </div>
    </>
  );
}
export default Filters;
