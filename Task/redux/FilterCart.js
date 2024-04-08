import {createSlice} from '@reduxjs/toolkit';
import {restaurants} from '../scr/lib/data';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    type: [],
    cuisine: [],
    protein: [],
    data: restaurants,
    filteredData: [],
  },
  reducers: {
    filterByType: (state, action) => {
      const index = state.type.indexOf(action.payload);
      if (index !== -1) {
        state.type = state.type.filter(item => item !== action.payload);
      } else {
        state.type.push(action.payload);
      }
      state.filteredData = filterData(state);
      console.log('Filtered Data:', state.filteredData.length);
    },
    filterByCuisine: (state, action) => {
      const index = state.cuisine.indexOf(action.payload);
      if (index !== -1) {
        state.cuisine = state.cuisine.filter(item => item !== action.payload);
      } else {
        state.cuisine.push(action.payload);
      }
      state.filteredData = filterData(state);
      console.log('Filtered Data:', state.filteredData.length);
    },
    filterByProtein: (state, action) => {
      const index = state.protein.indexOf(action.payload);
      if (index !== -1) {
        state.protein = state.protein.filter(item => item !== action.payload);
      } else {
        state.protein.push(action.payload);
      }
      state.filteredData = filterData(state);
      console.log('Filtered Data:', state.filteredData.length);
    },
    clearFilters: state => {
      state.type = [];
      state.cuisine = [];
      state.filteredData = [];
      state.protein = [];
      console.log('Filters cleared');
    },
  },
});

const filterData = state => {
  return state.data.filter(item => {
    const typeMatch = state.type.length === 0 || state.type.includes(item.Type);
    const cuisineMatch =
      state.cuisine.length === 0 || state.cuisine.includes(item.Cuisine);
    const proteinMatch =
      state.protein.length === 0 || state.protein.includes(item.Protein);
    return typeMatch && cuisineMatch && proteinMatch;
  });
};

export const {filterByType, filterByCuisine, filterByProtein, clearFilters} =
  filterSlice.actions;

export default filterSlice.reducer;
