/*
* FileName: StudentCard.tsx
* Name: Isaac Jenkins
* Date: 2026/10/27
* This component shows one student as a card with their full name and grade.
* It takes in 2 props: student, the Student to show, and onRemove, a callback that is coming from StudentPortal.
* It keeps one piece of state of its own, whether the details are open, so opening one card does not open any other.
* Show details reveals the student's average, plus an Honour roll badge when it is 80 or more, and Remove sends the student's id up through onRemove.
* It outputs a styled card with the student's info and two buttons.
*/

"use client";

import { useState } from "react";
import { Student } from "@/data/students";

// Props
interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

// Component
const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  // State: whether this card's details are showing
  const [showDetails, setShowDetails] = useState(false);

  // Derived value: honour roll is an average of 80 or more
  const isHonourRoll = student.average >= 80;

  // Render
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      {/* Name and grade */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 wrap-break-word">
          {student.firstName} {student.lastName}
        </h3>
        <p className="text-sm text-slate-600">Grade {student.grade}</p>
      </div>

      {/* Details: only shown once Show details is clicked */}
      {showDetails && (
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-slate-700">Average: {student.average}</p>
          {isHonourRoll && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Honour roll
            </span>
          )}
        </div>
      )} 

      {/* Buttons: toggle details, and ask StudentPortal to remove this student */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 cursor-pointer transition">
          {showDetails ? "Hide details" : "Show details"}
        </button>
        <button
          onClick={() => onRemove(student.id)}
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 cursor-pointer transition">
          Remove
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
