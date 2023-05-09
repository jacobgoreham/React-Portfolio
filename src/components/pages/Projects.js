import React from "react";

const projects = [
  {
    name: "Jacobs' JATE",
    description:
      "Highlights: Javascript, Webpack, Express.js, Concurrently, Nodemon",
    imageSrc: "../images/screenshot1.png",
    githubLink: "https://github.com/jacobgoreham/Jacobs-PWA",
  },
  {
    name: "WaterWise",
    description: "Highlights: CSS, Session, Authentification, HandleBars",
    //The Repo for 'the Goat Packs' water discussion board.
    imageSrc: "../images/screenshot2.png",
    githubLink: "https://github.com/sullivann7789/waterwise",
  },
  {
    name: "GitMovie",
    description:
      "GitMovie was another group project that turned out extremeley well!",
    imageSrc: " ../images/screenshot3.png",
    githubLink: "https://cmadrid48.github.io/gitMovie/",
  },
  {
    name: "Note Pad",
    description:
      "Note Pad is simply a place to keep all the notes you've taken!",
    imageSrc: " ../images/screenshot4.png",
    githubLink: "https://jacobs-note-taker.herokuapp.com/",
  },
  {
    name: "Note Pad2",
    description:
      "Note Pad is simply a place to keep all the notes you've taken!",
    imageSrc: " ../images/screenshot4.png",
    githubLink: "https://jacobs-note-taker.herokuapp.com/",
  },
  {
    name: "Note Pad3",
    description:
      "Note Pad is simply a place to keep all the notes you've taken!",
    imageSrc: " ../images/screenshot4.png",
    githubLink: "https://jacobs-note-taker.herokuapp.com/",
  },
];
//https://jacobs-note-taker.herokuapp.com/

export default function Blog() {
  return (
    <div style={{ backgroundColor: "#222222", padding: "20px" }}>
      <script>
        @import
        url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
      </script>
      <div
        style={{
          backgroundColor: "#333333",
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "10px",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#3f51b5")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#333333")
        }
      >
        <h1
          style={{
            color: "#ff4060",
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "36px",
            fontFamily: "Bruno Ace SC",
          }}
        >
          Projects
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "20px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#333333",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              transition: "all 0.3s ease-in-out",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              transform: "translateY(0)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#3f51b5")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#333333")
            }
            onClick={(e) => {
              const element = e.currentTarget;
              if (element) {
                element.style.backgroundColor = "#34D399";
                setTimeout(() => {
                  element.style.backgroundColor = "#333333";
                }, 300);
              }
            }}
          >
            <div style={{ height: "200px", marginBottom: "10px" }}>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    border: "5px solid #3f51b5",
                  }}
                  src={project.imageSrc}
                  alt="Project Screenshot"
                />
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <h3
                style={{
                  color: "#ff4060",
                  marginTop: "10px",
                  fontFamily: "Bruno Ace SC",
                }}
              >
                {project.name}
              </h3>
              <p
                style={{
                  color: "#ff4060",
                  marginTop: "10px",
                  fontFamily: "Space Mono",
                }}
              >
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
