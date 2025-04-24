import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
// Import the logo from the images folder
import LaiLogo from "../images/lai.jpg"

const IndexPage = () => (
  <Layout>
    <section className="text-center mb-12">
      <img 
        src={LaiLogo} 
        alt="Lacrosse Association of India Logo" 
        className="mx-auto mb-6 w-36 h-36 object-contain"
      />
      <h1 className="text-5xl">Welcome to Lacrosse Association of India</h1>
      <p className="text-lg max-w-4xl mx-auto">
        Join our vibrant community dedicated to promoting lacrosse across the nation. Explore our teams, programs, and events!
      </p>
      <a href="/get-involved/become-player" className="inline-block bg-secondary text-white py-2 px-6 rounded-full mt-4 hover:bg-yellow-600">
        Get Involved
      </a>
    </section>
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h2>🧭 About Us</h2>
        <p>Learn about our mission and leadership.</p>
        <a href="/about-us/our-story" className="text-primary hover:underline">Read More</a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h2>🇮🇳 National Teams</h2>
        <p>Discover our men’s and women’s teams.</p>
        <a href="/national-teams/mens-team" className="text-primary hover:underline">Explore Teams</a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h2>🏆 Tournaments</h2>
        <p>Check out our exciting events.</p>
        <a href="/tournaments/international" className="text-primary hover:underline">View Events</a>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage