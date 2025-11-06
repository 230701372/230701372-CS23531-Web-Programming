import React, { useState, useEffect } from 'react';

const CreateRecipe = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    difficulty: '',
    prepTime: 0,
    cookTime: 0,
    servings: 0,
    cuisine: '',
    ingredients: '',
    instructions: '',
    tags: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // This logic handles if the form is for "Update" vs "Add"
    const editId = localStorage.getItem('editId');
    if (editId) {
      setIsEditMode(true);
      // In a real app, you'd fetch the recipe data here and populate formData
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.difficulty) newErrors.difficulty = 'Difficulty is required';
    if (formData.prepTime < 1) newErrors.prepTime = 'Prep time must be at least 1 minute';
    if (formData.cookTime < 1) newErrors.cookTime = 'Cook time must be at least 1 minute';
    if (formData.servings < 1) newErrors.servings = 'Servings must be at least 1';
    if (!formData.ingredients) newErrors.ingredients = 'At least one ingredient is required';
    if (!formData.instructions) newErrors.instructions = 'At least one instruction is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // In a real app, you'd call axios.post or axios.put here
      console.log('Submitting form:', formData);
    }
  };
 return (
    <div>
      <h2>{isEditMode ? 'Update Recipe' : 'Add Recipe'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input name="title" value={formData.title} onChange={handleChange} />
          {errors.title && <p>{errors.title}</p>}
        </div>
        <div>
          <label>Category:</label>
          <input name="category" value={formData.category} onChange={handleChange} />
          {errors.category && <p>{errors.category}</p>}
        </div>
        <div>
          <label>Difficulty:</label>
          <input name="difficulty" value={formData.difficulty} onChange={handleChange} />
          {errors.difficulty && <p>{errors.difficulty}</p>}
        </div>
        <div>
          <label>Prep Time (minutes):</label>
          <input type="number" name="prepTime" value={formData.prepTime} onChange={handleChange} />
          {errors.prepTime && <p>{errors.prepTime}</p>}
        </div>
        <div>
          <label>Cook Time (minutes):</label>
          <input type="number" name="cookTime" value={formData.cookTime} onChange={handleChange} />
          {errors.cookTime && <p>{errors.cookTime}</p>}
        </div>
        <div>
          <label>Servings:</label>
          <input type="number" name="servings" value={formData.servings} onChange={handleChange} />
          {errors.servings && <p>{errors.servings}</p>}
        </div>
        <div>
          <label>Cuisine:</label>
          <input name="cuisine" value={formData.cuisine} onChange={handleChange} />
        </div>
        <div>
          <label>Ingredients (comma-separated):</label>
          <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} />
          {errors.ingredients && <p>{errors.ingredients}</p>}
        </div>
        <div>
          <label>Instructions (comma-separated):</label>
          <textarea name="instructions" value={formData.instructions} onChange={handleChange} />
          {errors.instructions && <p>{errors.instructions}</p>}
        </div>
<div>
          <label>Tags (comma-separated):</label>
          <input name="tags" value={formData.tags} onChange={handleChange} />
        </div>
        <div>
          <label>Notes:</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange} />
        </div>

        <button type="submit">{isEditMode ? 'Update Recipe' : 'Add Recipe'}</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
