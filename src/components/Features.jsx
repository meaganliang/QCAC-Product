import React, { useState, useEffect } from "react";
import snowboard from '../assets/ss shredflex 2.png'; 

export default function Features() {
  const features = [
    { title: "HYBRID RIDE:", description: "Switch seamlessly between snowboard and skis.", offset: "0px" },
    { title: "Self-Balancing Gyroscopes:", description: "Stabilize landings and assist with tricks.", offset: "70px" },
    { title: "Performance Tracking:", description: "Companion app monitors jumps, spins, and turns.", offset: "0px" },
    { title: "Lightweight & Durable:", description: "Easy handling with high-strength materials.", offset: "70px" }
  ];

  // Track screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screenWidth on window resize and clean up listener on unmount
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine responsive styles
  const getPillStyle = (offset) => {
    let width = '70%';
    let flexDirection = 'row';
    let transform = `translateX(${offset})`;
    let textAlign = 'left';

    // Adjust styles for medium screens like a tablet
    if (screenWidth <= 900) {
      width = '90%';
    }
    // Adjust styles for small/mobile screens
    if (screenWidth <= 600) {
      width = '100%';
      flexDirection = 'column';
      transform = 'translateX(0)';
      textAlign = 'center';
    }

    return {
      background: '#cfe4ff',
      padding: '25px 40px',
      borderRadius: '999px',
      width,
      margin: '0 auto',
      display: 'flex',
      flexDirection,
      alignItems: 'center',
      gap: '20px',
      transition: 'transform 0.3s ease',
      transform,
      textAlign,
    };
  };

  // Static container styles for background image and layout
  const containerStyle = {
    padding: '20px 20px',
    width: '100%',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundImage: `url(${snowboard})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  // Style for the section title
  const titleStyle = {
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: '40px',
    textAlign: 'center',
    color: '#fff',
  };

  // Container for list of feature pills, stacked vertically with spacing
  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  };

  // Style for feature titles, responsive font sizes
  const leftStyle = {
    fontWeight: 700,
    whiteSpace: 'nowrap',
    fontSize: screenWidth <= 600 ? '20px' : screenWidth <= 900 ? '22px' : '26px',
  };

  // Style for feature descriptions, responsive font sizes
  const rightStyle = {
    fontWeight: 400,
    fontSize: screenWidth <= 600 ? '14px' : screenWidth <= 900 ? '16px' : '16px',
  };

  return (
    <section style={containerStyle}>
      <h2 style={titleStyle}>Features</h2>
      <div style={listStyle}>
        {features.map((f, idx) => (
          <div key={idx} style={getPillStyle(f.offset)}>
            <div style={leftStyle}>{f.title}</div>
            {f.description && <div style={rightStyle}>{f.description}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
