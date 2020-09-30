import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn12117544Reducer from '../features/SignIn12117544/redux/reducers'
import Dashboard15117541Reducer from '../features/Dashboard15117541/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn12117544: SignIn12117544Reducer,
Dashboard15117541: Dashboard15117541Reducer,

});