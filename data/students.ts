/*
 * File: data/students.ts
 * Author: Harderick Dhillon, updated by Isaac Jenkins
 * Date: 2026-10-29
 *
 * This file holds the starting data for the student portal and the Student
 * interface that every component uses to describe a student. It takes no
 * inputs; each student is written here with an id, first name, last name,
 * grade (9 to 12) and average (a mark out of 100). No processing happens in
 * this file, and the records are grouped by grade with an id that no other
 * student shares. It outputs the Student interface and the students array,
 * which StudentPortal copies into state when the page first loads.
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
    // Grade 9
    { id: 1, firstName: 'Alex', lastName: 'Smith', grade: 9, average: 20 },
    { id: 2, firstName: 'Karen', lastName: 'Arnold', grade: 9, average: 57 },
    { id: 9, firstName: 'Olivia', lastName: 'Bennett', grade: 9, average: 80 },
    { id: 10, firstName: 'Noah', lastName: 'Campbell', grade: 9, average: 84 },
    { id: 11, firstName: 'Chloe', lastName: 'Turner', grade: 9, average: 66 },
    { id: 12, firstName: 'Ethan', lastName: 'Parker', grade: 9, average: 73 },
    { id: 13, firstName: 'Grace', lastName: 'Mitchell', grade: 9, average: 78 },
    // Grade 10
    { id: 3, firstName: 'Amy', lastName: 'Henderson', grade: 10, average: 20 },
    { id: 5, firstName: 'Adam', lastName: 'Mackenzie', grade: 10, average: 11 },
    { id: 14, firstName: 'Liam', lastName: 'Robinson', grade: 10, average: 80 },
    { id: 15, firstName: 'Mia', lastName: 'Clark', grade: 10, average: 80 },
    { id: 16, firstName: 'Lucas', lastName: 'Lewis', grade: 10, average: 5 },
    { id: 17, firstName: 'Ava', lastName: 'Walker', grade: 10, average: 5 },
    { id: 18, firstName: 'Mason', lastName: 'Hall', grade: 10, average: 5 },
    // Grade 11
    { id: 4, firstName: 'Madeleine', lastName: 'Cornish', grade: 11, average: 72 },
    { id: 8, firstName: 'Robert', lastName: 'Walker', grade: 11, average: 89 },
    { id: 19, firstName: 'Isla', lastName: 'Young', grade: 11, average: 80 },
    { id: 20, firstName: 'Oliver', lastName: 'Allen', grade: 11, average: 82 },
    { id: 21, firstName: 'Ella', lastName: 'Wright', grade: 11, average: 30 },
    { id: 22, firstName: 'Leo', lastName: 'King', grade: 11, average: 30 },
    { id: 23, firstName: 'Sophie', lastName: 'Scott', grade: 11, average: 30 },
    // Grade 12
    { id: 6, firstName: 'James', lastName: 'Morgan', grade: 12, average: 80 },
    { id: 7, firstName: 'Michael', lastName: 'Paterson', grade: 12, average: 97 },
    { id: 24, firstName: 'Jack', lastName: 'Green', grade: 12, average: 80 },
    { id: 25, firstName: 'Amelia', lastName: 'Baker', grade: 12, average: 85 },
    { id: 26, firstName: 'Henry', lastName: 'Adams', grade: 12, average: 90 },
    { id: 27, firstName: 'Lily', lastName: 'Ahmed', grade: 12, average: 75 },
    { id: 28, firstName: 'William', lastName: 'Carter', grade: 12, average: 88 },
];
