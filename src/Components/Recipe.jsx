// import React from 'react';
// import './Recipe.css';

// const Recipe = ({ title, calories, image, ingredients }) => {
//   return (
//     <div className="recipe">
//       <h2>{title}</h2>
//       <p>Calories: {Math.ceil(calories)}</p>
//       <img src={image} alt="" />
//       <h3>Ingredients:</h3>
//       <ol>
//         {ingredients.map((ingredient, index) => (
//           <li key={index}>{ingredient.text}</li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// export default Recipe;

import React from 'react';
import './Recipe.css';

const Recipe = ({ title, calories, image, ingredients, serves }) => {
  return (
    <div className="recipe">
      <h2>{title}</h2>
      <p><b>Calories:</b> {Math.ceil(calories)}</p>
      <p><b>Serves:</b> {serves}</p> 
      <img src={image} alt={title} />
      <h3>Ingredients:</h3>
      <ol>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
}

export default Recipe;
