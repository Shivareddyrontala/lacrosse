import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="bg-indigo-900 text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-semibold mb-4">Lacrosse India</h3>
        <p className="text-gray-400">
          Building a lacrosse movement in India, from grassroots to global stages.
        </p>
      </div>

      {/* Quick Links */}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/about-us/our-story" className="text-gray-400 hover:text-indigo-300 transition duration-200">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/national-teams/mens-team" className="text-gray-400 hover:text-indigo-300 transition duration-200">
              National Teams
            </Link>
          </li>
          <li>
            <Link to="/play-lacrosse/get-started" className="text-gray-400 hover:text-indigo-300 transition duration-200">
              Play Lacrosse
            </Link>
          </li>
          <li>
            <Link to="/tournaments/international" className="text-gray-400 hover:text-indigo-300 transition duration-200">
              Tournaments & Events
            </Link>
          </li>
          <li>
            <Link to="/contact/contact-us" className="text-gray-400 hover:text-indigo-300 transition duration-200">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Connect With Us */}
      <div className="text-center md:text-right">
        <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
        <div className="flex justify-center md:justify-end space-x-4 mb-4">
          <a
            href="[Replace with actual Twitter link]"
            className="transform hover:scale-110 transition duration-200"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/lacrosse_association_of_india/"
            className="transform hover:scale-110 transition duration-200"
            aria-label="Instagram"
            target='_blank'
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/lacrosseindia/"
            className="transform hover:scale-110 transition duration-200"
            aria-label="Facebook"
            target='_blank'
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
        <p className="text-gray-400">
          Contact: <a href="info.lacrossindia@gmail.com" className="hover:text-indigo-300">[info.lacrossindia@gmail.com , contact@lacrosseindia.com]</a>
        </p>
        <p className="text-gray-400">
          Address: <a className="hover:text-indigo-300">[Sports Point, Ghosh Company Chowk, Main Bazaar, Gorakhpur, U.P., India]</a>
        </p>
        <p className="text-gray-400 mt-2">© 2025 Lacrosse India. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
);

export default Footer;