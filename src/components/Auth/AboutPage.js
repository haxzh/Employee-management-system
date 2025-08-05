import React from 'react';
import { FaLightbulb, FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa';
import team1 from '../../Image/team1.jpg';
import team2 from '../../Image/team2.jpg';
import team3 from '../../Image/team3.jpg';
import team4 from '../../Image/team4.jpg';
import '../style/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Our Company</h1>
          <p>Driving innovation and excellence since 2010</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                We are committed to transforming the way businesses manage their workforce by providing
                intuitive, powerful tools that streamline operations and enhance productivity. Our mission
                is to empower organizations of all sizes with technology that makes people management
                simple, efficient, and effective.
              </p>
              <p>
                Through continuous innovation and customer-focused development, we strive to be the most
                trusted partner in employee management solutions.
              </p>
            </div>
            <div className="mission-image">
              <div className="image-wrapper">
                <div className="highlight-box"></div>
                <div className="main-image"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaLightbulb />
              </div>
              <h3>Innovation</h3>
              <p>
                We constantly push boundaries to deliver cutting-edge solutions that anticipate
                and meet the evolving needs of modern workplaces.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaChartLine />
              </div>
              <h3>Excellence</h3>
              <p>
                We pursue the highest standards in everything we do, from product development to
                customer support and beyond.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3>People First</h3>
              <p>
                Our technology exists to serve people. We prioritize user experience and human
                connections in all our solutions.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h3>Integrity</h3>
              <p>
                We build trust through transparency, honesty, and ethical business practices in
                every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h3>Company Founded</h3>
                <p>
                  Started in a small office with just 3 employees, focused on basic HR management tools.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2013</div>
              <div className="timeline-content">
                <h3>First Major Client</h3>
                <p>
                  Secured our first enterprise client, leading to rapid product development and team expansion.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2016</div>
              <div className="timeline-content">
                <h3>Platform Redesign</h3>
                <p>
                  Launched our completely redesigned platform with mobile support and advanced analytics.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Global Expansion</h3>
                <p>
                  Opened international offices and localized our software for 5 new markets.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>AI Integration</h3>
                <p>
                  Introduced AI-powered features for predictive analytics and intelligent automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Leadership</h2>
          <p className="team-subtitle">
            The passionate professionals driving our vision forward
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src={team1} alt="Sarah Johnson" />
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h3>Harsh Shakya</h3>
                <p>CEO & Founder</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={team2} alt="Michael Chen" />
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h3>Michael Chen</h3>
                <p>CTO</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={team3} alt="David Rodriguez" />
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h3>David Rodriguez</h3>
                <p>VP of Product</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={team4} alt="Emily Wilson" />
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h3>Emily Wilson</h3>
                <p>VP of Customer Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>250+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
            <div className="stat-item">
              <h3>12</h3>
              <p>Countries Served</p>
            </div>
            <div className="stat-item">
              <h3>99%</h3>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;