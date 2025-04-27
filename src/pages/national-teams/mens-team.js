import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import Mens from '../../images/image3.png';

const MensTeam = () => (
  <Layout>
  <div className="bg-gray-100 min-h-screen">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Men’s National Team</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          India’s finest lacrosse athletes competing on the global stage.
        </p>
      </div>
    </section>

    {/* Team Overview Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Our Team</h2>
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          <p className="mb-4">
            India’s Men’s Lacrosse Team is composed of talented, high-performing athletes from across the country. With our debut at the international level in [2025], we’ve shown that India has what it takes to compete at the highest level.
          </p>
          <img src={Mens} alt="Men’s National Team" className="mt-4 mx-auto max-w-full h-auto" />
        </div>
      </div>
    </section>

    {/* Achievements Section */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Achievements</h3>
        <div className="max-w-3xl mx-auto">
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>First appearance at Lacrosse Okinawa Open in Okinawa, Japan from February 19th to 22nd, 2025</li>
            <li>Ranked 7th in Asia Pacific</li>
            <li>Multiple international goals scored in the tournament</li>
          </ul>
        </div>
      </div>
    </section>

    {/* How to Join Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">How to Join</h3>
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          <p className="mb-4">
            Interested in joining the national squad? Learn about:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Selection trials</li>
            <li>Training camps</li>
            <li>Performance benchmarks</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Testimonial Section */}
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <blockquote className="text-lg md:text-xl text-gray-600 italic max-w-2xl mx-auto">
          “Representing India in lacrosse was more than a dream — it was a responsibility and a moment of pride.”
        </blockquote>
        <p className="text-gray-500 mt-4">– Team India Player</p>
      </div>
    </section>

    {/* Call to Action */}
    <section className="bg-indigo-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Join the National Team</h3>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Ready to represent India? Get in touch to learn about trials and training opportunities.
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

export default MensTeam;