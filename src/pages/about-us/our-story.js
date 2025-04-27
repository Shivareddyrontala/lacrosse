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
                Lacrosse was first introduced in India in 2008, led by Bijay Mipun, who is widely recognized as the pioneer and “father” of Indian lacrosse. What began as a modest effort to introduce a new sport soon grew into a national movement.
              </p>
              <p className="mb-4">
                Under the leadership of Tausif Ahmad Lari, the game expanded across the country, resulting in the establishment of 25 state lacrosse associations. A landmark achievement came in 2024 with the inaugural National Lacrosse Championship held in Agra, featuring 480 athletes from 22 states competing across six divisions over three days.
              </p>
              <p>
                In less than a year after the first national championship, India proudly fielded both Men’s and Women’s National Teams at international tournaments, marking the nation’s official entry onto the global lacrosse stage.
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
                  <li>Grassroots Development: Introduce lacrosse in schools, colleges, and local communities to establish a strong foundation for the sport across India.</li>
                  <li>Cross-Sport Transition: Provide opportunities and structured support to athletes from other sports who wish to transition to lacrosse.</li>
                  <li>Training and Education: Offer training programs and educational resources to players, coaches, and officials to elevate the overall skill level.</li>
                  <li>State-Level Readiness: Prepare athletes for state-level competition through comprehensive physical and tactical training.</li>
                  <li>National-Level Participation: Facilitate pathways for players to advance from state-level play to national-level tournaments.</li>
                  <li>International Collaboration: Partner with global lacrosse organizations to ensure India’s participation in international tournaments, meeting the standards of established lacrosse nations.</li>
                  <li>Winning Medals: Develop a high-performance program with the goal of competing internationally and winning medals at world championships and multi-sport events.</li>
                </ul>
              </div>
              {/* Vision */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Our Vision</h4>
                <ul className="text-gray-600 list-disc list-inside space-y-2">
                  <li>Community Engagement: Build an inclusive lacrosse community involving schools, families, clubs, and volunteers to grow the sport nationally.</li>
                  <li>Infrastructure Development: Create and improve lacrosse-specific facilities, including fields and training centers to support athletes at all levels.</li>
                  <li>Participation at All Levels: Make lacrosse accessible to individuals of all ages from children to adults, across both small towns and major cities.</li>
                  <li>Global Presence: Establish India as a respected global presence in lacrosse by ensuring consistent international participation and competitive performance.</li>
                  <li>Olympic Aspirations: Set a clear path for the development of athletes and infrastructure, with the ultimate goal of representing India at the Olympics.</li>
                </ul>
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