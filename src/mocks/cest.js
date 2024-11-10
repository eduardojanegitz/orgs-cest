import logo from "../../assets/logo.png";
import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abóbora.png";

const cest = {
  top: {
    title: "Detalhes da Cesta",
  },
  details: {
    name: "Cesta de Verduras",
    farmName: "Jenny Jack Farm",
    farmLogo: logo,
    description:
      "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha.",
    price: "R$40,00",
    button: "Comprar",
  },
  items: {
    title: "Itens da Cesta",
    list: [
      {
        name: "Tomate",
        image: tomate,
      },
      {
        name: "Brócolis",
        image: brocolis,
      },
      {
        name: "Batata",
        image: batata,
      },
      {
        name: "Pepino",
        image: pepino,
      },
      {
        name: "Abóbora",
        image: abobora,
      },
    ],
  },
};

export default cest;
