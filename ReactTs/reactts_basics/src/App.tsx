import React, { FC } from "react";
import "./App.css";
import { Person } from "./Components/Person";

// function App() {
//   //defining variables
//   const name: string = "Rozzy";
//   const age: number = 22;

//   //creating a function, make sure you specifythe type you are returning ie (): any => {}
//   const getName = (name: string): number => {
//     if (name == "Rozzy") {
//       return 22;
//     } else {
//       return 0;
//     }
//   };

//   return <div className="App">{name}</div>;
  
// }

//Let's use es6 arrow fn to define component
//defining the type of the fn component, import FC at the top and add it after the name
const App: FC = () => {
  return <div className="App">
    <Person name="Rozzy" age ={22} email = "roz@gm.co" />
  </div>;
}

export default App;
