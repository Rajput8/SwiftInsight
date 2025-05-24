import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import qaData from '../data/qaData';
import '../styles/QA.css';

const QA = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState({});

  // Get unique categories
  const categories = ['all', ...new Set(qaData.map(item => item.category))];

  // Filter questions based on active category and search query
  const filteredQuestions = qaData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const toggleQuestion = (id) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="qa-page">
      <section className="qa-hero">
        <div className="qa-hero-content">
          <h1>Swift Programming Q&A</h1>
          <p>Find answers to common questions about Swift programming language</p>
        </div>
      </section>

      <section className="qa-content">
        <div className="container">
          <div className="qa-filters">
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search questions..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button 
                  className="clear-search" 
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
            
            {/* <div className="category-filters">
              {categories.map(category => (
                <button 
                  key={category}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div> */}

            {/* <div className="category-filters">
              {categories.map(category => (
                <button 
                  key={category}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === "interview" ? "Interview Insights" : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div> */}

<div className="category-filters">
              {categories.map(category => (
                <button 
                  key={category}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === "interview" 
                    ? "Interview Insights" 
                    : category === "coredata-new" 
                      ? "Coredata New" 
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

          </div>

          <div className="qa-list">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((item) => (
                <div 
                  key={item.id} 
                  className={`qa-item ${expandedQuestions[item.id] ? 'expanded' : ''}`}
                >
                  <div 
                    className="qa-question" 
                    onClick={() => toggleQuestion(item.id)}
                  >
                    <h3>{item.question}</h3>
                    <div className="qa-category-tag">{item.category}</div>
                    <div className="expand-icon">{expandedQuestions[item.id] ? '−' : '+'}</div>
                  </div>
                  
                  {expandedQuestions[item.id] && (
                    <div className="qa-answer">
                      <p>{item.answer}</p>
                      {item.code && (
                        <pre className="code-block">
                          <code>{item.code}</code>
                        </pre>
                      )}
                      {item.resources && (
                        <div className="additional-resources">
                          <h4>Additional Resources:</h4>
                          <ul>
                            {item.resources.map((resource, index) => (
                              <li key={index}>
                                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                  {resource.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-results">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                <h3>No questions found</h3>
                <p>Try adjusting your search or category filter</p>
                <button 
                  className="btn secondary-btn" 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="qa-cta">
        <div className="container">
          <h2>Can't Find What You're Looking For?</h2>
          <p>If you don't see your question listed here, feel free to contact us directly.</p>
          <Link to="/contact" className="btn primary-btn">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default QA;
