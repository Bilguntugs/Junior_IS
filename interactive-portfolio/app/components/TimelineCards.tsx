"use client";
import React, { useState } from 'react';
import '../cssFiles/timeline.css';

const experiences = [
  {
    date: 'May 2023 - August 2023',
    title: 'Sales Assistant',
    description: 'I helped customers with their purchases, managed inventory, and provided excellent customer service.',
  },
  {
    date: 'September 2022 - Present',
    title: 'Recording Crew',
    description: 'I record and edit the official school events/concerts and  uploads them to the schools YouTube channel and Archive.',
  },
  {
    date: 'May 2024 - August 2024',
    title: 'Internship',
    description: 'I worked in a social monitoring company, where I was responsible for creating a program that fetches data from their website and send it to ChatGPT to generate a report.',
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
