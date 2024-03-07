import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasePage from './components/base/base';
import IndexPage from './components/index';
// получаю данные props  от API сервера c помощью fetchData post запроса
import { selectData } from './app/store';
import { fetchData2 } from './features/index';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";


function App() {
  const dispatch = useDispatch();
  const props = useSelector(selectData);

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(fetchData2());
  }, [dispatch]);
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<BasePage props={props} MainContent={<IndexPage props={props} />} />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
