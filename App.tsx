import React from 'react';
import {createAppContainer} from "react-navigation";
import MainNavigation from "./src/navigation/MainNavigation";
import {ApplicationProvider} from "react-native-ui-kitten";
import { mapping, light as lightTheme } from '@eva-design/eva';


const AppContainer = createAppContainer(MainNavigation);

export default function App() {
  return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <AppContainer/>
      </ApplicationProvider>
  );
}
