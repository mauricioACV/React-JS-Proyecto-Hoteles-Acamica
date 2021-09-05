import bed from "../imgs/svg/bed.svg";
import location from "../imgs/svg/location.svg";
import calendar from "../imgs/png/calendar1.png";

export default function Hotel(props) {
  const {
    name,
    photo,
    description,
    city,
    country,
    rooms,
    price,
    availabilityFrom,
    availabilityTo
  } = props;

  return (
    <div className="card-hotel">
      <img className="card-hotel-img" src={photo} alt="" />
      <div className="hotel-card-header padding-3">
        <h1 className="card-hotel-titulo">{name}</h1>
        <p className="card-hotel-fechaInicio fSize-12 box-rango-fecha">
          <img src={calendar} className="cleanFilter-icon" alt="" />
          Desde {availabilityFrom}
        </p>
        <p className="card-hotel-fechaFin fSize-12 box-rango-fecha">
          <img src={calendar} className="cleanFilter-icon" alt="" />
          Hasta {availabilityTo}
        </p>
      </div>
      <div className="card-hotel-descripcion padding-3">
        <p className="card-hotel-textoDescripcion">{description}</p>
      </div>
      <div className="card-hotel-detalles padding-3">
        <div className="detalles-ubicacion mBottom-7p dFlex-ItemCenter sombra-radius">
          <img
            className="width30 customIcon"
            src={location}
            alt="icono-ubicacion"
          />
          <p className="card-hotel-ubicacion mLeft-7p fSize-12 padding-right5">
            {city}, {country}
          </p>
        </div>
        <div className="detalles-habitacion mBottom-7p dFlex-ItemCenter">
          <div className="box-habitaciones dFlex-ItemCenter sombra-radius">
            <img
              className="width30 customIcon"
              src={bed}
              alt="icono-habitacion"
            />
            <p className="detalles-text-habitaciones mLeft-7p fSize-12 padding-right5">
              {rooms} Habitaciones
            </p>
          </div>
          <p className="detalles-text-valor mLeft-7p fSize-12">
            {"$".repeat(price)}
          </p>
        </div>
      </div>
      <button className="card-hotel-btnReservar">Reservar</button>
    </div>
  );
}
