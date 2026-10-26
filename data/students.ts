
// id, first name, last name, grade (9-12), average (0-100)
export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    grade: number;
    average: number;
}

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
