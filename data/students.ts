
/*
 * File: data/students.ts
 * Author: Harderick Dhillon
 * Date: 2026-10-28
 * 
 * Defines the shared student model and initial records.
 * Exports Student interface and students array containing each student's
 *          id, name, grade (9-12), and average (0-100).
 */

// Describes the fields stored for each student.
export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    grade: number;
    average: number;
}

// Initial student records shown when the portal loads.
export const students: Student[] = [
    { id: 1, firstName: 'Alex', lastName: 'Smith', grade: 9, average: 20 },
    { id: 2, firstName: 'Karen', lastName: 'Arnold', grade: 9, average: 57 },
    { id: 3, firstName: 'Amy', lastName: 'Henderson', grade: 10, average: 20 },
    { id: 4, firstName: 'Madeleine', lastName: 'Cornish', grade: 11, average: 72 },
    { id: 5, firstName: 'Adam', lastName: 'Mackenzie', grade: 10, average: 11 },
    { id: 6, firstName: 'James', lastName: 'Morgan', grade: 12, average: 80 },
    { id: 7, firstName: 'Michael', lastName: 'Paterson', grade: 12, average: 97 },
    { id: 8, firstName: 'Robert', lastName: 'Walker', grade: 11, average: 89 },
];
