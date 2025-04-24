"use client";
import React, { useState } from 'react';
import '../cssFiles/timeline.css';

const experiences = [
  {
    date: 'Jan 2023',
    title: 'Frontend Developer',
    description: 'Worked on UI improvements for client dashboards.',
  },
  {
    date: 'Aug 2022',
    title: 'Software Intern',
    description: 'Built internal tools with Node.js and helped automate tasks.',
  },
  {
    date: 'May 2021',
    title: 'Freelancer',
    description: 'Developed personal projects and learned modern web technologies.',
  },
];

export default function TimelineCards() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="timeline">
      {experiences.map((item, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-date-wrapper">
            <span
              className="timeline-date"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {item.date}
            </span>
            <button
              className="toggle-button"
              onClick={() => toggleItem(index)}
            >
              ▼
            </button>
          </div>
          <div
            className={`timeline-content ${(hoverIndex === index && activeIndex === null) ? 'hovered' : ''} ${activeIndex === index ? 'active' : ''}`}
          >
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
