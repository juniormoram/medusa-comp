import React from "react";
import "./Recommen.css";

const recommens = [
  {
    id: 1,
    name: "Emerson",
    data: "Exc servicio y atención",
  },
  {
    id: 2,
    name: "Andy",
    data: "Muy buena calidad de las prendas",
  },
  {
    id: 3,
    name: "Junior",
    data: "Ropa totalmente original",
  },
];

const Recommen = () => {
  return (
    <div className="container-recommen">
      <h1>Clientes</h1>
      <section className="cards-recommen">
        {recommens.map((recommen) => (
          <div key={recommen.id} className="recommen">
            <h3>{recommen.name}</h3>
            <p>{recommen.data}</p>
          </div>
        ))}
      </section>
      <section className="cards-recommen">
        {recommens.map((recommen) => (
          <div key={recommen.id} className="recommen">
            <h3>{recommen.name}</h3>
            <p>{recommen.data}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Recommen;
