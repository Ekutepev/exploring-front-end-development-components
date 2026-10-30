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
    const [errors, setErrors] = useState<{ firstName?: string; lastName?: string; grade?: string; average?: string}>({});

    // Handlers
    const handleAdd = () => {
        const newErrors: typeof errors = {};
        // check if name is empty
        if (!firstName.trim()) newErrors.firstName = "First name is required";
        if (!lastName.trim()) newErrors.lastName = "Last name is required";
        // checks if grade is a Integer and that it is between 9 and 12
        const gradeNumber = Number(grade);
        if (grade === "" || !Number.isInteger(gradeNumber) || gradeNumber < 9 || gradeNumber > 12 ) {
            newErrors.grade = "Grade must be a whole number between 9 and 12";
        }
        // checks the average if its an Integer and that it is between 0 and 100
        const averageNumber = Number(average);
        if (average === "" || !Number.isInteger(averageNumber) || averageNumber < 0 || averageNumber > 100) {
            newErrors.average = "Average must be a whole number between 0 and 100";
        }
        // sets the error 
        setErrors(newErrors);
        // this will stop if there is an error when adding in a student
        if (Object.keys(newErrors).length > 0) return;

        // Send the new student up to StudentPortal
        onAdd(firstName.trim(), lastName.trim(), gradeNumber, averageNumber);

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
                {errors.firstName && <span className="text-sm text-red-600">{errors.firstName}</span>}
            </label>
            <label className="flex flex-col gap-1">
                Last Name:
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-sm" />
                {errors.lastName && <span className="text-sm text-red-600">{errors.lastName}</span>}
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
                {errors.grade && <span className="text-sm text-red-600">{errors.grade}</span>}
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
                {errors.average && <span className="text-sm text-red-600">{errors.average}</span>}
            </label>

            <button onClick={handleAdd}
                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 cursor-pointer transition mb-4">
                Add student
            </button>

        </div>
    )
};

export default AddStudent;