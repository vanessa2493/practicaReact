import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Categories, LogIn } from "./pages";
import { SignUp } from "./pages/SignUp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
      <Route path="categories" element={<Outlet />}>
        <Route index element={<Categories />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
