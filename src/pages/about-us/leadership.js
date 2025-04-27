import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import ravi from "../../images/ravi.png"
import ahmad from "../../images/ahmad.png"
import bharat from "../../images/bharat.png"
import alam from "../../images/alam.png"

const Leadership = () => (
  <Layout>
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership & Board Members
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Meet the passionate pioneers driving Lacrosse India’s mission
            forward.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Our Leadership
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            Our leadership team consists of pioneers and passionate individuals
            who are not only administrators but also players, mentors, and
            advocates for sport-based development.
          </p>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Meet the Board
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Board Member 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-indigo-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={ravi}
                  alt="Ravi Kishan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                Ravi Kishan
              </h4>
              <p className="text-sm text-gray-500 mb-4">
                President, Lacrosse Association of India
              </p>
            </div>
            {/* Board Member 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-indigo-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={ahmad}
                  alt="Tausif Ahmad Lari"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                Tausif Ahmad Lari
              </h4>
              <p className="text-sm text-gray-500 mb-4">
                Chief Executive Officer, Lacrosse Association of India
              </p>
            </div>
            {/* Board Member 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-indigo-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={bharat}
                  alt="Saurabh Bharat Vetal"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                Saurabh Bharat Vetal
              </h4>
              <p className="text-sm text-gray-500 mb-4">
                Chief Operating Officer, Lacrosse Association of India
              </p>
            </div>
            {/* Board Member 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-indigo-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={alam}
                  alt="Nabeej Alam"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                Nabeej Alam
              </h4>
              <p className="text-sm text-gray-500 mb-4">
                Secretary-General, Lacrosse Association of India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Get Involved with Lacrosse India
          </h3>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Join our mission to grow lacrosse in India. Connect with our
            leadership team to learn how you can contribute.
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
)

export default Leadership
