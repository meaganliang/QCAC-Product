import React from "react";
import skiSnowboard1 from '../assets/ss shredflex.png';

export default function Reviews2() {
  const reviews = [
    { name: "Mark McMorris", text: "Great board!", stars: 5 },
    { name: "Justine Dufour-Lapointe", text: "Great skis!", stars: 5 },
    { name: "Average Joe", text: "I’m just here for a good time", stars: 4 },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    padding: '20px',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundImage: `url(${skiSnowboard1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const cardStyle = {
    width: '300px',
    border: '3px solid black',
    padding: '20px',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: 'white',
    boxSizing: 'border-box',
    borderRadius: '12px',
  };

  const fromStyle = {
    fontSize: '14px',
    marginBottom: '5px',
  };

  const nameStyle = {
    fontSize: '20px',
    margin: '0 0 15px 0',
  };

  const starsStyle = {
    fontSize: '32px',
    color: '#f5a000',
    margin: '10px 0',
  };

  const textStyle = {
    marginTop: '15px',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      {reviews.map((review, index) => (
        <div key={index} style={cardStyle}>
          <p style={fromStyle}>Review From:</p>
          <h2 style={nameStyle}>{review.name}</h2>

          <div style={starsStyle}>
            {Array(review.stars).fill(0).map((_, i) => <span key={i}>★</span>)}
          </div>

          <p style={textStyle}>{review.text}</p>
        </div>
      ))}
    </div>
  );
}
