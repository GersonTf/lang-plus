"use client"; // Add this line at the top

import React from "react";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <main style={{
      backgroundColor: "#f8fafc",
      minHeight: "100vh",
      fontFamily: "'Inter', sans-serif",
      scrollBehavior: "smooth",
    }}
    role="main"
    aria-label="Main content">
      {/* Navigation */}
      <header>
        <nav style={{
          backgroundColor: "#ffffff",
          padding: "clamp(0.5rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
        role="navigation"
        aria-label="Main navigation">
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "1rem",
            }}>
              <Image
                src="/images/aplusenglishLogo.jpg"
                alt="Aplus Languages Logo"
                width={40}
                height={40}
                style={{ 
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
                priority
              />
              <div style={{ 
                fontSize: "clamp(1.2rem, 4vw, 1.5rem)", 
                fontWeight: "700", 
                color: "#3b82f6" 
              }}
              role="heading"
              aria-level={1}>
                Aplus Languages
              </div>
            </div>
            <nav style={{ display: "flex", gap: "clamp(1rem, 3vw, 2rem)" }}
                 role="navigation"
                 aria-label="Section navigation">
              {["About", "Classes", "Contact"].map((item, index) => (
                <a
                  key={index}
                  href={item === "Contact" ? "mailto:andy@a-plus-languages.com" : `#${item.toLowerCase()}`}
                  style={{
                    color: "#475569",
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                    position: "relative",
                    padding: "0.5rem 0",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#3b82f6";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#475569";
                  }}
                  aria-label={`Navigate to ${item} section`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
        color: "white",
        padding: "clamp(2rem, 5vw, 4rem) 2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        minHeight: "500px",
        height: "auto",
        display: "flex",
        alignItems: "center",
      }}
      role="banner"
      aria-label="Hero section">
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
              filter: "brightness(1.1)",
            }}
            priority
            loading="eager"
            onLoad={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.opacity = "1";
              target.style.transform = "scale(1)";
            }}
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
            fontSize: "clamp(2rem, 6vw, 3.5rem)", 
            fontWeight: "700", 
            marginBottom: "1.5rem",
            lineHeight: "1.2",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}>
            Expert Online English & Spanish Language Classes
          </h1>
          <p style={{ 
            fontSize: "1.25rem", 
            opacity: 0.95,
            marginBottom: "2rem",
            textShadow: "0 1px 2px rgba(0,0,0,0.1)",
          }}>
            Transform your language skills with personalized online lessons from your dedicated native-speaking teacher. Learn from anywhere in the world.
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
            aria-label="Email us to inquire about English classes"
          >
            Email Us
          </a>
        </div>
      </section>

      <main style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "clamp(1rem, 3vw, 2rem)",
      }}>
        {/* About Section */}
        <section id="about" style={{
          margin: "clamp(1rem, 3vw, 2rem) 0",
          padding: "clamp(1.5rem, 4vw, 2rem)",
          borderRadius: "16px",
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
          maxWidth: "900px",
          marginInline: "auto",
        }}
        role="region"
        aria-labelledby="about-heading">
          <h2 id="about-heading" style={{ 
            fontSize: "2rem", 
            color: "#3b82f6",
            marginBottom: "1.5rem",
            fontWeight: "700",
          }}>
            Why Choose Aplus Languages?
          </h2>
          <p style={{ 
            fontSize: "1.1rem", 
            color: "#475569",
            lineHeight: "1.6",
            marginBottom: "1.5rem",
          }}>
            With over a decade of experience in online language teaching, I specialize in helping students achieve fluency through personalized, engaging virtual lessons. My proven methodology combines live conversation practice, interactive grammar instruction, and cultural immersion to ensure the best learning experience for every student.
          </p>
          <ul style={{
            listStyle: "none",
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(1rem, 3vw, 1.5rem)",
            marginTop: "2rem",
          }}>
            {[
              "Native speaker with online teaching certification",
              "Flexible scheduling across all time zones",
              "Proven success with hundreds of online students",
              "Personalized attention and dedicated support"
            ].map((benefit, index) => (
              <li key={index} style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#475569",
                fontSize: "1.1rem",
              }}>
                <span style={{ color: "#3b82f6" }}>✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Classes Section */}
        <section id="classes" style={{
          margin: "clamp(1rem, 3vw, 2rem) 0",
          padding: "clamp(1.5rem, 4vw, 2rem)",
          borderRadius: "16px",
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
          maxWidth: "900px",
          marginInline: "auto",
        }}
        role="region"
        aria-labelledby="classes-heading">
          <h2 id="classes-heading" style={{ 
            fontSize: "2rem", 
            color: "#3b82f6",
            marginBottom: "2rem",
            fontWeight: "700",
            textAlign: "center",
          }}>
            Classes Offered
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "5rem",
            width: "100%",
            marginBottom: "5rem",
          }}>
            {[
              {
                title: "Online One-on-one Lessons",
                description: "Accelerate your learning with my personalized attention and customized lesson plans. Perfect for focused language acquisition with the convenience of learning from home.",
                icon: "👤"
              },
              {
                title: "Virtual Group Classes",
                description: "Learn collaboratively in small online groups of 2-4 students. Practice real-world conversations and share cultural insights while enjoying reduced rates.",
                icon: "👥"
              },
              {
                title: "Online Business Language Training",
                description: "Master professional communication skills for the digital workplace. Tailored training for remote teams, international business relations, and virtual networking.",
                icon: "💼"
              },
              {
                title: "Virtual Conversation Practice",
                description: "Build confidence through guided online discussions, interactive pronunciation workshops, and cultural exchange. Practice with a native speaker from the comfort of your home.",
                icon: "💭"
              }
            ].map((classType, index) => (
              <div key={index} style={{
                padding: "clamp(1.5rem, 4vw, 2rem)",
                borderRadius: "12px",
                backgroundColor: "#f8fafc",
                transition: "all 0.3s ease",
                border: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                height: "100%",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                width: "100%",
              }}
              role="article"
              aria-labelledby={`class-title-${index}`}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
                e.currentTarget.style.borderColor = "#3b82f6";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}>
                <div style={{
                  fontSize: "2.5rem",
                  marginBottom: "0.5rem",
                }}
                role="img"
                aria-label={`${classType.title} icon`}>
                  {classType.icon}
                </div>
                <h3 id={`class-title-${index}`} style={{ 
                  fontSize: "1.25rem", 
                  color: "#3b82f6",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}>
                  {classType.title}
                </h3>
                <p style={{ 
                  color: "#475569",
                  lineHeight: "1.6",
                  margin: 0,
                  flex: "1 1 auto",
                }}>
                  {classType.description}
                </p>
              </div>
            ))}
          </div>
          <div style={{
            textAlign: "center",
            marginTop: "5rem",
            borderTop: "1px solid #e2e8f0",
            paddingTop: "clamp(2rem, 5vw, 3rem)",
            backgroundColor: "#f8fafc",
            borderRadius: "12px",
            padding: "clamp(2rem, 5vw, 3rem)",
            width: "100%",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          }}>
            <h3 style={{
              fontSize: "1.5rem",
              color: "#3b82f6",
              fontWeight: "600",
              marginBottom: "1rem",
            }}>
              Ready to Start Your Language Journey?
            </h3>
            <p style={{ 
              color: "#475569",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto 1rem",
            }}>
              Book your free consultation today and discover how my personalized approach can help you achieve your language goals.
            </p>
            <p style={{ 
              color: "#475569",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto",
            }}>
              <a
                href="mailto:andy@a-plus-languages.com?subject=Class%20Inquiry"
                style={{ 
                  color: "#3b82f6",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => e.currentTarget.style.color = "#2563eb"}
                onMouseOut={(e) => e.currentTarget.style.color = "#3b82f6"}
              >
                Contact us
              </a>
              {" "}to schedule your free consultation and discuss your learning goals.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          textAlign: "center",
          marginTop: "clamp(1.5rem, 4vw, 2rem)",
          padding: "clamp(1rem, 3vw, 1.5rem)",
          color: "#64748b",
          borderTop: "1px solid #e2e8f0",
        }}
        role="contentinfo"
        aria-label="Site footer">
          <p style={{ marginBottom: "0.5rem" }}>
            Contact us at{" "}
            <a href="mailto:andy@a-plus-languages.com" 
               style={{ 
                 color: "#3b82f6",
                 textDecoration: "none",
                 fontWeight: "500",
                 transition: "color 0.2s",
               }}
               aria-label="Send email to andy@a-plus-languages.com"
               onMouseOver={(e) => e.currentTarget.style.color = "#2563eb"}
               onMouseOut={(e) => e.currentTarget.style.color = "#3b82f6"}>
              andy@a-plus-languages.com
            </a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} Aplus Languages. All rights
            reserved.
          </p>
        </footer>
      </main>
    </main>
  );
};

export default HomePage;
