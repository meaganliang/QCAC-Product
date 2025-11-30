import React, { useState, useEffect } from "react";

export default function ReviewForm() {
  // Sample reviews
  const sampleReviews = [
    { name: "Mark McMorris", comment: "Great board!", rating: 5 },
    { name: "Justine Dufour-Lapointe", comment: "Great skis!", rating: 5 },
    { name: "Average Joe", comment: "I’m just here for a good time", rating: 4 },
  ];

  // State for reviews
  const [reviews, setReviews] = useState([]);

  // Form state
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  // Load saved reviews and sample on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews([...sampleReviews, ...saved]);
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      alert("Please enter your name and comment");
      return;
    }

    const newReview = { name, comment, rating };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);

    // Save user-submitted reviews only
    const userReviews = updatedReviews.filter(
      r => !sampleReviews.some(s => s.name === r.name && s.comment === r.comment)
    );
    localStorage.setItem("reviews", JSON.stringify(userReviews));

    // Clear form
    setName("");
    setComment("");
    setRating(5);
  };

  // Styles
  const containerStyle = {
    padding: '20px 20px',
    width: '100%',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#0a0a2a', 
    color: '#fff', 
    minHeight: '200px',
  };

  const inputStyle = { padding: '8px', fontSize: '16px', margin: '5px 0', width: '100%' };
  const textareaStyle = {
    padding: '8px',
    fontSize: '16px',
    margin: '5px 0',
    width: '100%',
    height: '80px',
    resize: 'none', 
  };
  const buttonStyle = { padding: '10px 20px', fontSize: '16px', marginTop: '10px', cursor: 'pointer' };
  const cardStyle = { border: '2px solid #fff', borderRadius: '8px', padding: '16px', margin: '10px 0', backgroundColor: '#1a1a40' };
  const starsStyle = { color: '#f5a000', fontSize: '20px', margin: '6px 0' };

  return (
    <div style={containerStyle}>
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />
        <textarea
          placeholder="Your review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          style={textareaStyle}
        />
        <label>
          Rating:
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))} style={{ marginLeft: '8px', padding: '4px' }}>
            {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
        <button type="submit" style={buttonStyle}>Submit Review</button>
      </form>

      <h3>Reviews</h3>
      {reviews.map((r, idx) => (
        <div key={idx} style={cardStyle}>
          <strong>{r.name}</strong> — <span style={starsStyle}>{'★'.repeat(r.rating)}</span>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
}
