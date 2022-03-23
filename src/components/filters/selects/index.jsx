import React from "react";
import { hotelsData } from "../../../data";

/**
 * @description Function that return the components of Select type filtered, using a FOS (map) and an event onChange.
 * @param list is the parameter that comes from the parent component with the values to filter
 * @param id id for each select element
 * @param filterRef is the reference for  the functions filterCountry, filterRoom, filterPrice
 * @param stateCountry is the reference who represents the set value of the Country
 * @param statePrice is the reference who represents the set value of the Price
 * @param stateRoom is the reference who represents the set value of the Room
 * @param stateIn is the reference who represents the set value of the CheckIn
 * @param stateOut is the reference who represents the set value of the CheckOut
 */
function Select({
  list,
  id,
  filterRef,
  stateCountry,
  statePrice,
  stateRoom,
  stateIn,
  stateOut,
}) {
  return (
    <select className="text-select" onChange={filter} name="" id="">
      {list.map((value, index) => {
        return <option key={index}>{value}</option>;
      })}
    </select>
  );
  /**
   * @description Function that return the select value using a conditional. The results invokes a function.
   * @param e  Event selected or clicked
   */
  function filter(e) {
    if (id === 1) {
      filterByCountry(e);
    } else if (id === 2) {
      filterByPrice(e);
    } else if (id === 3) {
      filterByRooms(e);
    }
  }
  /**
   * @description Function that return the list of values of the country searched, using a filter.
   * @param e  Event selected Country
   * @param value Is the value of the list
   */
  function filterByCountry(e) {
    let countryUpdate = hotelsData
      .filter((value) => {
        return e.target.value === "Todos"
          ? value
          : value.country === e.target.value;
      })
      .filter((value) => {
        return stateRoom === "Todos"
          ? value
          : filterRoom(value.rooms) === stateRoom;
      })
      .filter((value) => {
        return statePrice === "Todos"
          ? value
          : filterPrice(value.price) === statePrice;
      })
      .filter((value) => {
        return stateIn === ""
          ? value
          : stateIn > value.availabilityFrom && stateOut < value.availabilityTo;
      })
      .filter((value) => {
        return stateOut === ""
          ? value
          : stateIn > value.availabilityFrom && stateOut < value.availabilityTo;
      });

    filterRef(countryUpdate, e.target.value);
  }
  /**
   * @description Function that return the list of values of the price searched/selected, using a filter.
   * @param e  Event selected Price
   * @param value Is the value of the list
   */
  function filterByPrice(e) {
    let priceUpdate = hotelsData
      .filter((value) => {
        return e.target.value === "Todos"
          ? value
          : filterPrice(value.price) === e.target.value;
      })
      .filter((value) => {
        return stateRoom === "Todos"
          ? value
          : filterRoom(value.rooms) === stateRoom;
      })
      .filter((value) => {
        return stateCountry === "Todos"
          ? value
          : value.country === stateCountry;
      })
      .filter((value) => {
        return stateIn === ""
          ? value
          : stateIn > value.availabilityFrom && stateOut < value.availabilityTo;
      })
      .filter((value) => {
        return stateOut === ""
          ? value
          : stateIn > value.availabilityFrom && stateOut < value.availabilityTo;
      });
    filterRef(priceUpdate, e.target.value);
  }
  /**
   * @description Function that return the list of values of the rooms searched/selected, using a filter.
   * @param e  Event selected Room
   * @param value Is the value of the list
   */
  function filterByRooms(e) {
    let roomsUpdate = hotelsData
      .filter((value) => {
        return e.target.value === "Todos"
          ? value
          : filterRoom(value.rooms) === e.target.value;
      })
      .filter((value) => {
        return statePrice === "Todos"
          ? value
          : filterPrice(value.price) === statePrice;
      })
      .filter((value) => {
        return stateCountry === "Todos"
          ? value
          : value.country === stateCountry;
      })
      .filter((value) => {
        return stateIn === ""
          ? value
          : stateIn > value.availabilityFrom && stateOut < value.availabilityTo;
      })
      .filter((value) => {
        return stateOut === ""
          ? value
          : stateIn > value.availabilityFrom && stateOut < value.availabilityTo;
      });
    filterRef(roomsUpdate, e.target.value);
  }
  /**
   * @description Function that return the result of the price filtered, comparing a value with a String of the list.
   * @param price  Price selected
   * @param result Is who contains the value of the price. With a Switch case,  compare each case and return the equal value from the list.
   */
  function filterPrice(price) {
    let result = price;
    switch (result) {
      case 1:
        result = "$";
        break;
      case 2:
        result = "$$";
        break;
      case 3:
        result = "$$$";
        break;
      case 4:
        result = "$$$$";
        break;
      default:
        result = "Todos";
        break;
    }
    return result;
  }
  /**
   * @description Function that return the result of the room filtered, comparing a value with a String of the list.
   * @param room  Room selected
   * @param result Is who contains the value of the room. Using a conditional sentence,  compare each case and return the equal value from the list.
   */
  function filterRoom(room) {
    if (room <= 10) {
      return "Habitacion Pequeña";
    } else if (room <= 20) {
      return "Habitacion Mediana";
    } else if (room > 20) {
      return "Habitacion Grande";
    } else {
      return "Todos";
    }
  }
}
export default Select;
