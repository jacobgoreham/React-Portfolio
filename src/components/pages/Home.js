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
          (e.currentTarget.style.backgroundColor = "#2C3E90")
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
          About Me
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* <img
          src="../images/myphoto.jpg"
          alt="My Photo"
          style={{
            height: "200px",
            width: "200px",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
        /> */}
        <p
          style={{
            color: "#FFFFFF",
            textAlign: "center",
            fontSize: "20px",
            fontFamily: "Space Mono",
            margin: "20px",
          }}
        >
          My name is Jacob Goreham. I am a FullStack Developer with 1 year of
          experience. Front End Technologies I am proficient in: HTML, CSS,
          JavaScript, JQuery, Responsive Design, React, BootStrap. The Back End
          Technologies I'm proficient in: APIs, Node, Express, MySQL, Sequelize,
          MongoDB, Mongoose, REST, GraphQL, MERN Stack. and have worked on
          various projects including GitMovie, WaterWise, and Note Pad.
        </p>
        <p
          style={{
            color: "#FFFFFF",
            textAlign: "center",
            fontSize: "20px",
            fontFamily: "Space Mono",
            margin: "20px",
          }}
        >
          Jacob Goreham's the name and Codings my Game.
        </p>
      </div>
    </div>
  );
}
