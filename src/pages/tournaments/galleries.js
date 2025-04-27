import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Image1 from "../../images/image1.png"
import Image2 from "../../images/image2.png"
import Image3 from "../../images/image3.png"
import Image4 from "../../images/image4.png"
import Image5 from "../../images/image5.png"
import Image6 from "../../images/image6.png"

const Galleries = () => (
  <Layout>
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galleries</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Relive the energy and passion of Lacrosse India through our photos
            and videos.
          </p>
        </div>
      </section>

      {/* Galleries Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Our Curated Gallery
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-center">
            <p className="mb-4">
              Explore the moments that define Lacrosse India, from thrilling
              matches to behind-the-scenes action.
            </p>
          </div>
        </div>
      </section>

      {/* Player Spotlights Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Player Spotlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <img
                src={Image1}
                alt="Lacrosse player in action"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm">Lacrosse Okinawa Open</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <img
                src={Image2}
                alt="Lacrosse player portrait"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm">
                  Asian Lacrosse Games (ALG)
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <img
                src={Image3}
                alt="Lacrosse player celebrating"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm">National Tournaments</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <img
                src={Image4}
                alt="Lacrosse player in action"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm">Lacrosse Okinawa Open</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <img
                src={Image5}
                alt="Lacrosse player portrait"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm">
                  Asian Lacrosse Games (ALG)
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <img
                src={Image6}
                alt="Lacrosse player celebrating"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm">National Tournaments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Match Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Match Highlights
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/9n2z2o_6NqQ"
                title="Lacrosse Asia Pacific Championship Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
            <p className="text-gray-600 text-sm text-center mt-4">
              Highlights from the Asia Pacific Lacrosse Championship
            </p>
          </div>
        </div>
      </section>

      {/* Behind-the-Scenes Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Behind-the-Scenes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
                alt="Lacrosse team training"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm">
                  [Replace with actual Lacrosse India behind-the-scenes photo]
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
                alt="Lacrosse team huddle"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm">
                  [Replace with actual Lacrosse India behind-the-scenes photo]
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
                alt="Lacrosse equipment setup"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm">
                  [Replace with actual Lacrosse India behind-the-scenes photo]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Camps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Training Camps
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/0jMYS-3Wn5I"
                title="Lacrosse training camp"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
            <p className="text-gray-600 text-sm text-center mt-4">
              [Replace with actual Lacrosse India training camp video]
            </p>
          </div>
        </div>
      </section>

      {/* Fan Moments Section */}
      {/* <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Fan Moments</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522098606253-c7d0a9f84023?q=80&w=2070&auto=format&fit=crop"
              alt="Lacrosse fans cheering"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-600 text-sm">
                [Replace with actual Lacrosse India fan moment photo]
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522098606253-c7d0a9f84023?q=80&w=2070&auto=format&fit=crop"
              alt="Lacrosse fan event"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-600 text-sm">
                [Replace with actual Lacrosse India fan moment photo]
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://www.youtube.com/embed/O03TuYCQ3JY"
              alt="Lacrosse fan celebration"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-600 text-sm">
                [Replace with actual Lacrosse India fan moment photo]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> */}

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Share Your Moments
          </h3>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Have photos or videos from Lacrosse India events? Contact us to
            share your moments with the community!
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

export default Galleries
