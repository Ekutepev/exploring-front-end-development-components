/**
 * FileName: Navbar.tsx
 * Name: Jedidiah Belayneh
 * Date: 2026/10/27
 *
 * This component creates the navigation header for the student portal.
 * It does not receive props or require state because its content is static.
 * It uses anchor links to connect the school name and navigation items to page sections.
 * Tailwind CSS controls the spacing, alignment, and responsive appearance of the links.
 * It outputs a header that allows users to navigate between sections without changing pages.
 */

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">

        {/* School Name */}
        <h1 className="text-lg font-bold text-slate-900">
          <a href="#overview" className="hover:text-slate-700">
            New Generation High School
          </a>
        </h1>

        {/* Navigation Links */}
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <li>
              <a href="#overview" className="inline-block py-2 text-slate-700 hover:text-slate-900">
                Overview
              </a>
            </li>
            <li>
              <a href="#students" className="inline-block py-2 text-slate-700 hover:text-slate-900">
                Students
              </a>
            </li>
            <li>
              <a href="#add-student" className="inline-block py-2 text-slate-700 hover:text-slate-900">
                Add a student
              </a>
            </li>
             <li>
              <a href="#class-average" className="inline-block py-2 text-slate-700 hover:text-slate-900">
                Class Average
              </a>
            </li>
          </ul>
        </nav>

        {/* Assignment Badge */}
        <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
          Assignment 1
        </span>
      </div>
    </header>
  )
};

export default Navbar;