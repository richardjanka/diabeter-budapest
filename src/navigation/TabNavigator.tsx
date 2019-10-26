import {createBottomTabNavigator} from "react-navigation-tabs";
import Home from "../modules/Home/Home";
import Diary from "../modules/Diary/Diary";

const TabNavigator = createBottomTabNavigator({
    Home: Home,
    // @ts-ignore
    Diary: Diary
});

export default TabNavigator;
