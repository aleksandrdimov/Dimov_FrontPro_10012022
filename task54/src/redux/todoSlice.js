import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://6471331f6a9370d5a41a3f01.mockapi.io/tasks";

const initialState = { inputName: "", todos: [], status: "idle" };

export const fetchTasks = createAsyncThunk("todo/fetchTasks", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setInputName: (state, action) => {
      state.inputName = action.payload;
    },
    addTodo: (state) => {
      const todo = {
        isCheckad: false,
        title: state.inputName,
        id: Math.random() * 100,
      };
      state.todos.push(todo);
      state.inputName = "";
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setInputName, addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
