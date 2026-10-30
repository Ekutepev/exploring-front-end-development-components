/*
* FileName: StudentPortal.tsx
* Name: Evgeny Kutepov
* Date: 2026/10/26
* This component owns the data for the portal: the list of students and the search text, both kept in state.
* It takes no props, and the starting list comes from data/students.ts.
* On every render it works out the filtered list from the search text, and passes the full list down to StatsPanel and GradeAverageChart so their numbers stay up to date.
* Its handlers for Remove, Clear all and Add student always make a new array, and are passed down to the child components as callbacks.
* It outputs the four sections of the page: Overview, Students, Add a student and Class Average.
*/

"use client";

import { Student, students, } from "@/data/students";
import SearchBox from "./SearchBox";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";
import GradeAverageChart from "./GradeAverageChart";
import { useState } from "react";
import StatsPanel from "./StatsPanel";

// Component
const StudentPortal = () => {
    // State: the list of students and the search text
    const [studentList, setStudentList] = useState<Student[]>(students);
    const [searchText, setSearchText] = useState("");

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
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                    Overview
                </h2>
                <StatsPanel students={studentList} />
            </section>
            {/* Students section: search box, Clear all and the list */}
            <section id="students">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                    Students
                </h2>
                <SearchBox
                    value={searchText}
                    onChange={setSearchText} />
                <button onClick={handleClearAll}
                    className="block ml-auto rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 cursor-pointer transition mt-2 mb-2">
                    Clear all
                </button>
                <StudentList
                    students={filteredStudents}
                    onRemove={handleRemove} />
            </section>
            {/* Add a student section */}
            <section id="add-student">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">Add a student</h2>
                <AddStudent onAdd={handleAdd} />
            </section>
            {/* Class average section: uses the live list so it updates on add and remove */}
            <section id="class-average">
                <GradeAverageChart students={studentList} />
            </section>
        </div>
    );
};

export default StudentPortal;