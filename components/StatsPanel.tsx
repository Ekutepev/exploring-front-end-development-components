/**
 * FileName: StatsPanel.tsx
 * Name: Jedidiah Belayneh
 * Date: 2026/10/27-29
 *
 * This component displays statistics calculated from the student list.
 * It receives an array of Student objects through the students prop.
 * It processes the array to calculate total enrollment, honour roll students, and grade 12 students.
 * These values are recalculated whenever the parent passes an updated student list.
 * It outputs three responsive statistic cards without maintaining separate state.
 */


import type { Student } from "@/data/students";

interface StatsPanelProps {
  students: Student[];
}

const StatsPanel = ({ students }: StatsPanelProps) => {

  // Calculate statistics from the full student list
  const totalStudents = students.length;

  const honourRoll = students.filter(
    (student) => student.average >= 80
  ).length;

  const graduating = students.filter(
    (student) => student.grade === 12
  ).length;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

      {/* Total Students */}
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium text-slate-600">
          Students
        </h3>

        <p className="mt-2 text-3xl font-bold text-blue-700">
          {totalStudents}
        </p>
      </div>

      {/* Honour Roll Students */}
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium text-slate-600">
          Honour Roll
        </h3>

        <p className="mt-2 text-3xl font-bold text-green-700">
          {honourRoll}
        </p>
      </div>

      {/* Grade 12 Students */}
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium text-slate-600">
          Graduating
        </h3>

        <p className="mt-2 text-3xl font-bold text-purple-700">
          {graduating}
        </p>
      </div>

    </div>
  );
};

export default StatsPanel;