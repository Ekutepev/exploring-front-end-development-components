/*
 * File: components/GradeAverageChart.tsx
 * Author: Harderick Dhillon
 * Date: 2026-10-26
 *
 * Shows the class average for one grade at a time, measured against a pass
 * mark that the person types in. Input: the full list of students, passed in
 * as the `students` prop. Processing: the component keeps the selected grade
 * and the pass mark text in state, then works out the average, student count
 * and pass/fail status from them on every render. Output: a grade dropdown, a
 * pass mark text field, the class average, and a bar that is green at or
 * above the pass mark, yellow below it, and red when 25% or more below it.
 */

"use client";

import { useState } from "react";
import { Student } from "@/data/students";

interface GradeAverageChartProps {
  students: Student[];
}

const GRADES = [9, 10, 11, 12];
const DEFAULT_PASS_MARK = 50;


/*
 * classAverage
 * Works out the class average for one grade.
 * Takes the full student list and a grade (9 to 12), keeps only the students
 * in that grade, and returns the mean of their averages.
 * Returns null when the grade has no students, so the page can show
 * "No students" instead of dividing by zero and getting NaN.
 */
const classAverage = (students: Student[], grade: number): number | null => {
  const inGrade = students.filter((student) => student.grade === grade);
  if (inGrade.length === 0) return null;
  const total = inGrade.reduce((sum, student) => sum + student.average, 0);
  return total / inGrade.length;
};


/*
 * parsePassMark
 * Checks the text typed into the pass mark box.
 * Returns the number if it is a valid mark from 0 to 100 (decimals allowed).
 * Returns null if the box is empty, is not a number, or is out of range,
 * which tells the component to show an error and use the default instead.
 */
const parsePassMark = (text: string): number | null => {
  if (text.trim() === "") return null;
  const value = Number(text);
  if (!Number.isFinite(value) || value < 0 || value > 100) return null;
  return value;
};



/*
 * getStatus
 * Decides how a class average compares with the pass mark.
 * Returns the wording and the Tailwind colour classes to display:
 *   - at or above the pass mark         -> green
 *   - below it, down to half the mark   -> yellow
 *   - below half the pass mark          -> red
 * The words are returned along with the colours so the status is never
 * shown by colour alone.
 */
const getStatus = (average: number, passMark: number) => {
    if (average >= passMark) {
    return { label: "At or above the pass mark", bar: "bg-green-600", text: "text-green-700" };
  }
  if (average >= passMark * 0.50) {
    return { label: "Below the pass mark", bar: "bg-yellow-400", text: "text-yellow-700" };
  }
  return { label: "Well below the pass mark", bar: "bg-red-600", text: "text-red-700" };
};


const GradeAverageChart = ({ students }: GradeAverageChartProps) => {
  const [selectedGrade, setSelectedGrade] = useState<number>(9);
  const [passMarkText, setPassMarkText] = useState<string>(String(DEFAULT_PASS_MARK));
  const typedPassMark = parsePassMark(passMarkText);
  const passMark = typedPassMark ?? DEFAULT_PASS_MARK;
  const average = classAverage(students, selectedGrade);
  const count = students.filter((student) => student.grade === selectedGrade).length;
  const status = average === null ? null : getStatus(average, passMark);

  return (
    <div>
    
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-3xl font-semibold text-slate-900 pb-3"> Class Average</h2>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="sm:w-48">
          <label htmlFor="grade-select" className="block text-sm font-medium text-slate-700">
            Choose a grade
          </label>
          <select
            id="grade-select"
            value={selectedGrade}
            onChange={(event) => setSelectedGrade(Number(event.target.value))}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            {GRADES.map((grade) => (
              <option key={grade} value={grade}>
                Grade {grade}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:w-48">
          <label htmlFor="pass-mark" className="block text-sm font-medium text-slate-700">
            Pass mark (0 to 100)
          </label>
          <input
            id="pass-mark"
            type="text"
            inputMode="decimal"
            value={passMarkText}
            onChange={(event) => setPassMarkText(event.target.value)}
            aria-invalid={typedPassMark === null}
            className={`mt-1 w-full rounded-md border bg-white px-3 py-2 text-slate-900 focus:outline-none focus-visible:ring-2 ${
              typedPassMark === null
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-slate-300 focus-visible:ring-indigo-500"
            }`}
          />
        </div>
      </div>

      {typedPassMark === null && (
        <p className="mt-2 text-sm text-red-700">
          Enter a number from 0 to 100. Using {DEFAULT_PASS_MARK} until then.
        </p>
      )}

      <div className="mt-6" aria-live="polite">
        <h3 className="text-lg font-semibold text-slate-900">
          Grade {selectedGrade} class average
        </h3>
        {average === null || status === null ? (
          <p className="mt-1 text-slate-600">No students in grade {selectedGrade}.</p>
        ) : (
          <>
            <p className="mt-1 text-slate-600">
              <span className={`text-3xl font-bold ${status.text}`}>
                {average.toFixed(1)}%
              </span>{" "}
              across {count} {count === 1 ? "student" : "students"}
            </p>
            <p className={`mt-1 text-sm font-medium ${status.text}`}>{status.label}</p>
          </>
        )}
      </div>

      <div className="mt-4">
        <div className="relative">
          <div className="h-6 w-full overflow-hidden rounded bg-slate-100">
            <div
              className={`h-full rounded transition-all duration-300 ${
                status === null ? "bg-slate-300" : status.bar
              }`}
              style={{ width: `${average ?? 0}%` }}
            />
          </div>
          <div
            className="absolute -bottom-1 -top-1 w-0.5 bg-slate-900"
            style={{ left: `${passMark}%` }}
          />
        </div>

        <div className="relative mt-2 h-4 text-xs text-slate-500">
          <span className="absolute left-0">0</span>
          <span
            className="absolute -translate-x-1/2 font-medium text-slate-900"
            style={{ left: `${passMark}%` }}
          >
            Pass mark {passMark}
          </span>
          <span className="absolute right-0">100</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GradeAverageChart;