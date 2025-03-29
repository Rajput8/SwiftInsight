import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Swift Insight</h1>
          <p className="subtitle">Dedicated to the Swift programming community</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p>
            At Swift Insight, our mission is to make learning Swift programming language accessible, 
            enjoyable, and effective for everyone. We provide comprehensive resources, insights, 
            and support for beginners and experienced developers alike.
          </p>
          <p>
            We believe that Swift is not just a programming language but a gateway to creating 
            amazing applications and experiences. Our goal is to help you harness the full power of 
            Swift and build the next generation of incredible software.
          </p>
        </div>
      </section>

      <section className="about-history">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">2014</div>
              <div className="timeline-content">
                <h3>Swift Launch</h3>
                <p>Apple introduces Swift as a modern, safe, and interactive language for iOS, macOS, watchOS, and tvOS development.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2015</div>
              <div className="timeline-content">
                <h3>Swift Goes Open Source</h3>
                <p>Swift becomes open source, opening doors for the community to contribute to its growth and evolution.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2019</div>
              <div className="timeline-content">
                <h3>SwiftInsight Founded</h3>
                <p>Our platform is established with the goal of providing deeper insights into Swift programming and creating a community of Swift enthusiasts.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">Today</div>
              <div className="timeline-content">
                <h3>Growing Community</h3>
                <p>Swift Insight continues to grow, providing valuable resources to Swift developers worldwide and fostering a community of innovation and learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2 className="section-title">Behind Swift Insight</h2>
          <div className="team-grid">
            <div className="team-member">
              {/* <div className="team-member-avatar"> */}

                <div className="team-member-avatar" style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
       border: "1px solid #ff4500" // Border width & color
                }}>
                
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg> */}

          
              

               

                <img 
                  src="https://i.imgur.com/oHNxHXe.jpeg" 
                  alt="Shiv Kumar" 
                  width="80" 
                  height="80" 
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%"
                  }} 
                />
           
            
                
              </div>
              <h3>Shiv Kumar</h3>
              <p className="team-role">Founder & iOS Developer</p>
              <p>Swift enthusiast since its inception. <br/>
                Full-stack developer specializing in Swift and server-side Swift implementations.
              </p>
            </div>
            
            {/* <div className="team-member">
              <div className="team-member-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Sarah Chen</h3>
              <p className="team-role">Content Director</p>
              <p>Former Apple Developer Evangelist with a passion for making complex concepts accessible.</p>
            </div>
            
            <div className="team-member">
              <div className="team-member-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Michael Rodriguez</h3>
              <p className="team-role">Senior Developer & Educator</p>
              <p>Full-stack developer specializing in Swift and server-side Swift implementations.</p>
            </div> */}
            
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Quality</h3>
              <p>We are committed to providing high-quality, accurate, and up-to-date information about Swift programming.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Community</h3>
              <p>We believe in the power of community and strive to create an inclusive environment for Swift developers.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>We embrace innovation and continuously explore new ways to teach and learn Swift programming.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3>Accessibility</h3>
              <p>We are dedicated to making Swift programming knowledge accessible to everyone, regardless of background or experience level.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Join Our Swift Insight Community</h2>
          <p>Have questions about Swift or want to connect with fellow developers?</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn primary-btn">Contact Us</Link>
            <Link to="/qa" className="btn secondary-btn">Explore Q&A</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
