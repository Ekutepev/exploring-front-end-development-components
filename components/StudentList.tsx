/*
* FileName: StudentList.tsx
* Name: Isaac Jenkins
* Date: 2026/10/27
* This component draws the list of students as a grid of cards.
* It takes in 2 props: students, the list to show, and onRemove, a callback that is coming from StudentPortal.
* It does not keep any state; it maps over the students it is given and passes onRemove down to each StudentCard.
* When there are no students to show, it shows a message instead of the grid.
* It outputs a grid that is one column on a phone and more columns on wider screens.
*/

import { Student } from "@/data/students";
import StudentCard from "./StudentCard";

// Props
interface StudentListProps {
    students: Student[];
    onRemove: (id: number) => void;
}

// Component
const StudentList = ({ students, onRemove }: StudentListProps) => {
    // Empty list: show a message instead of the grid
    if (students.length === 0) {
        return (
            <p className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center text-slate-600">
                No students to show.
            </p>
        );
    }

    // Render: one StudentCard per student
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {students.map((student) => (
                <StudentCard
                    key={student.id}
                    student={student}
                    onRemove={onRemove} />
            ))}
        </div>
    );
};

export default StudentList;
