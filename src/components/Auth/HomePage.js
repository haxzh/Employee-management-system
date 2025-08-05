import React from 'react';
import { Link } from 'react-router-dom';
import dashboardImage from '../../Image/dashboard-screenshot.png';
import teamImage from '../../Image/team-collaboration.jpg';
// import data-analytics from '../../Image/data-analytics.jpg';
import dataAnalytics from '../../Image/data-analytics.jpg';
import testimonial1 from '../../Image/testimonial1.jpg';
import testimonial2 from '../../Image/testimonial2.jpg';
import testimonial3 from '../../Image/testimonial3.jpg';
import companyLogo1 from '../../Image/company1.png';
import companyLogo2 from '../../Image/company2.png';
import companyLogo3 from '../../Image/company3.png';

import '../style/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Light & Modern Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">
            <i className="bi bi-people-fill me-2"></i>Employee Management System
          </Link>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item mx-2">
                <Link to="/" className="nav-link active fw-medium">Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fw-medium" to="/features">Features</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fw-medium" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fw-medium" to="/about">About</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fw-medium" to="/contact">Contact</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="btn btn-outline-primary rounded-pill px-4" to="/login">Login</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="btn btn-primary rounded-pill px-4 shadow" to="/register">Get Started</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacious Hero Section with Beautiful Image */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Modern Employee <span className="text-primary">Management</span> Solution
              </h1>
              <p className="lead text-muted mb-4">
                Streamline your HR processes with our intuitive platform that helps you manage, track, and grow your workforce efficiently.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-5">
                <Link to="/register" className="btn btn-primary btn-lg rounded-pill px-4 shadow">
                  Start Free Trial
                </Link>
                <Link to="/demo" className="btn btn-outline-secondary btn-lg rounded-pill px-4">
                  <i className="bi bi-play-circle me-2"></i>Watch Demo
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <div className="avatar-group me-3">
                  <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" className="avatar" />
                  <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User" className="avatar" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="avatar" />
                  <div className="avatar-more">+500</div>
                </div>
                <div>
                  <p className="mb-0 small text-muted">Trusted by companies worldwide</p>
                  <div className="rating">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                    <span className="ms-2 small">4.7/5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={dashboardImage} alt="Dashboard Preview" className="img-fluid rounded-4 shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      <br/>

      {/* Trusted Companies Section */}
      <section className="trusted-companies py-5 bg-light">
        <div className="container">
          <p className="text-center text-muted mb-4">TRUSTED BY INNOVATIVE TEAMS WORLDWIDE</p>
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-6 col-md-3 col-lg-2">
              <img src={companyLogo1} alt="Company Logo" className="img-fluid grayscale" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img src={companyLogo2} alt="Company Logo" className="img-fluid grayscale" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img src={companyLogo3} alt="Company Logo" className="img-fluid grayscale" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img src={companyLogo1} alt="Company Logo" className="img-fluid grayscale" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img src={companyLogo2} alt="Company Logo" className="img-fluid grayscale" />
            </div>
          </div>
        </div>
      </section>


      
      {/* Features Section with Icons */}
      <section className="features-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Powerful Features</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: "600px"}}>
              Everything you need to manage your workforce effectively and efficiently
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card p-4 rounded-4 h-100">
                <div className="icon-wrapper bg-primary-light mb-4">
                  <i className="bi bi-speedometer2 text-primary fs-3"></i>
                </div>
                <h3 className="h4 mb-3">Employee Dashboard</h3>
                <p className="text-muted">
                  Get a comprehensive overview of all employee data, performance metrics, and analytics in one intuitive dashboard.
                </p>
                <Link to="/features" className="text-primary text-decoration-none fw-medium">
                  Learn more <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card p-4 rounded-4 h-100">
                <div className="icon-wrapper bg-primary-light mb-4">
                  <i className="bi bi-clock-history text-primary fs-3"></i>
                </div>
                <h3 className="h4 mb-3">Time Tracking</h3>
                <p className="text-muted">
                  Accurate tracking of employee hours with automated reporting, overtime alerts, and productivity insights.
                </p>
                <Link to="/features" className="text-primary text-decoration-none fw-medium">
                  Learn more <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card p-4 rounded-4 h-100">
                <div className="icon-wrapper bg-primary-light mb-4">
                  <i className="bi bi-graph-up text-primary fs-3"></i>
                </div>
                <h3 className="h4 mb-3">Performance Analytics</h3>
                <p className="text-muted">
                  Advanced analytics to measure employee performance, identify trends, and make data-driven decisions.
                </p>
                <Link to="/features" className="text-primary text-decoration-none fw-medium">
                  Learn more <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="image-text-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src={teamImage} alt="Team Collaboration" className="img-fluid rounded-4 shadow" />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h2 className="display-6 fw-bold mb-4">Enhance Team Collaboration</h2>
              <p className="lead text-muted mb-4">
                Our platform brings your team together with seamless communication tools and collaborative features.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex">
                  <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                  <span>Real-time messaging and notifications</span>
                </li>
                <li className="mb-3 d-flex">
                  <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                  <span>Shared calendars and scheduling</span>
                </li>
                <li className="mb-3 d-flex">
                  <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                  <span>Document sharing and version control</span>
                </li>
                <li className="mb-3 d-flex">
                  <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                  <span>Project management integration</span>
                </li>
              </ul>
              <Link to="/features" className="btn btn-outline-primary btn-lg mt-3">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="display-4 fw-bold text-primary mb-2">500+</div>
              <p className="text-muted mb-0">Happy Companies</p>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="display-4 fw-bold text-primary mb-2">50K+</div>
              <p className="text-muted mb-0">Active Users</p>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="display-4 fw-bold text-primary mb-2">24/7</div>
              <p className="text-muted mb-0">Support</p>
            </div>
            <div className="col-md-3">
              <div className="display-4 fw-bold text-primary mb-2">99.9%</div>
              <p className="text-muted mb-0">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">What Our Clients Say</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: "600px"}}>
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="testimonial-card p-4 rounded-4 h-100">
                <div className="rating mb-3">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <p className="mb-4">
                  "This system has transformed how we manage our workforce. The analytics alone have saved us hundreds of hours in decision-making."
                </p>
                <div className="d-flex align-items-center">
                  <img src={testimonial1} alt="Client" className="rounded-circle me-3" width="50" />
                  <div>
                    <h6 className="mb-0">Sarah Johnson</h6>
                    <small className="text-muted">CEO, TechSolutions Inc.</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card p-4 rounded-4 h-100">
                <div className="rating mb-3">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-half text-warning"></i>
                </div>
                <p className="mb-4">
                  "The intuitive interface and powerful features made onboarding our team a breeze. Our HR department is now more efficient than ever."
                </p>
                <div className="d-flex align-items-center">
                  <img src={testimonial2} alt="Client" className="rounded-circle me-3" width="50" />
                  <div>
                    <h6 className="mb-0">Michael Chen</h6>
                    <small className="text-muted">HR Director, GlobalCorp</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card p-4 rounded-4 h-100">
                <div className="rating mb-3">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star text-warning"></i>
                </div>
                <p className="mb-4">
                  "We've tried several solutions before, but EMS stands out with its perfect balance of simplicity and powerful features."
                </p>
                <div className="d-flex align-items-center">
                  <img src={testimonial3} alt="Client" className="rounded-circle me-3" width="50" />
                  <div>
                    <h6 className="mb-0">David Rodriguez</h6>
                    <small className="text-muted">Operations Manager</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Workforce Management?</h2>
              <p className="lead mb-5 mx-auto" style={{maxWidth: "600px"}}>
                Join thousands of businesses already using our platform to streamline their HR processes
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/register" className="btn btn-light btn-lg rounded-pill px-4 shadow">
                  Start Free 14-Day Trial
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg rounded-pill px-4">
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h3 className="h4 mb-3">
                <i className="bi bi-people-fill text-primary me-2"></i>
                <span className="text-primary">Employee Management</span>
              </h3>
              <p className="text-muted">
                The most comprehensive solution for modern workforce management, helping businesses optimize their HR processes.
              </p>
              <div className="social-links mt-3">
                <Link to="#" className="text-muted me-3"><i className="bi bi-facebook fs-5"></i></Link>
                <Link to="#" className="text-muted me-3"><i className="bi bi-twitter fs-5"></i></Link>
                <Link to="#" className="text-muted me-3"><i className="bi bi-linkedin fs-5"></i></Link>
                <Link to="#" className="text-muted me-3"><i className="bi bi-instagram fs-5"></i></Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
              <h4 className="h5 mb-3">Product</h4>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/features" className="text-muted text-decoration-none">Features</Link></li>
                <li className="mb-2"><Link to="/pricing" className="text-muted text-decoration-none">Pricing</Link></li>
                <li className="mb-2"><Link to="/integrations" className="text-muted text-decoration-none">Integrations</Link></li>
                <li className="mb-2"><Link to="/updates" className="text-muted text-decoration-none">Updates</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
              <h4 className="h5 mb-3">Company</h4>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/about" className="text-muted text-decoration-none">About</Link></li>
                <li className="mb-2"><Link to="/careers" className="text-muted text-decoration-none">Careers</Link></li>
                <li className="mb-2"><Link to="/blog" className="text-muted text-decoration-none">Blog</Link></li>
                <li className="mb-2"><Link to="/press" className="text-muted text-decoration-none">Press</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 mb-4">
              <h4 className="h5 mb-3">Contact Us</h4>
              <ul className="list-unstyled text-muted">
                <li className="mb-2"><i className="bi bi-envelope me-2"></i> info@employeemanagement.com</li>
                <li className="mb-2"><i className="bi bi-telephone me-2"></i> +91 8077827705</li>
                <li className="mb-2"><i className="bi bi-geo-alt me-2"></i> Itm University, Gwalior, India</li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="small text-muted mb-0">© 2023 Employee Management System. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="list-inline small mb-0">
                <li className="list-inline-item"><Link to="/privacy" className="text-muted text-decoration-none">Privacy Policy</Link></li>
                <li className="list-inline-item mx-2">•</li>
                <li className="list-inline-item"><Link to="/terms" className="text-muted text-decoration-none">Terms of Service</Link></li>
                <li className="list-inline-item mx-2">•</li>
                <li className="list-inline-item"><Link to="/cookies" className="text-muted text-decoration-none">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;