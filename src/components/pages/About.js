import React from "react";

export default function About(props) {
  return (
    <div style={{ backgroundColor: "#F2F2F2", padding: "20px" }}>
      <div
        style={{
          backgroundColor: "#2C3E50",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            color: "#FFFFFF",
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "36px",
          }}
        >
          About Page
        </h1>
      </div>
      <p style={{ color: "#333333", fontSize: "20px", lineHeight: "1.5" }}>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      {/* <button onClick={() => props.handlePageChange("Home")}>Go to Home</button> */}
    </div>
  );
}
