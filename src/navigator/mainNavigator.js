import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
