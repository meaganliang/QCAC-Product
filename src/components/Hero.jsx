import React from 'react';
import skiSnowboard1 from '../assets/ss shredflex.png';
import skiSnowboard2 from '../assets/ss shredflex 3.png';
import skiSnowboard3 from '../assets/ss shredflex 4.png';
import mountain from '../assets/mountain.jpeg';

export default function Hero() {
  return (
    <>
      {/* Hero banner with background image and main title */}
      <section
        style={{
          width: '100%',
          padding: '60px 20px',
          textAlign: 'center',
          color: '#fff',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          backgroundImage: `url(${mountain})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}
      >
        <h1
          style={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '0.5em',
            textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          The SS ShredFlex
        </h1>
        <p
          style={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: '1.1rem',
            fontWeight: '500',
            letterSpacing: '1.2px',
            maxWidth: '600px',
            margin: '20px auto 0',
            textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
          }}
        >
          The ultimate mountain sport experience.
        </p>
      </section>
      
      {/* Image gallery section with flex layout */}
      <section
        style={{
          padding: '20px',
          width: '97vw',
          margin: '5px auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <img
          src={skiSnowboard1}
          alt="Ski Snowboard 1"
          style={{
            width: '100%',   
            maxWidth: '390px',  
            height: 'auto', 
            border: '10px solid #f8f8f8',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box',
            borderRadius: '8px',
          }}
        />

        <img
          src={skiSnowboard2}
          alt="Ski Snowboard 2"
          style={{
            width: '100%', 
            maxWidth: '390px',  
            height: 'auto', 
            border: '10px solid #f8f8f8',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box',
            borderRadius: '8px',
          }}
        />

        <img
          src={skiSnowboard3}
          alt="Ski Snowboard 3"
          style={{
            width: '100%',
            maxWidth: '390px',
            height: 'auto', 
            border: '10px solid #f8f8f8',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box',
            borderRadius: '8px',
          }}
        />
      </section>

       {/* Separate text section below images */}
      <section
        style={{
          maxWidth: '80%',
          margin: '5px auto',
          padding: '0 20px',
          fontSize: '1.3rem',
          color: '#333',
          lineHeight: '1.5',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          textAlign: 'center',
          marginBottom: '30px',
        }}
      >
        Meet the SS ShredFlex, the ultimate ride that transforms between skis and snowboard in seconds and the future of snow sports. Its smart Morphing Shape adjusts for carving, freestyle tricks, or powder runs, while built-in self-balancing gyroscopes stabilize every landing and boost your trick game. Track your jumps, spins, and turns with the companion app and push your performance to the next level. Lightweight, energy-efficient, and futuristic, it’s engineered for thrill-seekers of all skill levels. One board, endless possibilities, dominate the mountain like never before.
      </section>
    </>
   
  );
}
