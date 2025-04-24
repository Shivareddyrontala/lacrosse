import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const FindTeam = () => (
  <Layout>
  <div className="bg-gray-100 min-h-screen">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find a Team</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Join a lacrosse club near you and be part of India’s growing lacrosse community.
        </p>
      </div>
    </section>

    {/* Current Locations Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Current Locations</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Bengaluru</li>
            <li>Pune</li>
            <li>Chennai (coming soon!)</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Start a Team Section */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Can’t Find a Team Near You?</h3>
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-center">
          <p className="mb-4">
            Start one! We’ll support you with starter kits, coaching guides, and ongoing mentorship.
          </p>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="bg-indigo-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Join or Start a Lacrosse Team</h3>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Connect with us to find a team or get support to start your own lacrosse club.
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

export default FindTeam;