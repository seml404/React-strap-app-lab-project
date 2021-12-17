import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <>
        <Header></Header>
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
          </Routes>
        </Container>
      </>
    </div>
  );
}

export default App;
