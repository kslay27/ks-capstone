import React from "react"
import small_logo from "../images/Logo.svg"

const Footer = () => {
    return(
        <footer className="restaurant-footer">
            <section>
            <div className="restaurant-info">
                <img src={small_logo} alt="Little Lemon"/>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            </div>
            <div>
                <h3>Important Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li><a href="/menu">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
            <li>Address: <br/> 123 Blvd Street, Chicago</li>
                <li>Phone: <br/> +00 000 000 000</li>
                <li>Email: <br/> littlelemon@gmail.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="/">Meta</a></li>
                <li><a href="=/">Instagram</a></li>
                <li><a href="/">X</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;