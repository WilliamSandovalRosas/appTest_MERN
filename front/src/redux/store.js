
import { combineReducers, configureStore } from '@reduxjs/toolkit';

/** call reducers */
import questionReducer from './question_reducer';
import resultReducer from './result_reducer';

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer
})

/** create store with reducer */
export default configureStore({ reducer : rootReducer});





/* import{ combineReducers, configureStore} from '@reduxjs/toolkit'

/**Call reducers */
/*

import result_Reducer from './result_reducer';
import questionReducer from './question_reducer';

const rootReducer = combineReducers({

  questions : questionReducer,
  result : result_Reducer
});

/**Create store with reducer */
/*
export default configureStore({ reducer : rootReducer}) */

