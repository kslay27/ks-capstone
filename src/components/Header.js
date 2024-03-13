import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/restaurantfood.jpg";

const Header = () => {
  return (
    <header>
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist. We would be happy to have you.
          </p>

          <Link to="/booking">
            <button className="banner-btn" aria-label="On Click">Reserve a Table</button>
          </Link>
        </div>

        <div className="banner-img">
          <img src={bannerImg} alt="Banner" />
        </div>

      </section>
    </header>
  );
};

export default Header;