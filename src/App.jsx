import React, { useState } from "react";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Reviews from "./components/Reviews.jsx";
import ReviewForm from "./components/ReviewForm.jsx";
import Reviews2 from "./components/Reviews2.jsx";

export default function App() {
  const [activeTab, setActiveTab] = useState("home"); // default: Home

  return (
    <div>
      {/* Heading buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("features")}>Features</button>
        <button onClick={() => setActiveTab("reviews")}>Reviews</button>
      </div>

      {/* Conditional rendering */}
      {activeTab === "home" && (
        <>
          <Hero />
          <Features />
          <Reviews />
          <ReviewForm />
        </>
      )}

      {activeTab === "features" && <Features />}

      {activeTab === "reviews" && (
        <>
          <Reviews2 />
          <ReviewForm />
        </>
      )}
    </div>
  );
}
