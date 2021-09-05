import { useState } from "react";
import {
  optionsPaises,
  optionsPrecios,
  optionsSizes
} from "../enums/optionsSelectFiltros";
import cleanFilter from "../imgs/svg/cleanFilter.svg";

export default function FiltrosNav(props) {
  const { valueFiltros, estadoInicialFiltros, setValueFiltros } = props;
  const { fechaInicio, fechaFin, pais, precio, tamano } = valueFiltros;

  const [typeInputDesde, setTypeInputDesde] = useState("text");
  const [typeInputHasta, setTypeInputHasta] = useState("text");

  const manejarFocusFechaDesde = () => {
    setTypeInputDesde("date");
  };

  const manejarFocusFechaHasta = () => {
    setTypeInputHasta("date");
  };

  const actualizarStateFiltros = (e) => {
    setValueFiltros({
      ...valueFiltros,
      [e.target.name]: e.target.value
    });
  };

  const limpiarFiltros = () => {
    setValueFiltros(estadoInicialFiltros);
    setTypeInputHasta("text");
    setTypeInputDesde("text");
  };

  return (
    <nav className="nav-hoteles">
      <input
        className="custom-input placeHolder-Icon text-align-center outline-none"
        placeholder="Cualquier fecha inicio"
        name="fechaInicio"
        value={fechaInicio}
        type={typeInputDesde}
        onChange={actualizarStateFiltros}
        onFocus={manejarFocusFechaDesde}
      />
      <input
        className="custom-input placeHolder-Icon text-align-center outline-none"
        placeholder="Cualquier fecha final"
        name="fechaFin"
        value={fechaFin}
        type={typeInputHasta}
        onChange={actualizarStateFiltros}
        onFocus={manejarFocusFechaHasta}
      />
      <select
        className="custom-input outline-none"
        name="pais"
        value={pais}
        onChange={actualizarStateFiltros}
      >
        {optionsPaises.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
      <select
        className="custom-input outline-none"
        name="precio"
        value={precio}
        onChange={actualizarStateFiltros}
      >
        {optionsPrecios.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
      <select
        className="custom-input outline-none"
        name="tamano"
        value={tamano}
        onChange={actualizarStateFiltros}
      >
        {optionsSizes.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
      <button className="reset-filtros-button" onClick={limpiarFiltros}>
        <img src={cleanFilter} className="cleanFilter-icon" alt="" />
        Limpiar Filtros
      </button>
    </nav>
  );
}
