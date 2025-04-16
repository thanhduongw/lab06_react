import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo_footer.png";
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container-fluid">
        <div className="row gy-5">
          {/* About Us Column */}
          <div className="col-lg-6">
            <h5 className="fw-semibold mb-3" style={{ fontSize: "20px" }}>
              About Us
            </h5>
            <p className="mb-4" style={{ fontSize: "15px", lineHeight: "1.6" }}>
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="d-flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
              />
              <button type="submit" className="btn" style={{ backgroundColor: "#FF4E8C", color: "#fff" }}>
                Send
              </button>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <img src={logo} alt="Chefify Logo" height="32" />
                {/* Optionally add a logo text here */}
              </div>
              <div className="d-flex align-items-center gap-4 small text-secondary">
                <span>2025 Chefify Company</span>
                <Link to="/terms" className="text-secondary text-decoration-none">
                  Terms of Service
                </Link>
                <Link to="/privacy" className="text-secondary text-decoration-none">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Learn More & Shop Column */}
          <div className="col-lg-3">
            <h5 className="fw-semibold mb-3" style={{ fontSize: "20px" }}>
              Learn More
            </h5>
            <ul className="list-unstyled mb-4">
              <li className="mb-3">
                <Link to="/our-cooks" className="text-secondary text-decoration-none" style={{ fontSize: "15px" }}>
                  Our Cooks
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/features" className="text-secondary text-decoration-none" style={{ fontSize: "15px" }}>
                  See Our Features
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/faq" className="text-secondary text-decoration-none" style={{ fontSize: "15px" }}>
                  FAQ
                </Link>
              </li>
            </ul>
            <h5 className="fw-semibold mb-3" style={{ fontSize: "20px" }}>
              Shop
            </h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link to="/gift-subscription" className="text-secondary text-decoration-none" style={{ fontSize: "15px" }}>
                  Gift Subscription
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/feedback" className="text-secondary text-decoration-none" style={{ fontSize: "15px" }}>
                  Send Us Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Recipes Column */}
          <div className="col-lg-3">
            <h5 className="fw-semibold mb-3" style={{ fontSize: "20px" }}>
              Recipes
            </h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link to="/what-to-cook" className="text-secondary text-decoration-none" style={{ fontSize: "15px" }}>
                  What to Cook This Week
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/pasta" className="text-secondary text-decoration-none" style={{ fontSize: "15px" }}>
                  Pasta
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/dinner" className="text-secondary text-decoration-none" style={{ fontSize: "15px" }}>
                  Dinner
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/healthy" className="text-secondary text-decoration-none" style={{ fontSize: "15px" }}>
                  Healthy
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/vegetarian" className="text-secondary text-decoration-none" style={{ fontSize: "15px" }}>
                  Vegetarian
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/vegan" className="text-secondary text-decoration-none" style={{ fontSize: "15px" }}>
                  Vegan
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/christmas" className="text-secondary text-decoration-none" style={{ fontSize: "15px" }}>
                  Christmas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
