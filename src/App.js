import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './components/index';
// получаю данные props  от API сервера c помощью fetchData post запроса
import { selectData } from './app/store';
import { fetchData2 } from './features/index';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Header from './components/base/header';
import Modal from './components/base/modal';
import Catalog from './components/catalog';
import BurgerNav from './components/base/burger_nav';
import MobileNav from './components/base/mobile_nav';
import Footer from './components/base/footer';

function App() {
  const dispatch = useDispatch();
  const props = useSelector(selectData);

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(fetchData2());
  }, [dispatch]);
  return (
      <BrowserRouter>
        <div class="wrapper">
          <div class="offer">
          <Header />
          <Routes>
              <Route path="/" element={<IndexPage props={props} />}  />
          </Routes>
          </div>
        </div>
        <Modal />
        <Catalog />
        <BurgerNav />
        <MobileNav />
        <Footer />  
      </BrowserRouter>
  );
}

export default App;
