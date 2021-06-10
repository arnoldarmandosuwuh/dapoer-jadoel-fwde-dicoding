import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "@fortawesome/fontawesome-free/js/all";
import getRestaurant from "./home";
import "./components/hero-section";
import "./components/navbar-section";
import "./components/footer-section";
import "./components/card-item";

const menuToggle = document.querySelector(".menu-toggle, .menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

getRestaurant();
