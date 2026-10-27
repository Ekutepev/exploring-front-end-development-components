/*
* FileName: AddStudent.tsx
* Name: Evgeny Kutepov
* Date: 2026/10/26
* This component lets the user add a new student to the list.
* It takes in 1 prop, onAdd, which is a callback that is coming from StudentPortal.
* It keeps the first name, last name, grade and average in its own state, and each input is controlled by that state.
* When Add student is clicked, it does nothing if either name is empty, otherwise it sends the student up through onAdd and resets the inputs.
* It outputs four labelled inputs and an Add student button.
*/

"use client"

import { useState } from "react"

// Props
interface AddStudentProps {
    onAdd: (firstName: string, lastName: string, grade: number, average: number) => void;
}

// Component
const AddStudent = ({ onAdd }: AddStudentProps) => {
    // State: one value per input, starting at the values from the spec
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [grade, setGrade] = useState("9");
    const [average, setAverage] = useState("70");

    // Handlers
    const handleAdd = () => {
        // Do nothing if either name is empty
        if (!firstName.trim() || !lastName.trim()) {
            return;
        }

        if (grade === "" || average === "") {
            return;
        }

        // Send the new student up to StudentPortal
        onAdd(firstName.trim(), lastName.trim(), Number(grade), Number(average));

        // Reset the inputs back to their starting values
        setFirstName("");
        setLastName("");
        setGrade("9");
        setAverage("70");
    };

    // Render
    return (
        <div className="flex flex-col gap-3">
            <label className="flex flex-col gap-1">
                First Name:
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-sm"
                />
            </label>
            <label className="flex flex-col gap-1">
                Last Name:
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-sm" />
            </label>
            <label className="flex flex-col gap-1">
                Grade:
                <input
                    value={grade}
                    min={9}
                    max={12}
                    onChange={(e) => setGrade(e.target.value)}
                    type="number"
                    placeholder="must be between 9 - 12"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-sm" />
            </label>
            <label className="flex flex-col gap-1">
                Average:
                <input
                    value={average}
                    min={0}
                    max={100}
                    onChange={(e) => setAverage(e.target.value)}
                    type="number"
                    placeholder="Must be between 0 - 100"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-sm" />
            </label>

            <button onClick={handleAdd}
                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 cursor-pointer transition mb-4">
                Add student
            </button>

        </div>
    )
};

export default AddStudent;