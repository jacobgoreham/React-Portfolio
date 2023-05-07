import React from "react";

const projects = [
  {
    name: "Jacobs' JATE",
    description: "Just . Another . Text . Editor",
    imageSrc: "../images/screenshot1.png",
    githubLink: "https://github.com/jacobgoreham/Jacobs-PWA",
  },
  {
    name: "WaterWise",
    description: "The Repo for 'the Goat Packs' water discussion board.",
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
];

export default function Blog() {
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
          Projects
        </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#333333",
              padding: "20px",
              marginRight: "20px",
              borderRadius: "10px",
              width: "300px",
              transition: "all 0.3s ease-in-out",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              transform: "translateY(0)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#2C3E90")
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
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  src={project.imageSrc}
                  alt="Project Screenshot"
                />
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ color: "#FFFFFF", marginTop: "10px" }}>
                {project.name}
              </h3>
              <p style={{ color: "#FFFFFF", marginTop: "10px" }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
