import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://outletavto.ru'
// BASE_URL = 'http://localhost:8000'



// Создаем thunk для получения данных с бэкенда
export const fetchData2 = createAsyncThunk("data/fetchData", async () => {
  // post запрос
  const response = await fetch(BASE_URL +"/api/v1/",
  {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },

  }
  
  );
  const data = await response.data;
  console.log(data);
  return data;
});

// Создаем срез данных
export const dataSlice = createSlice({
  name: "props",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Обрабатываем состояние "pending" (ожидание) запроса
    builder.addCase(fetchData2.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Обрабатываем успешный результат запроса
    builder.addCase(fetchData2.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });

    // Обрабатываем ошибку запроса
    builder.addCase(fetchData2.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default {
  fetchData2,
  dataSlice
};
