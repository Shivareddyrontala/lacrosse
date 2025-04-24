import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const BecomePlayer = () => (
  <Layout>
  <div className="bg-gray-100 min-h-screen">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Join the Lacrosse India community and make a difference on and off the field.
        </p>
      </div>
    </section>

    {/* Become a Player Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Become a Player</h2>
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          <p className="mb-4">
            You don’t need a sports background to play lacrosse — just a desire to grow. We are looking for:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Passionate athletes</li>
            <li>Community leaders</li>
            <li>Youth with potential</li>
          </ul>
        </div>
      </div>
    </section>

    {/* How to Join Section */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">How to Join</h3>
        <div className="max-w-3xl mx-auto">
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Sign up for beginner clinics</li>
            <li>Try out for state or national teams</li>
            <li>Join development programs</li>
            <li>Volunteer in coaching or management roles</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Future Pathways Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Future Pathways</h3>
        <div className="max-w-3xl mx-auto">
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Play for India</li>
            <li>Coach grassroots players</li>
            <li>Represent your state or school</li>
            <li>Get certified as an official</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="bg-indigo-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Lacrosse Journey</h3>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Ready to get involved? Contact us to find out how you can join or contribute to Lacrosse India.
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

export default BecomePlayer;