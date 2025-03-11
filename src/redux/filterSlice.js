// import { createAction } from "@reduxjs/toolkit";
//
// export const setStatusFilter = createAction("filters/setStatusFilter");
//
// const initialState = {
//   filters: {
// status: "all",
//   },
// };
//
// export const filterReducer = (state = initialState.filters, action) => {
//   switch (action.type) {
// case "filters/setStatusFilter":
//   return {
// ...state,
// filters: {
//   status: action.payload,
// },
//   };
// default:
//   return state;
//   }
// };
//

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    status: "all",
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setStatusFilter } = slice.actions;
export default slice.reducer;
