import {
    obtenerParrafoFechaHotel,
    obtenerParrafoPaisHotel,
    obtenerParrafoPrecioHotel,
    obtenerParrafoTamanoHotel
  } from "../helpers/parrafosHeader";
  
  import error from "../imgs/svg/error.svg";
  
  export default function Header({ valueFiltros }) {
    const { fechaInicio, fechaFin, pais, precio, tamano } = valueFiltros;
  
    const parrafoFecha = obtenerParrafoFechaHotel(fechaInicio, fechaFin);
  
    const parrafoPais = obtenerParrafoPaisHotel(pais);
  
    const parrafoPrecio = obtenerParrafoPrecioHotel(precio);
  
    const parrafoTamano = obtenerParrafoTamanoHotel(tamano);
  
    return (
      <header className="header-hoteles">
        <div className="header-title">
          <p className="header-text-title">HOTELES</p>
        </div>
        <div className="header-filtersInfo">
          <p
            className={
              parrafoFecha === "Rango de fecha no válido"
                ? "header-text-filterInfo alerta"
                : "header-text-filterInfo"
            }
          >
            {parrafoFecha === "Rango de fecha no válido" ? (
              <img src={error} className="errorFecha-icon" alt="" />
            ) : null}
            {parrafoFecha}
          </p>
          <p className="header-text-filterInfo">{parrafoPais}</p>
          <p className="header-text-filterInfo">{parrafoPrecio}</p>
          <p className="header-text-filterInfo">{parrafoTamano}</p>
        </div>
      </header>
    );
  }
  