import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const International = () => (
  <Layout>
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">International Championships</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Showcasing India’s lacrosse talent on the global stage.
            </p>
          </div>
        </section>

        {/* Championships Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Our Global Competitions</h2>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                India proudly participates in international events, providing our athletes with global exposure and the opportunity to test their skills against top-tier talent.
              </p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Events We Compete In</h3>
            <div className="max-w-3xl mx-auto">
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                <li>Asian Lacrosse Games (ALG) in Samarkand, Uzbekistan from July 1st to 4th, 2024</li>
                <li>Lacrosse Okinawa Open in Okinawa, Japan from February 19th to 22nd, 2025</li>
              </ul>
            </div>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
              These competitions provide our athletes with global exposure and allow them to test their skills against top-tier talent.
              </p>
            </div>
          </div>
        </section>

              {/* Events Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">India will be participating in:</h3>
            <div className="max-w-3xl mx-auto">
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                <li>Asian Lacrosse Games in Riyadh, Saudi Arabia from October 1st - October 5th, 2025</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-indigo-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Support Our Athletes</h3>
            <p className="text-lg mb-6 max-w-xl mx-auto">
              Cheer for India’s lacrosse teams in international competitions. Connect with us to learn more about upcoming events!
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

export default International;