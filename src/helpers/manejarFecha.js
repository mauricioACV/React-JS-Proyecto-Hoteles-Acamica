import { diasSemana, meses } from "../enums/agnoCalendario";

export const tUnixAFechaLenguajeNatural = (tiempoUnix) => {
  const fechaOrigen = new Date(tiempoUnix);
  const stringFechaLengNatural =
    diasSemana[fechaOrigen.getDay()] +
    ", " +
    fechaOrigen.getDate() +
    " de " +
    meses[fechaOrigen.getMonth()] +
    " de " +
    fechaOrigen.getFullYear();

  return stringFechaLengNatural;
};

export const obtenerTiempoUnix = (fecha) => {
  return new Date(fecha).getTime();
};

export const tiempoUnixHoraCero = (tUnix) => {
  const tUnixHoraCero = new Date(tUnix);
  return tUnixHoraCero.setHours(0, 0, 0, 0);
};

export const rangoFechaEsValido = (inicioFecha, finFecha) => {
  const unixFechaInicio = obtenerTiempoUnix(inicioFecha);
  const unixFechaFin = obtenerTiempoUnix(finFecha);
  return unixFechaInicio < unixFechaFin;
};

export const fechaMesDiaAgno = (agnoMesDia, separador) => {
  const agno = agnoMesDia.split(separador)[0];
  const mes = agnoMesDia.split(separador)[1];
  const dia = agnoMesDia.split(separador)[2];
  const diaMesAgno = `${mes}${separador}${dia}${separador}${agno}`;
  return diaMesAgno;
};
