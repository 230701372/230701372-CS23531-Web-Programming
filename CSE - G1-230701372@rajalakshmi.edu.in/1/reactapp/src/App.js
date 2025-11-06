import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import ErrorPage from './Components/ErrorPage';
import DisplayRecipes from './Foodie/DisplayRecipes';
import ManageRecipe from './Chef/ManageRecipe';
import CreateRecipe from './Chef/CreateRecipe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recipes" element={<DisplayRecipes />} />
        <Route path="/manage-recipes" element={<ManageRecipe />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

