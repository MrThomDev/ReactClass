// import { Component } from "react";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("render");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((data) => data.json())
  //     .then((users) => setMonsters(users));
  // }, []);

  useEffect(() => {
    const getMonsters = async () => {
      const arr = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
      ).json();
      setMonsters(arr);
    };
    getMonsters();
  }, []);

  useEffect(() => {
    const filteredMonsterArr = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredMonsterArr);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"search monsters"}
        className={"monsters-search-box"}
      />
      <CardList filteredMonster={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     console.log("Constructor");
//   }

//   //Mounting is the first time a component is rendered in the DOM.
// async componentDidMount() {
//   console.log("ComponentDidMount");
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();

//   this.setState(
//     () => {
//       return { monsters: users, filtered: users };
//     },
//     () => {
//       console.log(this.state);
//     }
//   );
// }

// onSearchChange = (event) => {
//   this.setState(
//     () => {
//       const searchField = event.target.value.toLowerCase();
//       return { searchField };
//     },
//     () => {
//       console.log(this.state.searchField);
//     }
//   );
// };

// render() {
//     console.log("Render");

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

// const filteredMonster = monsters.filter((monster) => {
//   return monster.name.toLowerCase().includes(searchField);
// });

//     return (
// <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder={"search monsters"}
//           className={"monsters-search-box"}
//         />
//         <CardList filteredMonster={filteredMonster} />
// </div>
//     );
//   }
// }

export default App;
