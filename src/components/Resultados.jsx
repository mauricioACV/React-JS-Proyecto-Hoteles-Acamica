import Hotel from "./Hotel";
import { tUnixAFechaLenguajeNatural } from "../helpers/manejarFecha";
import { filtrarHoteles } from "../helpers/filtrarHoteles";
import { listadoHoteles } from "../data/data";
import extraviado from "../imgs/svg/extraviado.svg";

export default function Resultados({ valueFiltros }) {
  let hotelesFiltrados = filtrarHoteles(listadoHoteles, valueFiltros);

  return (
    <div className="center">
      <div className="container-resultados">
        {hotelesFiltrados.length > 0 ? (
          hotelesFiltrados.map((hotel) => (
            <Hotel
              key={hotel.slug}
              name={hotel.name}
              photo={hotel.photo}
              description={hotel.description}
              city={hotel.city}
              country={hotel.country}
              rooms={hotel.rooms}
              price={hotel.price}
              availabilityFrom={tUnixAFechaLenguajeNatural(
                hotel.availabilityFrom
              )}
              availabilityTo={tUnixAFechaLenguajeNatural(hotel.availabilityTo)}
            />
          ))
        ) : (
          <div className="dFlex-Center padding-50">
            <img
              src={extraviado}
              className="noResultados-icon mBottom-7p"
              alt=""
            />
            <p>Lo sentimos, no encontramos resultados :(</p>
            <p>Intenta cambiando las opciones de filtrado.</p>
          </div>
        )}
      </div>
    </div>
  );
}
