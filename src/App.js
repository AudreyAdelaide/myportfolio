import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./sass/App.scss";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Dashboard from "./dashboard/Dashboard";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="App__content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
