import React from "react";
import SubjectCard from "./SubjectCard";
import "./Subjects.css";

function Subject() {
  return (
    <div className="container">
      <h1>Subjects</h1>
      <div className="subjects-grid">
        <SubjectCard
          icon="📘"
          name="Mathematics"
          desc="Algebra, Geometry, Trigonometry"
          type="Core"
          topics={12}
        />
        <SubjectCard
          icon="🧪"
          name="Science"
          desc="Physics, Chemistry, Biology"
          type="Core"
          topics={15}
        />
        <SubjectCard
          icon="💻"
          name="Computer Science"
          desc="Programming, DBMS, OS"
          type="Core"
          topics={10}
        />
        <SubjectCard
          icon="📖"
          name="English"
          desc="Grammar, Literature, Comprehension"
          type="Elective"
          topics={8}
        />
        <SubjectCard
          icon="🗺️"
          name="Geography"
          desc="Maps, Earth structure, Resources"
          type="Elective"
          topics={9}
        />
      </div>
    </div>
  );
}

export default Subject;
