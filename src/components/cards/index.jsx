import "./styles.css";
import Swal from 'sweetalert2';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobe,faBed, faDollarSign} from '@fortawesome/free-solid-svg-icons'
/**
 * @description Function that return the content of one card to the father component. * @param name, description, rooms, price, photo, city, country 
 * are the value that the component child must receive, set and send to his father component.
*/
function Card({ name, description, rooms, price, photo, city, country }) {
  const reserva =() =>{
    Swal.fire({
      title: "Desea reservar en " + (name),
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Reserva Exitosa!",
          icon: "success",
          confirmButtonText: "Aceptar"
        });
      } else {
        Swal.fire({
          title: "Reserva Cancelada",
          icon: "error",
          confirmButtonText: "Aceptar"
        });
      }
    });
  }
  return (
    <div className="card-container">
      <img className="photo" src={photo} alt={name} />
      <h3 className="card-title">{name}</h3>
      <p className="description">{description}</p>
      <section className="country-city">
        <span className="tagHotels">
        <span className="svg-faGlobe"><FontAwesomeIcon icon={faGlobe}/></span>
           {city}, {country}
        </span>
        <br />
        <br />
      </section>
      <section className="rooms" >
      <span className="tagHotels">
      <span className="svg-faBed"><FontAwesomeIcon icon={faBed}/></span>
          {rooms} Habitaciones
        </span>
      </section>
      <section className="price">
             <span className="tagHotels" id="svg-faDollar"> 
             {price === 1 ? 
              <FontAwesomeIcon icon={faDollarSign} ></FontAwesomeIcon>
              : price === 2 ? 
              <>
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
              </>
              : price === 3 ?  
              <>
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
              </>
              :
              <>
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
              </>
              }
             </span>
      </section>
      <button onClick={reserva}>Reservar</button>
    </div>
  );
}
export default Card;


