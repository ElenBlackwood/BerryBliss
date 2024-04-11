import React, { useState } from 'react';
import './_blog.scss';

import { Link } from 'react-router-dom';

function Article({ title, img, text, showButton }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <article className="article">
        <div className="article__desc-holder">
            <div className="article__img-holder">
                <img src={img} alt="article image" />
            </div>
            <div className="article__text-holder">
              <h3 className="subtitle">{title}</h3>
              <span className="article__line"></span>
            {expanded ? (text.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
                ))) : (
                <p>{text.slice(0, 400)}...</p>
            )}
            {showButton ? (
            <Link to="./blog" className="article__link red-btn red-btn_big">Go to Blog</Link>
          ) : (
            <button className="red-btn" onClick={toggleExpanded}>
              {expanded ? 'Show less' : 'Show more'}
            </button>
          )}
            </div>
        </div>   
    </article>
  );
}

export default Article;






// In this updated Article component:

// We use the useState hook to manage the state of expanded, which tracks whether the article text is expanded or not.
// The toggleExpanded function toggles the value of expanded when called.
// Inside the return statement:
// We conditionally render the article text. If expanded is true, we display the full text. Otherwise, we display a truncated version (first 50 characters followed by ellipsis).
// We render a button that says "Show more" if the text is not expanded and "Show less" if the text is expanded. Clicking this button toggles the expanded state, changing the displayed text accordingly.


// const toggleExpanded = () => {
//     setExpanded(!expanded);
//   };
//   toggleExpanded function: This is an arrow function assigned to the variable toggleExpanded. It serves as a callback function that will be executed when the "Show more" or "Show less" button is clicked.
  
//   setExpanded(!expanded): Inside the toggleExpanded function, it uses the setExpanded function to update the state of the expanded variable. It's a function provided by the useState hook to update the state variable expanded.
  
//   !expanded: The ! operator is the logical NOT operator in JavaScript. When applied to a boolean value, it negates the value. So !expanded evaluates to true if expanded is false, and false if expanded is true. In other words, it flips the value of expanded. If expanded is true, it becomes false, and if expanded is false, it becomes true.
  
//   Therefore, when the toggleExpanded function is called, it will toggle the value of expanded between true and false, effectively switching the state between expanded and collapsed. This mechanism allows us to show or hide the full article text based on the current state of expanded.