import React,{useState} from "react"; 
import './App.css'
import Header from './components/header/index'; 
import Filters from './components/filters/index'
import {hotelsData} from './data'
import Card from './components/cards/index'

/**
 * @description Function that return all the components and show the final render.
 * 
 */
function App(){
    let [hotelsList, setList] = useState(hotelsData);   
    return(
        <>
        <Header />
        <section className="cont-filters">
        <Filters result={finalList}  refresh={lastRefresh} date={finalDate} />
        </section>  
        <section className="card-conteinerApp">
        {/* Filter by Card, returns the value from the object at the position using a callback  */}
        {!hotelsList.length ? 
        (
           <h1 className="noResults">Sin resultados... Intente nuevamente!</h1>
        ) 
         :(
           hotelsList.map((value) => {
            return <Card key={value.id} {...value} />;
            })
          ) }
      </section>
        </>
    )
/**
 * @description function that updates the list in the final parent component, with the selected filters 
 * @param list  Final List 
 */
    function finalList(list){
      setList(list)
    }
/**
 * @description This function provides the reset of my render, make an update over my original list and shows the principal status of the same.
 * @param list  contains all the entire data from the object. 
 */
    function lastRefresh(list){
      setList(list)
    }
/**
 * @description function that updates the list in the final parent component, with the selected filters of type Date.
 * @param a  contains the value of the CheckIn
 * @param b  contains the value of the CheckOut
 */
    function finalDate(a, b){
      setList(a,b)   
    }
}
export default App; 

