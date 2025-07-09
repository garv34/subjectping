import React from "react";
import "./Subjects.css";

const SubjectCard = ({ icon, name, desc, type, topics }) => {
  return (
    <div className="subject-card">
      <div className="icon">{icon}</div>
      <h2>{name}</h2>
      <p className="desc">{desc}</p>
      <div className="meta">
        <span className="badge">{type}</span>
        <span className="topics">{topics} Topics</span>
      </div>
      <button className="learn-btn" onClick={() => alert(`Start learning ${name}`)}>
        ▶️ Start Learning
      </button>
    </div>
  );
};

export default SubjectCard;
