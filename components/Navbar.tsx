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
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center
                      justify-between">
        <h1 className="text-lg font-bold text-slate-900">
          <a href="" className="hover:text-slate-700">
            New Generation High School
          </a>
        </h1>

        <nav>
          <ul className="flex items-center gap-4 text-sm font-medium">
            <li>
              <a href="#overview" className="text-slate-700 hover:text-slate-900 p-7">
                Overview
              </a>
            </li>
            <li>
              <a href="#students" className="text-slate-700 hover:text-slate-900 p-7">
                Students
              </a>
            </li>
            <li>
              <a href="#add-student" className="text-slate-700 hover:text-slate-900 p-7">
                Add a Student
              </a>
            </li>
          </ul>
        </nav>

        <span className="text-xs font-semibold text-blue-700 bg-blue-100
                         px-3 py-1 rounded-full">
          Assignment 1
        </span>
      </div>
    </header>
  )
};

export default Navbar;