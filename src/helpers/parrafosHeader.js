import {
    obtenerTiempoUnix,
    tUnixAFechaLenguajeNatural,
    rangoFechaEsValido,
    fechaMesDiaAgno
  } from "../helpers/manejarFecha";
  import { obtenerStringPrecio } from "../helpers/obtenerStringPrecio";
  
  export const obtenerParrafoFechaHotel = (inicioFecha, finFecha) => {
    const parrafoFecha =
      inicioFecha !== "" && finFecha !== ""
        ? rangoFechaEsValido(inicioFecha, finFecha)
          ? `Desde el ${tUnixAFechaLenguajeNatural(
              obtenerTiempoUnix(fechaMesDiaAgno(inicioFecha, "-"))
            )} - hasta el ${tUnixAFechaLenguajeNatural(
              obtenerTiempoUnix(fechaMesDiaAgno(finFecha, "-"))
            )}`
          : "Rango de fecha no válido"
        : "En cualquier fecha";
  
    return parrafoFecha;
  };
  
  export const obtenerParrafoPaisHotel = (pais) => {
    const parrafoPais =
      pais !== "Todos los países" ? `En ${pais}` : "En cualquier país.";
    return parrafoPais;
  };
  
  export const obtenerParrafoPrecioHotel = (precio) => {
    const parrafoPrecio =
      precio !== "Cualquier precio"
        ? obtenerStringPrecio(precio)
        : "De cualquier precio.";
  
    return parrafoPrecio;
  };
  
  export const obtenerParrafoTamanoHotel = (tamano) => {
    const parrafoTamano =
      tamano !== "Cualquier tamaño"
        ? `De tamaño ${tamano}`
        : "De cualquier tamaño.";
  
    return parrafoTamano;
  };
  