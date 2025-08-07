import React from "react";
import { useState } from "react";

const ExapnadableFAQ = () => {
  // Placeholder for FAQ content
  // This component will be expanded later with FAQ functionality
  const faqContent = [
    {
      question: "Question 1",
      answer: "Answer 1",
    },
    {
      question: "Question 2",
      answer: "Answer 2",
    },
    {
      question: "Question 3",
      answer: "Answer 3",
    },
  ];

  // Render the FAQ content
  const [expanded, setExpanded] = useState(null);
  const toggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  // Placeholder for rendering FAQ content

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-4xl text-white mb-6">Expandable FAQ</h1>
      <div>
        {faqContent.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggle(index)}
              className="text-lg text-white bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition-colors"
            >
              {item.question}
            </button>
            {expanded === index && (
              <p className="mt-2 text-gray-300">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExapnadableFAQ;
