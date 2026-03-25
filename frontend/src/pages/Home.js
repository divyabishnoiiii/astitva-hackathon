import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    { title: "SOS", icon: "🚨", link: "/sos" },
    { title: "Heatmap", icon: "🗺️", external: "/map.html" },
    { title: "Chatbot", icon: "💬", link: "/chatbot" },
    { title: "NGO Help", icon: "🤝", link: "/ngo" },
    { title: "Housing", icon: "🏠", external: "/housing.html" },
  ];

  return (
    <div style={styles.container}>

      {/* ✨ NAV CARDS */}
      <div style={styles.navCardContainer}>
        {cards.map((card, index) =>
          card.external ? (
            <a
              key={index}
              href={card.external}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div style={styles.navCard}>
                {card.icon} {card.title}
              </div>
            </a>
          ) : (
            <Link key={index} to={card.link} style={{ textDecoration: "none" }}>
              <div style={styles.navCard}>
                {card.icon} {card.title}
              </div>
            </Link>
          )
        )}
      </div>

      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>ASTITVA AI ✨</h1>

        <p style={styles.signature}>
          Empowering Identity & Inclusion
        </p>

        <p style={styles.subtitle}>
          Astitva AI is an all-in-one platform providing legal help, safety tools (SOS & heatmap), housing support, mental health care, and access to inclusive jobs, healthcare, and NGOs.
        </p>
      </div>

      {/* MAIN FEATURE GRID */}
      <div style={styles.grid}>
        {cards.map((card, index) =>
          card.external ? (
            <a
              key={index}
              href={card.external}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  ...styles.card,
                  transform:
                    activeCard === index ? "scale(1.05)" : "scale(1)",
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div style={styles.icon}>{card.icon}</div>
                <div style={styles.cardTitle}>{card.title}</div>
              </div>
            </a>
          ) : (
            <Link key={index} to={card.link} style={{ textDecoration: "none" }}>
              <div
                style={{
                  ...styles.card,
                  transform:
                    activeCard === index ? "scale(1.05)" : "scale(1)",
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div style={styles.icon}>{card.icon}</div>
                <div style={styles.cardTitle}>{card.title}</div>
              </div>
            </Link>
          )
        )}
      </div>

      {/* AI PANEL */}
      <div style={styles.aiPanel}>
        <div style={styles.aiHeader}>🤖 Astitva AI</div>
        <div style={styles.aiMessage}>
          Helping you build your idea...
        </div>
        <div style={styles.chips}>
          <button style={styles.chip}>Validate Idea</button>
          <button style={styles.chip}>Find Risks</button>
          <button style={styles.chip}>Market Fit</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0B0F1A",
    color: "white",
    padding: "20px",
    fontFamily: "Inter, sans-serif",
  },

  navCardContainer: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "25px",
  },

  navCard: {
    padding: "10px 16px",
    borderRadius: "20px",
    background: "rgba(168,85,247,0.15)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(168,85,247,0.3)",
    color: "white",
    fontSize: "14px",
    cursor: "pointer",
  },

  header: {
    textAlign: "center",
    marginBottom: "30px",
  },

  title: {
    fontSize: "42px",
    background: "linear-gradient(90deg, #c084fc, #a855f7, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  signature: {
    fontFamily: "cursive",
    fontSize: "18px",
    marginTop: "-10px",
    marginBottom: "10px",
    color: "white",
    opacity: 0.9,
  },

  subtitle: {
    opacity: 0.7,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
  },

  card: {
    padding: "30px",
    borderRadius: "20px",
    background: "rgba(168,85,247,0.15)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(168,85,247,0.3)",
    textAlign: "center",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 0 20px rgba(168,85,247,0.2)",
  },

  icon: {
    fontSize: "28px",
    marginBottom: "10px",
  },

  cardTitle: {
    fontSize: "18px",
    color: "white",
  },

  aiPanel: {
    marginTop: "40px",
    padding: "20px",
    borderRadius: "20px",
    background: "rgba(168,85,247,0.1)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(168,85,247,0.3)",
  },

  aiHeader: {
    fontWeight: "600",
    marginBottom: "10px",
  },

  aiMessage: {
    opacity: 0.8,
    marginBottom: "10px",
  },

  chips: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },

  chip: {
    padding: "8px 14px",
    borderRadius: "20px",
    border: "none",
    background: "linear-gradient(90deg, #c084fc, #a855f7, #7c3aed)",
    color: "white",
    cursor: "pointer",
  },
};

export default Home;