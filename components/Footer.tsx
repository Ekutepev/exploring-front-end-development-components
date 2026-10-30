/**
 * FileName: Footer.tsx
 * Name: Jedidiah Belayneh
 * Date: 2026/10/27-29
 *
 * This component provides the contact information displayed at the bottom of the portal.
 * It does not receive any props or manage state because the information is static.
 * It organizes the school's name and contact details into a responsive two-column layout.
 * Tailwind CSS controls the spacing and places the copyright below the contact information.
 * It outputs a consistent footer with the school's address, phone number, email, and copyright.
 */

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">

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