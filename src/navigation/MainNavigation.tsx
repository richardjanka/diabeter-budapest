import { createStackNavigator } from 'react-navigation-stack';
import TabNavigator from "./TabNavigator";
import Accessibility from "../modules/AccessibilityMode/Accessibility";

const MainNavigation = createStackNavigator({
    Accessibility: Accessibility,
    Main: TabNavigator
});

export default MainNavigation;
