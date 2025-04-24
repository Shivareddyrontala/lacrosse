import React, { useState } from 'react';
import { Link } from 'gatsby';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white sticky top-0 z-50 shadow-lg">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
        <span className="text-3xl">🥍</span>
        <span>Lacrosse India</span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Navigation */}
      <nav
        className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-indigo-700 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-8">
          {/* About Us */}
          <li className="relative group">
            <Link
              to="/about-us/our-story"
              className="hover:text-gray-200 py-2 block transition duration-200 transform hover:scale-105"
            >
              🧭 About Us
            </Link>
            <ul className="md:absolute md:hidden md:group-hover:block bg-indigo-600 md:shadow-lg md:rounded-lg mt-2 w-48">
              <li>
                <Link
                  to="/about-us/our-story"
                  className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-t-lg transition duration-200"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us/leadership"
                  className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-b-lg transition duration-200"
                >
                  Leadership
                </Link>
              </li>
            </ul>
          </li>

          {/* National Teams */}
          <li className="relative group">
            <Link
              to="/national-teams/mens-team"
              className="hover:text-gray-200 py-2 block transition duration-200 transform hover:scale-105"
            >
              🇮🇳 National Teams
            </Link>
            <ul className="md:absolute md:hidden md:group-hover:block bg-indigo-600 md:shadow-lg md:rounded-lg mt-2 w-48">
              <li>
                <Link
                  to="/national-teams/mens-team"
                  className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-t-lg transition duration-200"
                >
                  Men’s Team
                </Link>
              </li>
              <li>
                <Link
                  to="/national-teams/womens-team"
                  className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-b-lg transition duration-200"
                >
                  Women’s Team
                </Link>
              </li>
            </ul>
          </li>

          {/* Play Lacrosse */}
          <li className="relative group">
            <Link
              to="/play-lacrosse/get-started"
              className="hover:text-gray-200 py-2 block transition duration-200 transform hover:scale-105"
            >
              🥍 Play Lacrosse
            </Link>
            <ul className="md:absolute md:hidden md:group-hover:block bg-indigo-600 md:shadow-lg md:rounded-lg mt-2 w-48">
              <li>
                <Link
                  to="/play-lacrosse/get-started"
                  className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-t-lg transition duration-200"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  to="/play-lacrosse/find-team"
                  className="block px-4 py-2 hover:bg-indigo-500 hover:text-white transition duration-200"
                >
                  Find a Team
                </Link>
              </li>
              <li>
                <Link
                  to="/play-lacrosse/school-programs/"
                  className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-b-lg transition duration-200"
                >
                  Schools Program
                </Link>
              </li>
            </ul>
          </li>

          {/* Tournaments */}
          <li className="relative group">
            <Link
              to="/tournaments/international"
              className="hover:text-gray-200 py-2 block transition duration-200 transform hover:scale-105"
            >
              🏆 Tournaments
            </Link>
            <ul className="md:absolute md:hidden md:group-hover:block bg-indigo-600 md:shadow-lg md:rounded-lg mt-2 w-48">
              <li>
                <Link
                  to="/tournaments/international"
                  className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-t-lg transition duration-200"
                >
                  International
                </Link>
              </li>
              <li>
                <Link
                  to="/tournaments/national"
                  className="block px-4 py-2 hover:bg-indigo-500 hover:text-white transition duration-200"
                >
                  National
                </Link>
              </li>
              <li>
                <Link
                  to="/tournaments/calendar"
                  className="block px-4 py-2 hover:bg-indigo-500 hover:text-white transition duration-200"
                >
                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  to="/tournaments/galleries"
                  className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-b-lg transition duration-200"
                >
                  Galleries
                </Link>
              </li>
            </ul>
          </li>

          {/* Get Involved */}
          <li>
            <Link
              to="/get-involved/become-player"
              className="hover:text-gray-200 py-2 block transition duration-200 transform hover:scale-105"
            >
              💬 Get Involved
            </Link>
          </li>

          {/* Contact Us */}
          <li>
            <Link
              to="/contact/contact-us/"
              className="hover:text-gray-200 py-2 block transition duration-200 transform hover:scale-105"
            >
              📬 Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Header;