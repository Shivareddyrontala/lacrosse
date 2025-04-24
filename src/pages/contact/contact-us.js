import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const ContactUs = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Connect with Lacrosse India to join, support, or learn more about our mission.
            </p>
          </div>
        </section>

        {/* Contact Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Get in Touch</h2>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-center">
              <p className="mb-4">
                Whether you're interested in playing, coaching, volunteering, or partnering with us, we’d love to hear from you. Reach out to start your lacrosse journey!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Send Us a Message</h3>
            <div className="max-w-xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  Note: Form submission is disabled due to sandbox restrictions. Please use the contact details below to reach out.
                </p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your Name"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your Email"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your Message"
                      
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-indigo-700 transition"
                        onClick={() => alert('Form submission successfull.')}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Contact Details</h3>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-center">
              <p className="mb-4">
                Email: <a href="mailto:info@lacrosseindia.org" className="text-indigo-600 hover:underline">[info@lacrosseindia.org]</a>
              </p>
              <p className="mb-4">
                Phone: <a href="tel:+91-123-456-7890" className="text-indigo-600 hover:underline">[+91-123-456-7890]</a>
              </p>
              <p className="mb-4">
                Address: [Lacrosse India Headquarters, City, India]
              </p>
              <p className="text-sm text-gray-500">
                [Replace placeholders with actual Lacrosse India contact details]
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-indigo-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join the Lacrosse Movement</h3>
            <p className="text-lg mb-6 max-w-xl mx-auto">
              Have questions or ideas? Reach out to us and let’s grow lacrosse in India together!
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
};

export default ContactUs;