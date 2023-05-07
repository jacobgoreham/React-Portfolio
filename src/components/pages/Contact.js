import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Username: ", username);
    console.log("Message: ", message);
    // Here you can add code to send the email, username and message to your server
    // using an HTTP request or any other method that you prefer
    setEmail("");
    setUsername("");
    setMessage("");
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <div style={{ display: "flex", width: "50%" }}>
        <div style={{ backgroundColor: "#222222", padding: "20px", flex: 1 }}>
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
              Contact
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ color: "#FFFFFF", marginBottom: "10px" }}>
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                style={{
                  padding: "10px",
                  marginBottom: "20px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "#333333",
                  color: "#FFFFFF",
                }}
                required
              />
              <label style={{ color: "#FFFFFF", marginBottom: "10px" }}>
                Username:
              </label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                style={{
                  padding: "10px",
                  marginBottom: "20px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "#333333",
                  color: "#FFFFFF",
                }}
                required
              />
              <label style={{ color: "#FFFFFF", marginBottom: "10px" }}>
                Message:
              </label>
              <textarea
                value={message}
                onChange={handleMessageChange}
                style={{
                  padding: "10px",
                  marginBottom: "20px",
                  borderRadius: "5px",
                  border: "none",
                  resize: "vertical",
                  backgroundColor: "#333333",
                  color: "#FFFFFF",
                }}
                required
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#333333",
                  color: "#FFFFFF",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2C3E90")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#333333")
                }
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div style={{ flex: 1, marginLeft: "20px" }}>
          <img
            src={"/components/images/screenshot1.png"}
            alt="Profile"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
