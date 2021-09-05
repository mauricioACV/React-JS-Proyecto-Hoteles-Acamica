import Header from "./Header";
import FiltrosNav from "./FiltrosNav";
import Resultados from "./Resultados";
import { useState } from "react";
import { estadoInicialFiltros } from "../enums/estadoInicialFiltros";

export default function Main() {
  const [valueFiltros, setValueFiltros] = useState(estadoInicialFiltros);
  return (
    <div>
      <Header valueFiltros={valueFiltros} />
      <FiltrosNav
        valueFiltros={valueFiltros}
        setValueFiltros={setValueFiltros}
        estadoInicialFiltros={estadoInicialFiltros}
      />
      <Resultados valueFiltros={valueFiltros} />
    </div>
  );
}
