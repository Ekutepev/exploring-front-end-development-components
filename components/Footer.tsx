//At the bottom of every page. 
//Shows the school’s name, address, phone number and email. 
const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-6">

        {/* School Information and Contact */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* School Name */}
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              New Generation High School
            </h2>
          </div>

          {/* Contact Information */}
          <div className="text-sm text-slate-600 md:text-right">
            <h3 className="mb-2 font-semibold text-slate-900">
              Contact Information
            </h3>

            <p>123 Main Street, Anytown, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@newgenerationhighschool.com</p>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-4 border-t border-slate-200 pt-4 text-center">
          <p className="text-xs text-slate-500">
            &copy; 2026 New Generation High School.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;