import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Users from './Pages/Users';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
