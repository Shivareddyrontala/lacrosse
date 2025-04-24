import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const OurStory = () => (
  <Layout>
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Lacrosse India</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Building a lacrosse movement in India, from grassroots to global stages.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Our Story</h2>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Lacrosse India is the official governing body for lacrosse in India, founded with the vision to bring one of the world’s fastest-growing sports to a nation known for its love of athleticism and teamwork. What started as a dream has now become a movement — led by passionate players, coaches, and volunteers who believe that lacrosse can be the next big sport in India.
              </p>
              <p>
                We are proud to represent India on the global stage and are committed to developing the sport from the grassroots level. From hosting local workshops to competing internationally, Lacrosse India is laying the foundation for a thriving lacrosse ecosystem in the country.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Mission & Vision</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Our Mission</h4>
                <ul className="text-gray-600 list-disc list-inside space-y-2">
                  <li>Building inclusive and accessible programs for youth and adults</li>
                  <li>Supporting and training coaches and referees</li>
                  <li>Hosting tournaments, leagues, and championships</li>
                  <li>Representing India in international lacrosse events</li>
                </ul>
              </div>
              {/* Vision */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Our Vision</h4>
                <p className="text-gray-600">
                  To see India become a global lacrosse powerhouse by 2030, with strong grassroots participation, elite national teams, and a vibrant, supportive lacrosse community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-indigo-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join the Lacrosse Movement</h3>
            <p className="text-lg mb-6 max-w-xl mx-auto">
              Be a part of India’s lacrosse journey. Whether you're a player, coach, or supporter, there’s a place for you in our community.
            </p>
            <Link
              to="/contact/contact-us/"
              className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition"
            >
              Get Involved
            </Link>
          </div>
        </section>
      </div>
    </Layout>
);

export default OurStory;