import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import { Navbar } from "./components/Navbar";
import ExerciseDetails from "./pages/ExerciseDetails";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetails />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
