import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import Maps from '../../images/map.png';

const FindTeam = () => (
  <Layout>
  <div className="bg-gray-100 min-h-screen">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find a Team</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
        We are building a network of lacrosse states across India.
        </p>
      </div>
    </section>

    {/* Current Locations Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Current Locations</h2>
        <div className="max-w-3xl mx-auto">
        <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Andhra Pradesh</li>
            <li>Assam</li>
            <li>Bihar</li>
            <li>Chhattisgarh</li>
            <li>Delhi</li>
            <li>Goa</li>
            <li>Gujarat</li>
            <li>Haryana</li>
            <li>Jharkhand</li>
            <li>Karnataka</li>
            <li>Kerala</li>
            <li>Maharashtra</li>
            <li>Odisha</li>
            <li>Punjab</li>
            <li>Puducherry</li>
            <li>Rajasthan</li>
            <li>Tamil Nadu</li>
            <li>Telangana</li>
            <li>Uttar Pradesh</li>
            <li>West Bengal</li>
        </ul>
        </div>
      </div>
    </section>
    <section>
      <div className="container mx-auto px-4">
      <img src={Maps} alt="Men’s National Team" className="mt-4 mx-auto max-w-full h-auto" />
      </div>
    </section>
    {/* Start a Team Section */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Can’t Find a Team Near You?</h3>
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-center">
          <p className="mb-2">
          Can’t find a team near you? Start one! We’ll support you with starter kits, coaching guides and ongoing mentorship.
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