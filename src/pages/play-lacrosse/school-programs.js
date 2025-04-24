import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const SchoolsProgram = () => (
  <Layout>
  <div className="bg-gray-100 min-h-screen">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Schools & Universities Program</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Bringing lacrosse to schools and colleges across India.
        </p>
      </div>
    </section>

    {/* Program Overview Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Our Program</h2>
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          <p className="mb-4">
            We are partnering with schools and colleges to integrate lacrosse into physical education and sports programming.
          </p>
        </div>
      </div>
    </section>

    {/* For Schools Section */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">For Schools</h3>
        <div className="max-w-3xl mx-auto">
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Equipment grants</li>
            <li>Basic coaching curriculum</li>
            <li>One-day demo workshops</li>
          </ul>
        </div>
      </div>
    </section>

    {/* For Universities Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">For Universities</h3>
        <div className="max-w-3xl mx-auto">
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Competitive inter-college leagues</li>
            <li>Recognition & scholarships (coming soon)</li>
            <li>University Nationals</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="bg-indigo-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Bring Lacrosse to Your Campus</h3>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Interested in bringing lacrosse to your school or university? Contact us for a starter kit.
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

export default SchoolsProgram;