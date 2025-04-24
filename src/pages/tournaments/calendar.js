import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const Calendar = () => (
  <Layout>
  <div className="bg-gray-100 min-h-screen">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Calendar of Events</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Stay updated with Lacrosse India’s upcoming events and tournaments.
        </p>
      </div>
    </section>

    {/* Events Overview Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Upcoming Events</h2>
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          <p className="mb-4">
            View our schedule of upcoming events, including:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Selection trials</li>
            <li>Development camps</li>
            <li>Regional tournaments</li>
            <li>International fixtures</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Calendar Embed Section */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Event Calendar</h3>
        <div className="max-w-4xl mx-auto">
          {/* Placeholder for Google Calendar or custom calendar tool */}
          <div className="bg-gray-200 rounded-lg p-4 text-center">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Asia/Kolkata"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              title="Lacrosse India Calendar"
              className="rounded-lg"
            ></iframe>
            <p className="text-gray-500 text-sm mt-4">
              Note: Replace the above iframe source with your actual Google Calendar embed link or custom calendar implementation.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="bg-indigo-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Get Involved in Our Events</h3>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Want to participate in or learn more about our upcoming events? Reach out to us!
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

export default Calendar;