import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './Components/Footer';
// import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import AllUser from './Components/AllUser';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/all-user" exact element={<AllUser />} />
          
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
