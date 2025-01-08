import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava } from "react-icons/fa";

const Cards = () => {
  const cards = [
    { id: 1, icon: <FaReact />, title: "React.js", description: "A JavaScript library for building UI.", name: "Branded. Trustworthy. Well-Measured. Organized. Consistent. High Valued." },
    { id: 2, icon: <FaHtml5 />, title: "HTML5", description: "The standard markup language for web pages.", name: "Branded. Trustworthy. Well-Measured. Organized. Consistent. High Valued." },
    { id: 3, icon: <FaCss3Alt />, title: "CSS3", description: "Style your websites with modern CSS.", name: "Branded. Trustworthy. Well-Measured. Organized. Consistent. High Valued." },
    { id: 4, icon: <FaNodeJs />, title: "Node.js", description: "JavaScript runtime for server-side development.", name: "Branded. Trustworthy. Well-Measured. Organized. Consistent. High Valued." },
    { id: 5, icon: <FaPython />, title: "Python", description: "A versatile programming language for all purposes.", name: "Branded. Trustworthy. Well-Measured. Organized. Consistent. High Valued." },
    { id: 6, icon: <FaJava />, title: "Java", description: "A robust, object-oriented programming language.", name: "Branded. Trustworthy. Well-Measured. Organized. Consistent. High Valued." },
  ];

  return (
    <div className="grid grid-cols-3 gap-8 p-6 bg-gray-100 w-full h-[100vh]">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform"
        >
          <div className="p-4 bg-gray-200 rounded-full hover:bg-blue-500 transition-colors">
            <div className="text-black hover:text-white text-4xl">{card.icon}</div>
          </div>
          <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
          <p className="text-gray-500 text-center mt-2">{card.description}</p>
          <p className="text-gray-500 text-center mt-6">{card.name}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Cards;
