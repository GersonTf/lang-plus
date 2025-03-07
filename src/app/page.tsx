"use client"; // Add this line at the top

import React from "react";
import Head from "next/head";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Aplus Languages - Professional English & Spanish Language Lessons in Seattle</title>
        <meta
          name="description"
          content="Expert English and Spanish language lessons in Seattle. Personalized one-on-one classes, small group sessions, and business language training. Native-speaking teachers with proven teaching methods."
        />
        <meta
          name="keywords"
          content="language classes Seattle, English lessons Seattle, Spanish lessons Seattle, business English, conversational Spanish, private language tutor, language learning, ESL classes, Spanish classes, online language lessons, in-person language classes"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Aplus Languages - Professional Language Lessons in Seattle" />
        <meta property="og:description" content="Expert English and Spanish language lessons in Seattle. Personalized one-on-one classes, small group sessions, and business language training." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aplus Languages - Professional Language Lessons" />
        <meta name="twitter:description" content="Expert English and Spanish language lessons. Personalized classes and proven teaching methods." />
        <link rel="canonical" href="https://www.a-plus-languages.com" />
      </Head>
      <main style={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        scrollBehavior: "smooth",
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
              />
              <div style={{ 
                fontSize: "clamp(1.2rem, 4vw, 1.5rem)", 
                fontWeight: "700", 
                color: "#3b82f6" 
              }}>
                Aplus Languages
              </div>
            </div>
            <div style={{ display: "flex", gap: "clamp(1rem, 3vw, 2rem)" }}>
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
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

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
                filter: "brightness(1.1)",
              }}
              priority
              loading="eager"
              onLoadingComplete={(e) => {
                e.style.opacity = "1";
                e.style.transform = "scale(1)";
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
              Expert English & Spanish Language Classes in Seattle
            </h1>
            <p style={{ 
              fontSize: "1.25rem", 
              opacity: 0.95,
              marginBottom: "2rem",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}>
              Transform your language skills with personalized lessons from native-speaking teachers. Available online or in-person.
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
              Why Choose Aplus Languages?
            </h2>
            <p style={{ 
              fontSize: "1.1rem", 
              color: "#475569",
              lineHeight: "1.6",
              marginBottom: "1.5rem",
            }}>
              With over a decade of experience teaching languages in Seattle, we specialize in helping students achieve fluency through personalized, engaging lessons. Our proven methodology combines conversation practice, grammar fundamentals, and cultural immersion to ensure the best learning experience for every student.
            </p>
            <ul style={{
              listStyle: "none",
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
            }}>
              {[
                "Native-speaking teachers with teaching certifications",
                "Flexible scheduling for busy professionals",
                "Proven success with hundreds of satisfied students",
                "Customized learning plans for your goals"
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
              textAlign: "center",
            }}>
              Classes Offered
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridAutoRows: "minmax(200px, auto)",
              rowGap: "4rem",
              columnGap: "2rem",
              marginBottom: "3rem",
              maxWidth: "900px",
              margin: "0 auto",
            }}>
              {[
                {
                  title: "One-on-one Lessons",
                  description: "Accelerate your learning with personalized attention and customized lesson plans. Perfect for focused language acquisition and rapid progress in speaking, listening, reading, and writing.",
                  icon: "👤"
                },
                {
                  title: "Small Group Classes",
                  description: "Learn collaboratively in groups of 2-4 students. Practice real-world conversations, share cultural insights, and enjoy reduced rates while maintaining personalized attention.",
                  icon: "👥"
                },
                {
                  title: "Business Language Training",
                  description: "Master professional communication skills, industry-specific vocabulary, and business etiquette. Ideal for career advancement and international business relations.",
                  icon: "💼"
                },
                {
                  title: "Conversation Practice",
                  description: "Gain confidence through guided discussions, pronunciation workshops, and cultural exchange. Focus on practical, everyday language use with native speakers.",
                  icon: "💭"
                }
              ].map((classType, index) => (
                <div key={index} style={{
                  padding: "2rem",
                  borderRadius: "12px",
                  backgroundColor: "#f8fafc",
                  transition: "all 0.3s ease",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = "#3b82f6";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}>
                  <div style={{
                    fontSize: "2.5rem",
                    marginBottom: "0.5rem",
                  }}>
                    {classType.icon}
                  </div>
                  <h3 style={{ 
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
              marginTop: "3rem",
              borderTop: "1px solid #e2e8f0",
              paddingTop: "2rem",
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              padding: "2rem",
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
                Book your free consultation today and discover how our personalized approach can help you achieve your language goals.
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
            marginTop: "2rem",
            padding: "1.5rem",
            color: "#64748b",
            borderTop: "1px solid #e2e8f0",
          }}>
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
              &copy; {new Date().getFullYear()} Aplus Languages. All rights
              reserved.
            </p>
          </footer>
        </main>
      </main>
    </>
  );
};

export default HomePage;
