import {
    obtenerTiempoUnix,
    tiempoUnixHoraCero,
    fechaMesDiaAgno
  } from "../helpers/manejarFecha";
  
  export const filtrarHoteles = (listaHoteles, valueFiltros) => {
    const nuevaListaHoteles = listaHoteles
      .filter((hotel) => {
        if (valueFiltros.pais !== "Todos los países") {
          return hotel.country === valueFiltros.pais;
        }
        return hotel;
      })
      .filter((hotel) => {
        if (valueFiltros.precio !== "Cualquier precio") {
          return hotel.price === parseInt(valueFiltros.precio, 10);
        }
        return hotel;
      })
      .filter((hotel) => {
        if (valueFiltros.tamano !== "Cualquier tamaño") {
          if (valueFiltros.tamano === "Pequeño") return hotel.rooms <= 10;
          if (valueFiltros.tamano === "Mediano")
            return hotel.rooms > 10 && hotel.rooms <= 20;
          if (valueFiltros.tamano === "Grande") return hotel.rooms > 20;
        }
        return hotel;
      })
      .filter((hotel) => {
        if (valueFiltros.fechaInicio !== "" && valueFiltros.fechaFin !== "") {
          return (
            tiempoUnixHoraCero(hotel.availabilityFrom) >=
              obtenerTiempoUnix(fechaMesDiaAgno(valueFiltros.fechaInicio, "-")) &&
            tiempoUnixHoraCero(hotel.availabilityTo) <=
              obtenerTiempoUnix(fechaMesDiaAgno(valueFiltros.fechaFin, "-"))
          );
        }
        return hotel;
      });
  
    return nuevaListaHoteles;
  };
  