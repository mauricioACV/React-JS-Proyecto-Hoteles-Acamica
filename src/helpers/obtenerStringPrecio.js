export const obtenerStringPrecio = (precio) => {
    let stringPrecio = "";
    switch (precio) {
      case "1":
        stringPrecio = "De precio económico";
        break;
      case "2":
        stringPrecio = "De precio confort";
        break;
      case "3":
        stringPrecio = "De precio lujos";
        break;
      case "4":
        stringPrecio = "De precio magnífico";
        break;
      default:
        break;
    }
    return stringPrecio;
  };
  