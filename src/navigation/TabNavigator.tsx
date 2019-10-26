import {createBottomTabNavigator} from "react-navigation-tabs";
import Home from "../modules/Home/Home";

const TabNavigator = createBottomTabNavigator({
    Home: Home
});

export default TabNavigator;
