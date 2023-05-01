import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home, MyModal, PageNotFound, ShopListForm } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyDropdown } from './components';


export default function App() {
  return <>
  <MyDropdown/>
  <Routes>
    <Route path='/' element={<Home/> } />
    <Route path='modal' element={<MyModal/>} />
    <Route path='/shoplist' element={<ShopListForm/>} />
    <Route path='*' element={<PageNotFound/>} />
  </Routes>
  </>
}
