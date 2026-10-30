/*
 * FileName: page.tsx
 * Name: Jedidiah Belayneh
 * Date: 2026/10/29
 * This file is the home page and the only page of the student portal.
 * It takes no props, and app/layout.tsx wraps it with the Navbar above and the Footer below.
 * It does no processing of its own, because StudentPortal holds the student list and the search text in state.
 * Keeping this file small means the page can stay a server component while only StudentPortal runs on the client.
 * It outputs the StudentPortal component, which draws the Overview, Students, Add a student and Class Average sections.
 */

import StudentPortal from "@/components/StudentPortal";

// Component
const Home = () => {
  return <StudentPortal />;
};

export default Home;
