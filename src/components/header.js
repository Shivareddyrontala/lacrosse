import React, { useState } from 'react';
import { Link } from 'gatsby';
import LaiLogo from "../images/lai.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle submenu on mobile
  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  // Close all menus on link click
  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2" onClick={handleLinkClick}>
          <img src={LaiLogo} className="w-10 h-8" alt="Lacrosse India logo" />
          <span>Lacrosse India</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-indigo-700 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            {/* About Us */}
            <li className="relative group">
              <button
                onClick={() => toggleSubmenu('about')}
                className="hover:text-gray-200 py-2 flex items-center w-full text-left transition duration-200 transform hover:scale-105 md:cursor-pointer"
                aria-expanded={openSubmenu === 'about'}
              >
                🧭 About Us
                <svg className="w-4 h-4 ml-1 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={openSubmenu === 'about' ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} />
                </svg>
              </button>
              <ul
                className={`${
                  openSubmenu === 'about' || isOpen ? 'block' : 'hidden'
                } md:absolute md:group-hover:block bg-indigo-600 md:shadow-lg md:rounded-lg mt-2 w-full md:w-48 transition-all duration-200`}
              >
                <li>
                  <Link
                    to="/about-us/our-story"
                    className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-t-lg transition duration-200"
                    onClick={handleLinkClick}
                  >
                    Our Story / Mission & Vision
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us/leadership"
                    className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-b-lg transition duration-200"
                    onClick={handleLinkClick}
                  >
                    Leadership / Board Members
                  </Link>
                </li>
              </ul>
            </li>

            {/* National Teams */}
            <li className="relative group">
              <button
                onClick={() => toggleSubmenu('teams')}
                className="hover:text-gray-200 py-2 flex items-center w-full text-left transition duration-200 transform hover:scale-105 md:cursor-pointer"
                aria-expanded={openSubmenu === 'teams'}
              >
                National Teams
                <svg className="w-4 h-4 ml-1 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={openSubmenu === 'teams' ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} />
                </svg>
              </button>
              <ul
                className={`${
                  openSubmenu === 'teams' || isOpen ? 'block' : 'hidden'
                } md:absolute md:group-hover:block bg-indigo-600 md:shadow-lg md:rounded-lg mt-2 w-full md:w-48 transition-all duration-200`}
              >
                <li>
                  <Link
                    to="/national-teams/mens-team"
                    className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-t-lg transition duration-200"
                    onClick={handleLinkClick}
                  >
                    Men’s National Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/national-teams/womens-team"
                    className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-b-lg transition duration-200"
                    onClick={handleLinkClick}
                  >
                    Women’s National Team
                  </Link>
                </li>
              </ul>
            </li>

            {/* Play Lacrosse */}
            <li className="relative group">
              <button
                onClick={() => toggleSubmenu('play')}
                className="hover:text-gray-200 py-2 flex items-center w-full text-left transition duration-200 transform hover:scale-105 md:cursor-pointer"
                aria-expanded={openSubmenu === 'play'}
              >
                🥍 Play Lacrosse
                <svg className="w-4 h-4 ml-1 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={openSubmenu === 'play' ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} />
                </svg>
              </button>
              <ul
                className={`${
                  openSubmenu === 'play' || isOpen ? 'block' : 'hidden'
                } md:absolute md:group-hover:block bg-indigo-600 md:shadow-lg md:rounded-lg mt-2 w-full md:w-48 transition-all duration-200`}
              >
                <li>
                  <Link
                    to="/play-lacrosse/find-team"
                    className="block px-4 py-2 hover:bg-indigo-500 hover:text-white transition duration-200"
                    onClick={handleLinkClick}
                  >
                    State Associations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/play-lacrosse/school-programs/"
                    className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-b-lg transition duration-200"
                    onClick={handleLinkClick}
                  >
                    Schools & Universities Program
                  </Link>
                </li>
              </ul>
            </li>

            {/* Tournaments */}
            <li className="relative group">
              <button
                onClick={() => toggleSubmenu('tournaments')}
                className="hover:text-gray-200 py-2 flex items-center w-full text-left transition duration-200 transform hover:scale-105 md:cursor-pointer"
                aria-expanded={openSubmenu === 'tournaments'}
              >
                🏆 Tournaments & Events
                <svg className="w-4 h-4 ml-1 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={openSubmenu === 'tournaments' ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} />
                </svg>
              </button>
              <ul
                className={`${
                  openSubmenu === 'tournaments' || isOpen ? 'block' : 'hidden'
                } md:absolute md:group-hover:block bg-indigo-600 md:shadow-lg md:rounded-lg mt-2 w-full md:w-48 transition-all duration-200`}
              >
                <li>
                  <Link
                    to="/tournaments/international"
                    className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-t-lg transition duration-200"
                    onClick={handleLinkClick}
                  >
                    International Championships
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tournaments/national"
                    className="block px-4 py-2 hover:bg-indigo-500 hover:text-white transition duration-200"
                    onClick={handleLinkClick}
                  >
                    National Championships
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tournaments/galleries"
                    className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-b-lg transition duration-200"
                    onClick={handleLinkClick}
                  >
                    Galleries (Photos & Videos)
                  </Link>
                </li>
              </ul>
            </li>

            {/* Get Involved */}
            <li>
              <Link
                to="/get-involved/become-player"
                className="hover:text-gray-200 py-2 block transition duration-200 transform hover:scale-105"
                onClick={handleLinkClick}
              >
                💬 Get Involved
              </Link>
            </li>

            {/* Contact Us */}
            <li>
              <Link
                to="/contact/contact-us/"
                className="hover:text-gray-200 py-2 block transition duration-200 transform hover:scale-105"
                onClick={handleLinkClick}
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