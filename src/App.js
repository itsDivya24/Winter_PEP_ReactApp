import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import FormAction from './component/FormAction';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function App() {
  const [user, setUser] = useState(null);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    setUser(formData);
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home user={user} isFormSubmitted={isFormSubmitted} />}
          />
          <Route
            path="/form"
            element={<FormAction onFormSubmit={handleFormSubmit} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
