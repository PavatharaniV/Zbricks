import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ZBricks Academy</h1>
          <p>Learn skills for the future. Join our FREE webinar now!</p>
          <form className="signup-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Education" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose ZBricks Academy?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals.</p>
          </div>
          <div className="card">
            <h3>Interactive Sessions</h3>
            <p>Engaging webinars and workshops.</p>
          </div>
          <div className="card">
            <h3>Free Learning</h3>
            <p>Access valuable content at no cost.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Join?</h2>
        <p>Sign up for our FREE webinar today!</p>
        <form className="signup-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Sign Up</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 ZBricks Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
