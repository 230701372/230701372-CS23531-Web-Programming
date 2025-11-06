import React, { useState } from 'react';

const ManageRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  // In a real app, you'd fetch recipes with useEffect and axios

  return (
    <div>
      <h2>Manage Recipes</h2>
      <button>Add Recipe</button>
      <button>Logout</button>

      <div>
        <select defaultValue="all">
          <option value="all">All Categories</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Difficulty</th>
            <th>Prep Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.length === 0 ? (
            <tr>
              <td colSpan="5">No recipes found</td>
            </tr>
          ) : (
            recipes.map(recipe => (
              <tr key={recipe.id}>
                <td>{recipe.title}</td>
                <td>{recipe.category}</td>
                <td>{recipe.difficulty}</td>
                <td>{recipe.prepTime}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageRecipe;
