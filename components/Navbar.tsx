/**
 * Across the top of every page. 
 * Shows the school’s name and three links: 
 * Overview, Students and Add a student. 
 * Each link jumps to that section of the page: 
 * give the section an id such as id="students", 
 * and link to it with href="#students". 
 */

const Navbar = () => {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-lg font-bold text-slate-900">
          <a href="#overview" className="hover:text-slate-700">
            New Generation High School
          </a>
        </h1>

        {/* Navigation Links */}
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <li>
              <a href="#overview" className="text-slate-700 hover:text-slate-900 px-4 py-2">
                Overview
              </a>
            </li>
            <li>
              <a href="#students" className="text-slate-700 hover:text-slate-900 px-4 py-2">
                Students
              </a>
            </li>
            <li>
              <a href="#add-student" className="text-slate-700 hover:text-slate-900 px-4 py-2">
                Add a student
              </a>
            </li>
            <li>
              <a href="#class-average" className="text-slate-700 hover:text-slate-900 px-4 py-2">
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