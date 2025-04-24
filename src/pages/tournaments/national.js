import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const National = () => (
  <Layout>
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">National Championships</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              India’s premier lacrosse tournaments for clubs, colleges, and regional teams.
            </p>
          </div>
        </section>

        {/* Championships Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Our National Tournaments</h2>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Our national-level tournaments are open to clubs, colleges, and regional teams across India.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Tournament Features</h3>
            <div className="max-w-3xl mx-auto">
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                <li>Men's and Women's Divisions</li>
                <li>Junior & Youth Categories</li>
                <li>National Rankings</li>
                <li>MVP Awards & Highlights</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-indigo-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Compete in the National Championships</h3>
            <p className="text-lg mb-6 max-w-xl mx-auto">
              Join India’s top lacrosse tournaments. Contact us to learn how your team can participate!
            </p>
            <Link
              to="/contact/contact-us/"
              className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </Layout>
);

export default National;