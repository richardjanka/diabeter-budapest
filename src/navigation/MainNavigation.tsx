import { createStackNavigator } from 'react-navigation-stack';
import TabNavigator from "./TabNavigator";

const MainNavigation = createStackNavigator({
    Main: TabNavigator
});

export default MainNavigation;
