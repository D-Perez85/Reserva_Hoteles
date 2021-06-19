import React,{useState} from 'react'
import { hotelsData } from "../../../data";
import Swal from 'sweetalert2'
/**
 * @description Function that return the exactly dateIn checked by the customer.
 * @param filtrar is the reference for the  dateIn fn, who contains and set the date  selected with the list of hotels availables.
* @param stateOut is the reference for the CheckOut data result. With this parameter I make a stop between both inputs, until they are selected nothing changes in the cards. 
*/
function Enter({filtrar, stateOut}){
    let [availability] = useState();
    function filter(e) {
    let inputDate = new Date(e.target.value.replaceAll("-","/")).getTime() + 86300000; 
    let today = new Date().getTime();
     if(inputDate < today){
        Swal.fire("Debe seleccionar una fecha mayor a la actual");
     }else{
     let updateHotelsList = hotelsData.filter((value)=>{
         if(stateOut){
             return ( 
                inputDate > value.availabilityFrom &&
                 stateOut <value.availabilityTo
             ); 
         }
         return value;
     }); 
     filtrar(updateHotelsList,inputDate)    
     }
}
return(
        <>
       <input onChange={filter} value={availability} type="date" name="ingreso" id="ingreso"/> 
        </> 
    )
}
export default Enter; 

