// import { createAction } from "@reduxjs/toolkit";
//
// export const addTask = createAction("tasks/addTask");
// export const deleteTask = createAction("tasks/deleteTask");
// export const toggleCompleted = createAction("tasks/toggleCompleted");
//
// const initialState = {
//   tasks: {
// items: [
//   { id: 0, text: "Learn HTML and CSS", completed: true },
//   { id: 1, text: "Get good at JavaScript", completed: true },
//   { id: 2, text: "Master React", completed: false },
//   { id: 3, text: "Discover Redux", completed: false },
//   { id: 4, text: "Build amazing apps", completed: false },
// ],
//   },
// };
//
// export const tasksReducer = (state = initialState.tasks, action) => {
//   switch (action.type) {
// case "tasks/addTask": {
//   return {
// ...state,
// tasks: {
//   items: [...state.tasks.items, action.payload],
// },
//   };
// }
// case "tasks/deleteTask":
//   return {
// ...state,
// tasks: {
//   items: state.tasks.items.filter((task) => task.id !== action.payload),
// },
//   };
// case "tasks/toggleCompleted":
//   return {
// ...state,
// tasks: {
//   items: state.tasks.items.map((task) => {
// if (task.id !== action.payload) {
//   return task;
// }
// return {
//   ...task,
//   completed: !task.completed,
// };
//   }),
// },
//   };
// default:
//   return state;
//   }
// };

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Get good at JavaScript", completed: true },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      { id: 4, text: "Build amazing apps", completed: false },
    ],
    editingTask: null,
  },
  reducers: {
    addTask(state, action) {
      state.items.push(action.payload);
    },
    deleteTask(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleCompleted(state, action) {
      for (const task of state.items) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          return;
        }
      }
    },
    editTask(state, action) {
      const task = state.items.find((item) => item.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
        state.editingTask = null;
      }
    },
    startEditing(state, action) {
      state.editingTask = action.payload;
    },
    cancelEditing(state) {
      state.editingTask = null;
    },
  },
});
export const {
  addTask,
  deleteTask,
  toggleCompleted,
  editTask,
  startEditing,
  cancelEditing,
} = slice.actions;
export default slice.reducer;
