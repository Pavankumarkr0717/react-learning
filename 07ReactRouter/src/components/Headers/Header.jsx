import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/github', label: 'Github' },
];

const linkClass = ({ isActive }) =>
  `block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
    isActive
      ? 'bg-orange-50 text-orange-700'
      : 'text-gray-600 hover:bg-gray-50 hover:text-orange-700'
  }`;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-3 lg:px-6">
        <Link to="/" className="flex items-center">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            className="h-10"
            alt="Logo"
          />
        </Link>

        <div className="flex items-center gap-2 lg:order-2">
          <Link
            to="#"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:block"
          >
            Log in
          </Link>
          <Link
            to="#"
            className="rounded-lg bg-orange-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            Get started
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`${open ? 'block' : 'hidden'} w-full lg:order-1 lg:block lg:w-auto`}>
          <ul className="mt-4 flex flex-col gap-1 lg:mt-0 lg:flex-row lg:gap-2">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className={linkClass} onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header
