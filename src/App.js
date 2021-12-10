import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import { ToastContainer } from "react-toastify";
import Home from "./Components/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <ToastContainer />
              <Login />
            </div>
          }
        />
        <Route
          path="/Home"
          element={
            <div className="App">
              <Home />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
