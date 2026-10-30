# New Generation High School – Student Portal

CPRG 306 Assignment 1: Exploring Front-End Development Components

A single-page Next.js app for the school administrator. It lists every student, filters the list by name, shows three numbers about the school, adds and removes students, and shows the class average for each grade.

**Deployed site:** https://exploring-front-end-development-com-one.vercel.app/

**GitHub repository:** https://github.com/Ekutepev/exploring-front-end-development-components

## Group members

| Member | Name | GitHub | Built |
|---|---|---|---|
| A | Jedidiah Belayneh | jedid | `app/layout.tsx`, `Navbar`, `Footer`, `StatsPanel`, and the overall look of the page |
| B | Isaac Jenkins | JenkIke | `StudentList`, `StudentCard`, and updates to `data/students.ts`. Also connected the class average chart to the live student list |
| C | Evgeny Kutepov | Ekutepev | `StudentPortal` (state, Remove, Clear all and the search filter), `SearchBox`, `AddStudent`, Deployed Vercel |
| Extra | Harderick Dhillon | dep-dep | `data/students.ts` (`Student` interface and starting data), `GradeAverageChart` (class average by grade against a Pass mark) |

Our group has four members, so we added one feature beyond the assignment: the **Class Average** section. You choose a grade and type a Pass mark, and it shows that grade's average as a bar that is green, yellow or red. It updates when students are added or removed.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Test checklist

The starting data has **28 students**, **13 on the honour roll** (average of 80 or more) and **7 in grade 12**.

| # | Do this | You should see | Result |
|---|---|---|---|
| 1 | Open the app. | Every student from the data file shows, and the numbers read Students 28, Honour Roll 13, Graduating 7. | Pass |
| 2 | Click **Show details** on one card, then click it again. | That card shows the average (and Honour roll if it is 80 or more) and the button reads Hide details. No other card opens. The second click closes it. | Pass |
| 3 | Remove a grade 12 student. | The student is gone, and Students drops to 27 and Graduating to 6. | Pass |
| 4 | Type **AHMED** into the search box. Then empty the box. | Only Zara Ahmed shows. When the box is empty, every student is back. | Pass |
| 5 | Search for **zzz**. | The no-students message shows. The three numbers do not change. | Pass |
| 6 | Leave the first name empty, fill in the last name, and click **Add student**. | Nothing is added. | Pass |
| 7 | Fill in all four inputs and click **Add student**. | The student appears, the numbers update, both name inputs are empty, grade shows 9 and average shows 70. | Pass |
| 8 | Click **Clear all**. | The no-students message shows, and all three numbers are 0. | Pass |
| 9 | Narrow the browser to phone width (DevTools device toolbar). | The cards stack in one column, and nothing scrolls sideways. | Pass |
| 10 | Click each link in the navbar. | The page jumps to that section. | Pass |
