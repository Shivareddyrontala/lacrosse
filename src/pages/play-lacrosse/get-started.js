import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const GetStarted = () => (
  <Layout>
  <div className="bg-gray-100 min-h-screen">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Play Lacrosse</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Discover the excitement of lacrosse and start your journey today!
        </p>
      </div>
    </section>

    {/* How to Get Started Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">How to Get Started</h2>
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          <p className="mb-4">
            Never held a lacrosse stick before? No worries. Lacrosse is for everyone — all you need is curiosity and energy. Whether you're 10 or 30, now is the best time to start.
          </p>
        </div>
      </div>
    </section>

    {/* Steps to Get Started Section */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Steps to Get Started</h3>
        <div className="max-w-3xl mx-auto">
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Attend a local workshop or intro session</li>
            <li>Watch our beginner guides (videos/resources)</li>
            <li>Join a club or sign up for tryouts</li>
            <li>Receive gear recommendations and basic coaching</li>
            <li>Start practicing and building your skills!</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="bg-indigo-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Play Lacrosse?</h3>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Take the first step to join the lacrosse community. Connect with us to find workshops, clubs, and more!
        </p>
        <Link
          to="/contact/contact-us/"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  </div>
</Layout>
);

export default GetStarted;