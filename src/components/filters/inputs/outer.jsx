import React,{useState} from 'react'
import { hotelsData } from "../../../data";
import Swal from 'sweetalert2'
/**
 * @description Function that return the exactly dateOut checked by the customer.
 * @param filtrar is the reference for the  dateOut fn, who contains and set the date  selected with the list of hotels availables.
* @param stateIn is the reference for the CheckIn data result. With this parameter I make a stop between both inputs, until they are selected nothing changes in the cards. 
*/
function Outer({filtrar, stateIn}){
    let [availability] = useState();
    function filter(e) {
     let inputDate = new Date(e.target.value.replaceAll("-","/")).getTime() + 86300000; 
     let today = new Date().getTime();
     if(inputDate < today || inputDate < stateIn ){
        Swal.fire("La fecha de Salida debe ser mayor a la fecha de Ingreso");
     }else{
     let updateHotelsList = hotelsData.filter((value)=>{
         if(stateIn){
             return (
                 inputDate < value.availabilityTo &&
                 stateIn > value.availabilityFrom
             ); 
         }
         return value;    
     }); 
     filtrar(updateHotelsList,inputDate )    
     }
}
return(
        <>
        <input onChange={filter}  value={availability} type="date" name="ingreso" id="ingreso"/>
        </>
    )
}
export default Outer; 