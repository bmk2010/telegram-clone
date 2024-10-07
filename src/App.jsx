import React from "react";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import store from "./redux/Store";
import Home from "./pages/Home";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <div className="max-w-[1440px] w-full  container mx-auto px-5 ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
