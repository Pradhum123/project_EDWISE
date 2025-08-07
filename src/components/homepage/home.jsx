import React, { useState } from 'react';
import './index.css';

function Home() {
  const [count, setCount] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const quickAction = (action) => {
    console.log('Quick action:', action);
  };

  const animateLogo = () => {
    console.log('Logo clicked');
  };

  const showTokenInfo = () => {
    console.log('Token info clicked');
  };

  const toggleTheme = () => {
    console.log('Theme toggle clicked');
  };

  const toggleVoiceSearch = () => {
    console.log('Voice search toggled');
  };

  const toggleAI = () => {
    console.log('AI assistant toggled');
  };

  return (
    <>
      <div className="bg-animation">
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      </div>

      <div className="container">
        <header className="header">
          <div className="header-content">
            <div className="logo" onClick={animateLogo}>Edwise</div>
            
            <nav className="nav">
              <button className="nav-btn active" data-page="home">🏠 HOME</button>
              <button className="nav-btn" data-page="explore">🔍 Find Colleges</button>
              <button className="nav-btn" data-page="chat">💬 Student Chat</button>
              <button className="nav-btn" data-page="Redeem">🎁 Redeem</button>
              <button className="nav-btn" data-page="profile">🙎🏻‍♂️ Profile</button>
              <button className="nav-btn" data-page="buy">💰Tokens</button>
            </nav>
            
            <div className="header-right">
              <div className="tokens" onClick={showTokenInfo}>
                💰 CREDITS: <span id="tokenCount">{count}</span>
              </div>
              <div className="theme-toggle" onClick={toggleTheme}></div>
            </div>
          </div>
        </header>

        <main className="main-content">
          <section className="hero">
            <h1>Real Students, Real Reviews</h1>
            <p>
              Discover authentic college experiences from students who've been there.
              Share your story, help others choose wisely! 🎓
            </p>
          </section>

          <section className="search-section">
            <div className="search-container">
              <input
                type="text"
                className="search-bar"
                placeholder="Search colleges, courses, or ask students anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="searchInput"
              />
              <button className="voice-btn" onClick={toggleVoiceSearch}>🎤</button>
              <button className="search-btn" onClick={handleSearch}>🔍</button>
            </div>
          </section>

          <section className="quick-actions">
            <div className="action-card" onClick={() => quickAction("browse")}>
              <span className="icon">📚</span>
              <h3>Browse Reviews</h3>
              <p>Read honest student reviews</p>
            </div>
            <div className="action-card" onClick={() => quickAction("top")}>
              <span className="icon">🏆</span>
              <h3>Top Colleges</h3>
              <p>Discover highest rated colleges</p>
            </div>
            <div className="action-card" onClick={() => quickAction("write")}>
              <span className="icon">✍️</span>
              <h3>Write Review</h3>
              <p>Share your college experience</p>
            </div>
            <div className="action-card" onClick={() => quickAction("connect")}>
              <span className="icon">🤝</span>
              <h3>Connect Students</h3>
              <p>Chat with current students</p>
            </div>
          </section>

          <section className="content-grid">
            <div className="main-panel">
              <h2>🎯 Student Hub</h2>
              <p>
                Connect with real students, get honest reviews, and make informed decisions about your college journey. Every opinion matters!
              </p>

              <div style={{ marginTop: "2rem" }}>
                <h3>🔥 Recent Activity</h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1rem",
                    marginTop: "1rem"
                  }}
                >
                  <div style={{
                    textAlign: "center",
                    padding: "1rem",
                    background: "var(--secondary-bg)",
                    borderRadius: "10px"
                  }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--accent)" }}>2,847</div>
                    <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>Reviews Written</div>
                  </div>
                  <div style={{
                    textAlign: "center",
                    padding: "1rem",
                    background: "var(--secondary-bg)",
                    borderRadius: "10px"
                  }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--success)" }}>450+</div>
                    <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>Colleges Listed</div>
                  </div>
                  <div style={{
                    textAlign: "center",
                    padding: "1rem",
                    background: "var(--secondary-bg)",
                    borderRadius: "10px"
                  }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--warning)" }}>15K+</div>
                    <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>Active Students</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-card">
                <h3>🔥 Trending Reviews</h3>
                <p>"Amazing campus life at XYZ College!"</p>
                <p>"IIT Delhi - Worth the hype?"</p>
                <p>"DU vs Private: Real comparison"</p>
              </div>
              <div className="sidebar-card">
                <h3>📈 Your Impact</h3>
                <div
                  style={{
                    background: "var(--secondary-bg)",
                    height: "8px",
                    borderRadius: "4px",
                    marginTop: "0.5rem"
                  }}
                >
                  <div
                    style={{
                      background: "var(--accent)",
                      height: "100%",
                      width: "85%",
                      borderRadius: "4px",
                      transition: "width 0.5s ease"
                    }}
                  ></div>
                </div>
                <p style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>85% Helpful Reviews</p>
              </div>
              <div className="sidebar-card">
                <h3>🎯 Weekly Challenge</h3>
                <p>Write 3 honest reviews</p>
                <div style={{ marginTop: "0.5rem" }}>✅ ✅ ⭕</div>
                <small>Earn bonus credibility points!</small>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="ai-assistant">
        <button className="ai-btn" onClick={toggleAI} title="AI Assistant">🤖</button>
      </div>

      <div id="notification" className="notification"></div>
    </>
  );
}

export default Home;
