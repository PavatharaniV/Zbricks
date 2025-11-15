import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.png";

function App() {
  const [timeLeft, setTimeLeft] = useState(900);

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

  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      Name: formData.name,
      Email: formData.email,
      Date: new Date().toLocaleString()
    };

    setUsers([...users, newEntry]);

    setFormData({ name: "", email: "" });
    setShowModal(false);
  };

  // Download Excel
  const downloadExcel = () => {
    const XLSX = require("xlsx");
    const FileSaver = require("file-saver");

    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    FileSaver.saveAs(blob, "webinar_registrations.xlsx");
  };


  return (
    <div className="landing-page">
      <header className="header">
        <div className="header-content">
          <img
            src={logo}
            alt="ZBricks Logo"
            className="logo"
          />
          <h2>ZBricks Academy</h2>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title fade-in">Master Future-Ready Skills with ZBricks!</h1>

          <p className="hero-subtitle slide-up">
            Join our <strong>LIVE Webinar</strong> on <strong>{date}</strong> and discover
            how you can fast-track your career with hands-on learning.
          </p>

          <div className="price-section zoom-in">
            <span className="old-price">₹50</span>
            <span className="new-price highlight-price">₹1 Only!</span>
          </div>
          <button type="submit" className="shake-button glow-btn"
            onClick={() => setShowModal(true)}
          >
            Join Now for ₹1
          </button>
        </div>
      </section>


      <section class="features">
        <h2 class="fade-in">Why You Shouldn’t Miss This Webinar</h2>

        <div class="feature-cards">

          <div class="card card-animate">
            <h3>🚀 Learn In-Demand Skills</h3>
            <p>Get practical insights into trending career paths.</p>
            <div class="shimmer"></div>
          </div>

          <div class="card card-animate">
            <h3>🎓 Get Certified</h3>
            <p>Receive an official participation certificate from ZBricks Academy.</p>
            <div class="shimmer"></div>
          </div>

          <div class="card card-animate">
            <h3>💼 Career Boost</h3>
            <p>Learn directly from professionals working in top companies.</p>
            <div class="shimmer"></div>
          </div>

        </div>
      </section>


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

      <section class="cta cta-animate">
        <h2>Seats Filling Fast!</h2>
        <p>Join our next FREE webinar for just ₹1 and transform your future.</p>

        <form class="signup-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />

          <button type="submit" class="cta-btn"
            onClick={() => setShowModal(true)}
          >
            Claim Your Spot
            <span class="btn-shimmer"></span>
          </button>
        </form>
      </section>

      <footer class="footer footer-animate">
        <div class="timer">
          Offer ends in <span class="time-badge">{minutes}:{seconds.toString().padStart(2, "0")}</span>
        </div>

        <button class="bottom-signup"
          onClick={() => setShowModal(true)}
        >
          Join Webinar for ₹1
          <span class="btn-shimmer"></span>
        </button>
      </footer>

      {showModal && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Register Now</h2>

            <form onSubmit={handleSubmit} className="popup-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <button type="submit" className="popup-submit">Submit</button>
            </form>

            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
