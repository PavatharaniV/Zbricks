import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState(900); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const today = new Date();
  const date = today.toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="landing-page">
      {/* Sticky Header */}
      <header className="header">
        <h2>ZBricks Academy</h2>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in">Master Future-Ready Skills with ZBricks!</h1>
          <p className="slide-up">
            Join our **LIVE Webinar** on <strong>{date}</strong> and discover
            how you can fast-track your career with hands-on learning.
          </p>

          <div className="price-section zoom-in">
            <span className="old-price">₹50</span>
            <span className="new-price">₹1 Only!</span>
          </div>

          <form className="signup-form bounce">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <button type="submit" className="shake-button">Join Now for ₹1</button>
          </form>
        </div>

        <div className="hero-image fade-in">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Webinar Learning"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="fade-in">Why You Shouldn’t Miss This Webinar</h2>
        <div className="feature-cards">
          <div className="card slide-up">
            <h3>🚀 Learn In-Demand Skills</h3>
            <p>Get practical insights into trending career paths.</p>
          </div>
          <div className="card slide-up">
            <h3>🎓 Get Certified</h3>
            <p>Receive an official participation certificate from ZBricks Academy.</p>
          </div>
          <div className="card slide-up">
            <h3>💼 Career Boost</h3>
            <p>Learn directly from professionals working in top companies.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Learners Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial fade-in">
            <p>
              “ZBricks Academy helped me get my dream job in 3 months! The webinars are interactive and super helpful.”
            </p>
            <h4>- Riya Sharma</h4>
          </div>
          <div className="testimonial fade-in">
            <p>
              “I loved how practical the sessions were. The mentors actually care about your learning journey.”
            </p>
            <h4>- Arjun Patel</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta bounce">
        <h2>Seats Filling Fast!</h2>
        <p>Join our next FREE webinar for just ₹1 and transform your future.</p>
        <form className="signup-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Claim Your Spot</button>
        </form>
      </section>

      {/* Countdown Footer */}
      <footer className="footer">
        <div className="timer">
          Offer ends in{" "}
          <span>
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>
        </div>
        <button className="bottom-signup">Join Webinar for ₹1</button>
      </footer>

    </div>
  );
}

export default App;
