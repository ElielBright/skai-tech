// src/components/CourseCard.jsx
import React, { useState } from 'react';

function CourseCard({ title, description, skills, duration, imgSrc }) {
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <div className="course_card" id='courses'>
      <div className="course_img">
        <img src={imgSrc} alt={title} height="300px" width="520px" />
      </div>
      <div className="course_description">
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <p className="skills">{skills}</p>
        <p className="duration">{duration}</p>
        <button onClick={() => setFormVisible(!isFormVisible)}>
          <i className="fas fa-user-plus"></i> Register for this Course
        </button>
        {isFormVisible && (
          <div className="centered-form">
            <h2>Register Now</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required /><br /><br />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required /><br /><br />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
