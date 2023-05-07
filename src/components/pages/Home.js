import React from "react";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#222222", padding: "20px" }}>
      <div
        style={{
          backgroundColor: "#333333",
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "10px",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#2C3E50")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#333333")
        }
      >
        <h1
          style={{
            color: "#FFFFFF",
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "36px",
          }}
        >
          About Me Page
        </h1>
      </div>
      <p style={{ color: "#FFFFFF", fontSize: "20px", lineHeight: "1.5" }}>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
      </p>
      {/* <button onClick={() => props.handlePageChange("Home")}>Go to Home</button> */}
    </div>
  );
}
