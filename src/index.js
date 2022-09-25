import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Details from "./Component/Details";
import About from "./Component/About";
import Error from "./Component/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/det" element={<Details />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
