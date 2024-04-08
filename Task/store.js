import {configureStore} from '@reduxjs/toolkit';
import filterReducer from './redux/FilterCart';

export default configureStore({
  reducer: {
    filter: filterReducer, // Use the correct reducer name
  },
});
