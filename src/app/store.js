import { configureStore, thunk, action } from "@reduxjs/toolkit";
import { fetchData2, dataSlice } from "../features/index";

export const store = configureStore({
    reducer: {
      props: dataSlice.reducer,
    },
  });
  
  // Экспортируем диспетч и селекторы
export const { actions } = dataSlice;
export const appDispatch = store.dispatch;

export const selectData = (state) => {
  // console.log(state.props);
  return state.props.items};

// Запускаем thunk для получения данных
store.dispatch(fetchData2());


