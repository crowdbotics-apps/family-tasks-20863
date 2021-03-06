import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps1117545Navigator from '../features/Maps1117545/navigator';
import SignIn12117544Navigator from '../features/SignIn12117544/navigator';
import UserProfile3117543Navigator from '../features/UserProfile3117543/navigator';
import Dashboard15117541Navigator from '../features/Dashboard15117541/navigator';
import Settings8117538Navigator from '../features/Settings8117538/navigator';
import NotificationList9117537Navigator from '../features/NotificationList9117537/navigator';
import BlankScreen65117535Navigator from '../features/BlankScreen65117535/navigator';
import UserProfile117459Navigator from '../features/UserProfile117459/navigator';
import Tutorial117458Navigator from '../features/Tutorial117458/navigator';
import NotificationList117430Navigator from '../features/NotificationList117430/navigator';
import Settings117429Navigator from '../features/Settings117429/navigator';
import Settings117421Navigator from '../features/Settings117421/navigator';
import UserProfile117419Navigator from '../features/UserProfile117419/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps1117545: { screen: Maps1117545Navigator },
SignIn12117544: { screen: SignIn12117544Navigator },
UserProfile3117543: { screen: UserProfile3117543Navigator },
Dashboard15117541: { screen: Dashboard15117541Navigator },
Settings8117538: { screen: Settings8117538Navigator },
NotificationList9117537: { screen: NotificationList9117537Navigator },
BlankScreen65117535: { screen: BlankScreen65117535Navigator },
UserProfile117459: { screen: UserProfile117459Navigator },
Tutorial117458: { screen: Tutorial117458Navigator },
NotificationList117430: { screen: NotificationList117430Navigator },
Settings117429: { screen: Settings117429Navigator },
Settings117421: { screen: Settings117421Navigator },
UserProfile117419: { screen: UserProfile117419Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
