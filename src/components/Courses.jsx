// src/components/Courses.jsx
import React from 'react';
import CourseCard from './CourseCard';

function Courses() {
  const courses = [
    {
      title: 'Web Development',
      description: 'Learn how to create modern, responsive websites...',
      skills: 'Frontend development, Backend development...',
      duration: '6 months',
      imgSrc: 'src/assets/WebDev1.png'
    },
    {
      title: 'Data Science',
      description: 'Understand how to analyze and interpret data...',
      skills: 'Data analysis, Machine learning...',
      duration: '6 months',
      imgSrc: 'src/assets/DataSc.png'
    },
    {
      title: 'Cyber Security',
      description: 'Gain knowledge in protecting networks...',
      skills: 'Network security, Ethical hacking...',
      duration: '6 months',
      imgSrc: 'src/assets/CyberSec.png'
    }
  ];

  return (
    <div className="courses">
      <h2 className="title">Courses we offer</h2>
      <div className="divider-horizontal"></div>
      {courses.map(course => (
        <CourseCard key={course.title} {...course} />
      ))}
    </div>
  );
}

export default Courses;
