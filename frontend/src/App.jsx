import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SingUp";
import Home from "./pages/home/Home";
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="p-4 h-screen flex item-center justify-center">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
