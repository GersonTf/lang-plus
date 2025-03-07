"use client"; // Add this line at the top

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from 'next/head';
import JsonLd from './components/JsonLd';

// Add metadata for SEO
const metadata = {
  title: 'Aplus Languages - Expert Online English & Spanish Language Classes',
  description: 'Transform your language skills with personalized online English and Spanish lessons from native-speaking teachers. Learn from anywhere in the world with Aplus Languages.',
  keywords: 'online language classes, English lessons, Spanish lessons, language learning, online tutoring, ESL, language teacher',
};

const HomePage: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  return (
    <>
      <JsonLd />
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.apluslanguages.eu" />
      </Head>
      <main style={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        scrollBehavior: "smooth",
        position: "relative",
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
                  width={60}
                  height={60}
                  style={{ 
                    borderRadius: "12px",
                    objectFit: "cover",
                    width: "clamp(40px, 5vw, 60px)",
                    height: "clamp(40px, 5vw, 60px)",
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
                      e.currentTarget.style.transform = "translateY(-2px)";
                      if (item !== "Contact") {
                        e.currentTarget.style.borderBottom = "2px solid #3b82f6";
                      }
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "#475569";
                      e.currentTarget.style.transform = "translateY(0)";
                      if (item !== "Contact") {
                        e.currentTarget.style.borderBottom = "none";
                      }
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
              onClick={handleEmailClick}
              style={{
                display: "inline-block",
                padding: "1rem 2rem",
                fontSize: "1.1rem",
                backgroundColor: isLoading ? "#e2e8f0" : "white",
                color: "#3b82f6",
                border: "none",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: isLoading ? "wait" : "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 12px rgba(0,0,0,0.15)";
                }
              }}
              onMouseOut={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                }
              }}
              aria-label="Email us to inquire about English classes"
            >
              {isLoading ? (
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                  <span style={{
                    display: "inline-block",
                    width: "0.5rem",
                    height: "0.5rem",
                    borderRadius: "50%",
                    backgroundColor: "#3b82f6",
                    animation: "pulse 1s infinite",
                  }}></span>
                  Opening Email
                </div>
              ) : (
                "Email Us"
              )}
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
              {/* Trust Indicators */}
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                marginBottom: "2rem",
                flexWrap: "wrap",
              }}>
                {[
                  { number: "10+", label: "Years Experience" },
                  { number: "1000+", label: "Students Taught" },
                  { number: "4.9/5", label: "Student Rating" },
                ].map((stat, index) => (
                  <div key={index} style={{
                    textAlign: "center",
                  }}>
                    <div style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "#3b82f6",
                      marginBottom: "0.5rem",
                    }}>
                      {stat.number}
                    </div>
                    <div style={{
                      fontSize: "0.875rem",
                      color: "#64748b",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

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
                margin: "0 auto 1.5rem",
              }}>
                Book your <strong>free consultation</strong> today and discover how my personalized approach can help you achieve your language goals. Limited spots available!
              </p>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}>
                <a
                  href="mailto:andy@a-plus-languages.com?subject=Class%20Inquiry"
                  onClick={handleEmailClick}
                  style={{ 
                    display: "inline-block",
                    padding: "1rem 2.5rem",
                    backgroundColor: "#3b82f6",
                    color: "white",
                    borderRadius: "8px",
                    fontWeight: "600",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 6px rgba(59, 130, 246, 0.25)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 12px rgba(59, 130, 246, 0.3)";
                    e.currentTarget.style.backgroundColor = "#2563eb";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 6px rgba(59, 130, 246, 0.25)";
                    e.currentTarget.style.backgroundColor = "#3b82f6";
                  }}
                >
                  Schedule Free Consultation
                </a>
                <p style={{
                  fontSize: "0.875rem",
                  color: "#64748b",
                  marginTop: "0.5rem",
                }}>
                  ✓ No commitment required &nbsp;&nbsp; ✓ Flexible scheduling &nbsp;&nbsp; ✓ Personalized learning plan
                </p>
              </div>
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

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
              backgroundColor: "#3b82f6",
              color: "white",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              border: "none",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              transition: "all 0.3s ease",
              opacity: "0.9",
              zIndex: 1000,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
              e.currentTarget.style.opacity = "1";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
              e.currentTarget.style.opacity = "0.9";
            }}
            aria-label="Scroll to top of page"
          >
            ↑
          </button>
        )}

        <style jsx global>{`
          @keyframes pulse {
            0% { opacity: 0.4; }
            50% { opacity: 1; }
            100% { opacity: 0.4; }
          }
        `}</style>
      </main>
    </>
  );
};

export default HomePage;
