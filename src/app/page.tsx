"use client"; // Add this line at the top

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { SiXiaohongshu } from "react-icons/si";

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>
          Aplus English - Professional English Lessons
        </title>
        <meta
          name="description"
          content="Professional English lessons with Aplus English. Personalized classes for individuals and small groups. Improve your English with experienced teaching."
        />
        <meta
          name="keywords"
          content="English classes, English lessons, language learning, English teacher, personalized English lessons"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div style={{ 
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif"
      }}>
        {/* Navigation */}
        <nav style={{
          backgroundColor: "#ffffff",
          padding: "1rem 2rem",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "1rem",
            }}>
              <Image
                src="/images/aplusenglishLogo.jpg"
                alt="Aplus English Logo"
                width={40}
                height={40}
                style={{ 
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#3b82f6" }}>
                Aplus English
              </div>
            </div>
            <div style={{ display: "flex", gap: "2rem" }}>
              <a href="#about" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.2s" }}>About</a>
              <a href="#classes" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.2s" }}>Classes</a>
              <a href="#contact" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.2s" }}>Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
          color: "white",
          padding: "4rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          height: "500px",
          display: "flex",
          alignItems: "center",
        }}>
          {/* Background Image */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            opacity: 0.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Image
              src="/images/student-learning-online.svg"
              alt="Student learning online"
              width={700}
              height={500}
              style={{ 
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              priority
            />
          </div>
          {/* Content */}
          <div style={{ 
            maxWidth: "800px", 
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}>
            <h1 style={{ 
              fontSize: "3.5rem", 
              fontWeight: "700", 
              marginBottom: "1.5rem",
              lineHeight: "1.2",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}>
              Professional English Classes
            </h1>
            <p style={{ 
              fontSize: "1.25rem", 
              opacity: 0.95,
              marginBottom: "2rem",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}>
              Personalized lessons to help you achieve your language goals
            </p>
            <a
              href="mailto:andy@a-plus-languages.com?subject=Inquiry%20about%20English%20Classes"
              style={{
                display: "inline-block",
                padding: "1rem 2rem",
                fontSize: "1.1rem",
                backgroundColor: "white",
                color: "#3b82f6",
                border: "none",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                textDecoration: "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 12px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
              }}
            >
              Email Us
            </a>
          </div>
        </section>

        <main style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
        }}>
          {/* About Section */}
          <section id="about" style={{
            margin: "2rem 0",
            padding: "2rem",
            borderRadius: "16px",
            backgroundColor: "white",
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
          }}>
            <h2 style={{ 
              fontSize: "2rem", 
              color: "#3b82f6",
              marginBottom: "1.5rem",
              fontWeight: "700",
            }}>
              About Us
            </h2>
            <p style={{ 
              fontSize: "1.1rem", 
              color: "#475569",
              lineHeight: "1.6",
            }}>
              With years of experience teaching English, we specialize in helping students achieve their language goals through personalized, engaging lessons. Our proven methodology and experienced teachers ensure the best learning experience for every student.
            </p>
          </section>

          {/* Classes Section */}
          <section id="classes" style={{
            margin: "2rem 0",
            padding: "2rem",
            borderRadius: "16px",
            backgroundColor: "white",
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
          }}>
            <h2 style={{ 
              fontSize: "2rem", 
              color: "#3b82f6",
              marginBottom: "2rem",
              fontWeight: "700",
            }}>
              Classes Offered
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}>
              {[
                {
                  title: "One-on-one Lessons",
                  description: "Personalized attention and customized learning plans"
                },
                {
                  title: "Small Group Classes",
                  description: "Interactive learning with 2-4 students"
                },
                {
                  title: "Business English",
                  description: "Professional communication and workplace skills"
                },
                {
                  title: "Conversation Practice",
                  description: "Improve your speaking confidence"
                }
              ].map((classType, index) => (
                <div key={index} style={{
                  padding: "1.5rem",
                  borderRadius: "12px",
                  backgroundColor: "#f8fafc",
                  transition: "all 0.3s ease",
                  border: "1px solid #e2e8f0",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                  <h3 style={{ 
                    fontSize: "1.25rem", 
                    color: "#3b82f6",
                    marginBottom: "0.75rem",
                    fontWeight: "600",
                  }}>
                    {classType.title}
                  </h3>
                  <p style={{ color: "#475569" }}>
                    {classType.description}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ 
              textAlign: "center",
              marginTop: "2rem",
              color: "#475569",
              fontSize: "1.1rem",
            }}>
              Interested in any of these classes? Contact us to discuss your learning goals and schedule.
            </p>
          </section>

          {/* Contact Section */}
          <section id="contact" style={{
            margin: "2rem 0",
            padding: "2rem",
            borderRadius: "16px",
            backgroundColor: "white",
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
          }}>
            <h2 style={{ 
              fontSize: "2rem", 
              color: "#3b82f6",
              marginBottom: "2rem",
              fontWeight: "700",
            }}>
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "1.5rem",
              maxWidth: "600px",
            }}>
              <div>
                <label htmlFor="name" style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#475569",
                  fontWeight: "500",
                }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    fontSize: "1rem",
                    transition: "all 0.2s ease",
                    backgroundColor: "#f8fafc",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#3b82f6";
                    e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)";
                    e.target.style.backgroundColor = "white";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                    e.target.style.boxShadow = "none";
                    e.target.style.backgroundColor = "#f8fafc";
                  }}
                />
              </div>
              <div>
                <label htmlFor="email" style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#475569",
                  fontWeight: "500",
                }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    fontSize: "1rem",
                    transition: "all 0.2s ease",
                    backgroundColor: "#f8fafc",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#3b82f6";
                    e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)";
                    e.target.style.backgroundColor = "white";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                    e.target.style.boxShadow = "none";
                    e.target.style.backgroundColor = "#f8fafc";
                  }}
                />
              </div>
              <div>
                <label htmlFor="message" style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#475569",
                  fontWeight: "500",
                }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    fontSize: "1rem",
                    resize: "vertical",
                    transition: "all 0.2s ease",
                    backgroundColor: "#f8fafc",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#3b82f6";
                    e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)";
                    e.target.style.backgroundColor = "white";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                    e.target.style.boxShadow = "none";
                    e.target.style.backgroundColor = "#f8fafc";
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: "1rem 2rem",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  alignSelf: "flex-start",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#2563eb";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 12px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#3b82f6";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                }}
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Footer */}
          <footer style={{
            textAlign: "center",
            marginTop: "2rem",
            padding: "1.5rem",
            color: "#64748b",
            borderTop: "1px solid #e2e8f0",
          }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <a
                href="[Your Twitter URL]"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#3b82f6",
                  margin: "0 0.75rem",
                  fontSize: "1.5rem",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.color = "#2563eb";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.color = "#3b82f6";
                }}
              >
                <FaTwitter />
              </a>
              <a
                href="[Your Xiaohongshu URL]"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#3b82f6",
                  margin: "0 0.75rem",
                  fontSize: "1.5rem",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.color = "#2563eb";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.color = "#3b82f6";
                }}
              >
                <SiXiaohongshu />
              </a>
            </div>
            <p style={{ marginBottom: "0.5rem" }}>
              Contact us at{" "}
              <a href="mailto:andy@a-plus-languages.com" style={{ 
                color: "#3b82f6",
                textDecoration: "none",
                fontWeight: "500",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => e.currentTarget.style.color = "#2563eb"}
              onMouseOut={(e) => e.currentTarget.style.color = "#3b82f6"}>
                andy@a-plus-languages.com
              </a>
            </p>
            <p>
              &copy; {new Date().getFullYear()} Aplus English. All rights
              reserved.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default HomePage;
