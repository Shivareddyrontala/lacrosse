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
            India’s premier lacrosse tournaments for Sub-Junior, Junior, and Senior athletes.
          </p>
        </div>
      </section>

      {/* Championships Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">National Championships Timeline</h2>
          <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            {/* Event 1 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800">1st Sub-Junior, Junior, and Senior National Lacrosse Championship (2023–2024)</h3>
              <p className="text-gray-600"><strong>Location:</strong> Agra, Uttar Pradesh</p>
              <p className="text-gray-600"><strong>Date:</strong> March 29 - 31, 2024</p>
              <p className="mt-2">The first-ever national lacrosse championship in India, featuring competitions across Sub-Junior, Junior, and Senior categories.</p>
            </div>

            {/* Event 2 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800">2nd Junior Lacrosse National Championship & 1st Lacrosse Federation Cup (2024)</h3>
              <p className="text-gray-600"><strong>Location:</strong> Agra, Uttar Pradesh</p>
              <p className="text-gray-600"><strong>Date:</strong> September 27 - 29, 2024</p>
              <p className="mt-2">Second Junior National Championship and the inaugural Federation Cup, with expanded participation and new competitive divisions.</p>
            </div>

            {/* Event 3 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800">2nd Sub-Junior and Senior Lacrosse National Championship (2024–2025)</h3>
              <p className="text-gray-600"><strong>Location:</strong> Udaipur, Rajasthan</p>
              <p className="text-gray-600"><strong>Date:</strong> February 7 - 9, 2025</p>
              <p className="mt-2">The second edition for Sub-Junior and Senior athletes, hosted for the first time outside Uttar Pradesh.</p>
            </div>

            {/* Event 4 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800">3rd Sub-Junior, Junior, and Senior National Lacrosse Championship (2025–2026)</h3>
              <p className="text-gray-600"><strong>Location:</strong> Agra, Uttar Pradesh</p>
              <p className="text-gray-600"><strong>Date:</strong> April 29 – May 1, 2025</p>
              <p className="mt-2">The third combined national championship event, with record-breaking participation across all categories.</p>
            </div>
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