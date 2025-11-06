import React, { useState } from 'react';

const DisplayRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  // In a real app, you'd fetch recipes with useEffect and axios

  return (
    <div>
      <h2>Recipe Catalog</h2>
      <button>Logout</button>
      
      <div>
        <select defaultValue="prepTimeAsc">
          <option value="prepTimeAsc">Sort by Prep Time (ASC)</option>
          <option value="prepTimeDesc">Sort by Prep Time (DESC)</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Difficulty</th>
            <th>Prep Time (mins)</th>
            <th>Action</th>
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
                  <button>View</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayRecipes;
