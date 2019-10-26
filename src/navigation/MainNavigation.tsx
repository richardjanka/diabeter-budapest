import { createStackNavigator } from 'react-navigation-stack';
import TabNavigator from "./TabNavigator";
import Accessibility from "../modules/AccessibilityMode/Accessibility";

const MainNavigation = createStackNavigator({
    Main: TabNavigator,
    Accessibility: Accessibility
}, {
    headerMode: "none"
});

export default MainNavigation;
