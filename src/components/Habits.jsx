import React, { useState } from "react";
import Modal from "./Modal";

const Habits = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [habits, setHabits] = useState([]);
  const handleAddHabit = () => {
    if (habitName.trim()) {
      setHabits([...habits, habitName]);
      setHabitName("");
      setIsModalOpen(false);
    }
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Habits</h2>
      <button
        onClick={handleOpenModal}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Habit
      </button>
      <ul className="list-disc pl-5">
        {habits.map((habit, index) => (
          <li key={index} className="mb-2">
            {habit}
          </li>
        ))}
      </ul>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        habitName={habitName}
        setHabitName={setHabitName}
        onSave={handleAddHabit}
      />
    </div>
  );
};

export default Habits;

