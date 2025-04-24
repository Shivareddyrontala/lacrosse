import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const WomensTeam = () => (
  <Layout>
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Women’s National Team</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Empowering women athletes to lead and excel in lacrosse.
            </p>
          </div>
        </section>

        {/* Team Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Our Team</h2>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Lacrosse India is committed to empowering women athletes. Our Women’s National Team is an emerging force, offering female players a platform to excel, compete, and lead.
              </p>
            </div>
          </div>
        </section>

        {/* Support for Women’s Sports Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Support for Women’s Sports</h3>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                We actively run programs to encourage young girls and women to participate in lacrosse from school-level competitions to national selections.
              </p>
            </div>
          </div>
        </section>

        {/* Tryouts & Training Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Tryouts & Training</h3>
            <div className="max-w-3xl mx-auto">
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                <li>National selection process</li>
                <li>Mentorship & coaching from experienced athletes</li>
                <li>International exposure and support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-indigo-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join the Women’s National Team</h3>
            <p className="text-lg mb-6 max-w-xl mx-auto">
              Ready to compete and lead with India’s Women’s Lacrosse Team? Connect with us to learn about tryouts and training.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </Layout>
);

export default WomensTeam;