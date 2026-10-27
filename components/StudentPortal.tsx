/*
* FileName: StudentPortal.tsx
* Name: Evgeny Kutepov
* Date: 2026/10/26
* This component owns the data for the portal: the list of students and the search text, both kept in state.
* It takes no props, and the starting list comes from data/students.ts.
* On every render it works out the filtered list from the search text, plus the total, honour roll and grade 12 counts from the full list.
* Its handlers for Remove, Clear all and Add student always make a new array, and are passed down to the child components as callbacks.
* It outputs the three sections of the page: Overview, Students and Add a student.
*/

"use client";

import { Student, students, } from "@/data/students";
import SearchBox from "./SearchBox";
import AddStudent from "./AddStudent";
import { useState } from "react";

// Component
const StudentPortal = () => {
    // State: the list of students and the search text
    const [studentList, setStudentList] = useState<Student[]>(students);
    const [searchText, setSearchText] = useState("");

    // Derived values: worked out from the list on every render, not stored in state
    const total = studentList.length;
    const honourRoll = studentList.filter((student) => student.average >= 80).length;
    const graduating = studentList.filter((student) => student.grade === 12).length;
    // Students whose full name matches the search text (capitals do not matter)
    const filteredStudents = studentList.filter((student) => `${student.firstName} ${student.lastName}`
        .toLowerCase().includes(searchText.toLowerCase())
    );

    // Handlers: each one makes a new array instead of changing the old one
    // Remove: keep every student except the one with this id
    const handleRemove = (id: number) => {
        setStudentList(studentList.filter((student) => student.id !== id));
    };

    // Clear all: replace the list with an empty one
    const handleClearAll = () => {
        setStudentList([]);
    };

    // Add: build a new student and put it on the end of a copy of the list
    const handleAdd = (firstName: string, lastName: string, grade: number, average: number) => {
        // A unique id: one higher than the biggest id in the list
        const newId = Math.max(0, ...studentList.map((student) => student.id)) + 1;

        const newStudent: Student = {
            id: newId,
            firstName: firstName,
            lastName: lastName,
            grade: grade,
            average: average,
        };

        setStudentList([...studentList, newStudent]);
    };

    // Render
    return (
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8 w-full">
            {/* Overview section: the three numbers about the list */}
            <section id="overview">
                <h2>
                    Overview
                </h2>
                <p>Students: {total}</p>
                {/* honourRoll and graduating goes here when statePanel is done */}
            </section>
            {/* Students section: search box, Clear all and the list */}
            <section id="students">
                <h2>
                    Students
                </h2>
                <SearchBox
                    value={searchText}
                    onChange={setSearchText} />
                <button onClick={handleClearAll}
                    className=" rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 cursor-pointer transition">
                    Clear all
                </button>
                <ul className="flex flex-col gap-2 "> {/* this is temp as i need the StudentList to add here*/}
                    {filteredStudents.map((student) => (<li key={student.id} className="flex items-center justify-between">
                        {student.firstName} {student.lastName}
                        <button onClick={() => handleRemove(student.id)} className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 cursor-pointer transition">Remove</button>
                    </li>))}
                </ul>
            </section>
            {/* Add a student section */}
            <section id="add-student">
                <h2>Add a Student</h2>
                <AddStudent onAdd={handleAdd} />
            </section>
        </div>
    );
};

export default StudentPortal;