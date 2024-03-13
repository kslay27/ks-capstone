import React from "react";
import items from "../menuItems";

const Menu = () => {

  const handleOrder = (id) => {
    // Handle order method 
    // ...
  }

  return (
    <header>
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {items.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="Menu Item" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>${recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button aria-label="On Click" className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </header>

  );
};

export default Menu;