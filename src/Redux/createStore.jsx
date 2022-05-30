import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
  name: "todos",
  initialState: {
    todos: []
  },
  reducers: {
    addtodos: (state, { payload: { model,title, message , score , id } }) => {
      state.todos = [
        ...state.todos,
        { model,title, message ,score ,id },
      ];
    },
  },
});

export const { addtodos } = todo.actions;

export default todo.reducer;