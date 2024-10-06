import React from "react";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import store from "./redux/Store";
import Home from "./redux/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="max-w-[1440px] w-full px-3">
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
