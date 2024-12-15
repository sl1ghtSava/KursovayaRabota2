import { createSlice } from "@reduxjs/toolkit";
var json = require("../catalog.json");
let sortName = true;
let sortOrder = true;
const initialState = {
  catalog: json,
  sorted: [],
  cart: [],
  activeTypes: [],
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    addList: (state, action) => {},
  },
});
const sortedSlice = createSlice({
  name: "sorted",
  initialState,
  reducers: {
    setSorted: (state, action) => {
      state.sorted = action.payload;
    },
    sortList: (state, action) => {
      if (sortOrder === true) {
        state.sorted.sort((a, b) => a.price - b.price);
        sortOrder = false;
      } else {
        state.sorted.sort((a, b) => b.price - a.price);
        sortOrder = true;
      }
    },
    sortListByName: (state, action) => {
      if (sortName === true) {
        state.sorted.sort((a, b) => {
          const nameA = a.title.toLowerCase();
          const nameB = b.title.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        sortName = false;
      } else {
        state.sorted.sort((a, b) => {
          const nameA = a.title.toLowerCase();
          const nameB = b.title.toLowerCase();
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        });
        sortName = true;
      }
    },
    sortSearch: (state, action) => {
      const query = action.payload.toLowerCase();
      if (query.length > 0) {
        state.sorted = state.catalog.filter((elem) =>
          elem.title.toLowerCase().includes(query)
        );
      } else {
        state.sorted = state.catalog;
      }
    },    
    sortListByType: (state, action) => {
      const type = action.payload;
      if (state.activeTypes.includes(type)) {
        state.activeTypes = state.activeTypes.filter((t) => t !== type);
      } else {
        state.activeTypes.push(type);
      }
      if (state.activeTypes.length === 0) {
        state.sorted = state.catalog;
      } else {
        state.sorted = state.catalog.filter((item) =>
          state.activeTypes.includes(item.type)
        );
      }
    },
  },
});
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart = [...state.cart, action.payload[0]];
    },
    delCart: (state, action) => {
      state.cart = state.cart.filter((elem) => elem.title !== action.payload);
    },
    truncateCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addList } = catalogSlice.actions;
export const { addCart, delCart, truncateCart } = cartSlice.actions;
export const {
  setSorted,
  sortListByName,
  sortList,
  sortSearch,
  sortListByType,
} = sortedSlice.actions;

export const catalogReducer = catalogSlice.reducer;
export const cartReducer = cartSlice.reducer;
export const sortedReducer = sortedSlice.reducer;
