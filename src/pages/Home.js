import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Swift Insight</h1>
          <p className="tagline">Insights into the world of Swift</p>
          <p className="hero-description">
            A comprehensive resource for learning and mastering Swift, Apple's
            powerful and intuitive programming language.
          </p>
          <div className="hero-buttons">
            <Link to="/qa" className="btn primary-btn">
              Explore Q&A
            </Link>
            <Link to="/about" className="btn secondary-btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Swift Programming Language</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <h3>Fast & Powerful</h3>
            <p>
              Swift is a powerful and intuitive programming language designed
              for exceptional performance and safety.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>Open Source</h3>
            <p>
              Swift is open source and has a vibrant community contributing to
              its growth and development.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3>Modern Syntax</h3>
            <p>
              Swift features a modern, expressive syntax that makes code more
              readable and maintainable.
            </p>
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <h2 className="section-title">Latest Swift Insights</h2>
        <div className="highlights-container">
          <div className="highlight-card">
            <h3>Swift Concurrency</h3>
            <p>
              Understand Swift's modern approach to concurrency with async/await
              syntax and structured concurrency model.
            </p>
            <a
              href="https://docs.swift.org/swift-book/LanguageGuide/Concurrency.html"
              target="_blank"
              rel="noopener noreferrer"
              className="learn-more"
            >
              Learn more →
            </a>
          </div>
          <div className="highlight-card">
            <h3>SwiftUI Framework</h3>
            <p>
              Build user interfaces across all Apple platforms with SwiftUI's
              declarative framework.
            </p>
            <a
              href="https://developer.apple.com/xcode/swiftui/"
              target="_blank"
              rel="noopener noreferrer"
              className="learn-more"
            >
              Learn more →
            </a>
          </div>
          <div className="highlight-card">
            <h3>Server-Side Swift</h3>
            <p>
              Explore how Swift is becoming a popular choice for server-side
              development with frameworks like Vapor and Kitura.
            </p>
            <a
              href="https://swift.org/server/"
              target="_blank"
              rel="noopener noreferrer"
              className="learn-more"
            >
              Learn more →
            </a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Dive into Swift?</h2>
          <p>
            Check out our comprehensive Q&A section or contact us with your
            questions.
          </p>
          <div className="cta-buttons">
            <Link to="/qa" className="btn primary-btn">
              Explore Q&A
            </Link>
            <Link to="/contact" className="btn secondary-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
