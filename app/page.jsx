"use client";

import { Menu, Star, Clock, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDF6E9] pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#E65527] mb-6">
              Bold Flavors, Fun Vibes, Authentic Taste
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Experience the perfect blend of traditional recipes and modern dining atmosphere. Every dish tells a story of flavor and passion.
            </p>
            <button className="bg-[#E65527] text-white px-8 py-3 rounded-full hover:bg-[#d44a20] transition-colors">
              View Menu
            </button>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Delicious Food"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Signature Dishes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Classic Pizza",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
                price: "$18.99"
              },
              {
                name: "Fresh Salad",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
                price: "$12.99"
              },
              {
                name: "Specialty Pasta",
                image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
                price: "$16.99"
              }
            ].map((dish, index) => (
              <div key={index} className="bg-[#FDF6E9] rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-[#E65527] font-bold">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-[#2C2C2C] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#E65527]">Main Course</h3>
              {[
                { name: "Grilled Salmon", price: "$24.99" },
                { name: "Beef Steak", price: "$29.99" },
                { name: "Chicken Alfredo", price: "$19.99" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-4 pb-2 border-b border-gray-700">
                  <span>{item.name}</span>
                  <span className="text-[#E65527]">{item.price}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#E65527]">Desserts</h3>
              {[
                { name: "Chocolate Cake", price: "$8.99" },
                { name: "Tiramisu", price: "$7.99" },
                { name: "Ice Cream", price: "$5.99" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-4 pb-2 border-b border-gray-700">
                  <span>{item.name}</span>
                  <span className="text-[#E65527]">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Food Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
              "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
              "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
              "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
              "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
              "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327"
            ].map((url, index) => (
              <div key={index} className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <Image
                  src={url}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="text-[#E65527] mr-4" />
                <p>123 Restaurant Street, Food City, FC 12345</p>
              </div>
              <div className="flex items-center mb-6">
                <Clock className="text-[#E65527] mr-4" />
                <p>Mon-Sun: 11:00 AM - 10:00 PM</p>
              </div>
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E65527]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E65527]"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E65527]"
              ></textarea>
              <button className="bg-[#E65527] text-white px-8 py-3 rounded-full hover:bg-[#d44a20] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                Serving authentic flavors and creating memorable dining experiences since 2010.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Menu</li>
                <li>Reservations</li>
                <li>Gallery</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 Ayush Resturant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}