import React from 'react';
import {createAppContainer} from "react-navigation";
import MainNavigation from "./src/navigation/MainNavigation";


const AppContainer = createAppContainer(MainNavigation);

export default function App() {
  return <AppContainer/>;
}
