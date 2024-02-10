import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SingUp";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="p-4 h-screen flex item-center justify-center">
      <SignUp />

      {/* <Home /> */}
    </div>
  );
}

export default App;
