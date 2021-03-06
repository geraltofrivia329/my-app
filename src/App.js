import React, { useState } from "react";
import "./styles.css";
import NavBarComponent from "./nav-bar1";
import trailer from "./trailer";

const classes = [
  {
    id: 1,
    category: "characters",
    image: "Amazon.jpg",
    name: "Amazon",
    description:
      "A master of the javelin and bow, the Amazon reacts to combat situations with superhuman agility. She relies on magic prowess to enhance her significant martial abilities",
  },
  {
    id: 2,
    category: "characters",
    image: "Assassin.jpg",
    name: "Assassin",
    description:
      "A member of an ancient Vizjerei order founded to hunt down mages gone rogue, the Assassin is a martial arts expert who uses deadly traps and shadow disciplines to vanquish evil.",
  },
  {
    id: 3,
    category: "characters",
    image: "Necromancer.jpg",
    name: "Necromancer",
    description:
      "A Necromancer’s dominion over life and death grants this grisly apothecary the ability to summon skeleton armies and golems, and to unleash baneful poison, curse, and bone skills upon his foes.",
  },
];

function App() {
  const [name, setName] = useState("");
  const testarray = ["test1", "test2", "test3"];
  console.log(testarray);

  function renderClass(c) {
    return (
      <div key={c.id} className="d2classes">
        <a href="/">
          <img src={`/images/${c.image}`} alt={c.name} />
          <h3>{c.name}</h3>
          <p id="descript">${c.description}</p>
        </a>
      </div>
    );
  }
  //filter name from classes array and display on page based on name
  const filteredClasses = name
    ? classes.filter((c) => c.name === parseInt(name))
    : classes;

  return (
    <main>
      <section id="filters">
        <label htmlFor="character">Choose Character:</label>{" "}
        <select
          id="Character"
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          <option value="">All Characters</option>
          <option value="Amazon">Amazon</option>
          <option value="Assassin">Assassin</option>
          <option value="Necromancer">Necromancer</option>
        </select>
      </section>
      <div>
        <img src="/images/D2R.jpg" alt="Diablo 2 Resurrected" />
        <NavBarComponent></NavBarComponent>
        <section id="classes">{filteredClasses.map(renderClass)}</section>
      </div>
    </main>
  );
}

export default App;
