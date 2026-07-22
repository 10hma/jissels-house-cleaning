import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-xl">
              J
            </div>

            <div>
              <h1 className="font-bold text-lg text-gray-900">
                Jissel's House Cleaning
              </h1>
              <p className="text-xs text-gray-500">
                Fresh homes. Reliable service.
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-teal-600 transition">
              Services
            </a>

            <a href="#gallery" className="hover:text-teal-600 transition">
              Gallery
            </a>

            <a href="#contact" className="hover:text-teal-600 transition">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="bg-teal-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-teal-700 transition"
          >
            Text to Start Booking
          </a>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-medium text-sm mb-6">
              Professional Home Cleaning
            </span>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
              A Cleaner Home.
              <br />
              A More Comfortable Life.
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Jissel's House Cleaning provides dependable cleaning services
              designed to keep your home fresh, organized, and comfortable.
              Every visit is handled with care and attention to detail.
            </p>


            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-teal-700 transition shadow-lg"
              >
                Text to Start Booking
              </a>

              <a
                href="#services"
                className="border border-teal-600 text-teal-700 px-8 py-4 rounded-xl font-semibold text-center hover:bg-teal-50 transition"
              >
                View Services
              </a>
            </div>


            <div className="mt-10 grid grid-cols-3 gap-5">

              <div>
                <h3 className="text-2xl font-bold text-teal-600">
                  2
                </h3>
                <p className="text-sm text-gray-600">
                  Cleaning Options
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-teal-600">
                  100%
                </h3>
                <p className="text-sm text-gray-600">
                  Careful Service
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-teal-600">
                  Local
                </h3>
                <p className="text-sm text-gray-600">
                  Trusted Cleaning
                </p>
              </div>

            </div>

          </div>


          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
                alt="Clean home interior"
                className="w-full h-[500px] object-cover"
              />
            </div>


            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <h3 className="font-bold text-lg mb-2">
                Quality Cleaning
              </h3>

              <p className="text-gray-600 text-sm">
                Helping homeowners enjoy cleaner, healthier spaces.
              </p>
            </div>

          </div>

        </div>
      </section>      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-semibold">
              Our Services
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
              Cleaning Services Made Simple
            </h2>

            <p className="text-gray-600 text-lg">
              Choose the cleaning service that best fits your home's needs.
              We focus on quality, consistency, and attention to detail.
            </p>
          </div>


          <div className="grid md:grid-cols-2 gap-8">

            {/* Regular Cleaning */}
            <div className="rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition bg-white">

              <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
                <span className="text-3xl">
                  ✨
                </span>
              </div>


              <h3 className="text-3xl font-bold mb-4">
                Regular Cleaning
              </h3>


              <p className="text-gray-600 mb-6">
                Perfect for maintaining a clean and comfortable home.
                Includes routine cleaning tasks to keep your space looking
                fresh.
              </p>


              <ul className="space-y-3 text-gray-700">

                <li className="flex gap-3">
                  <span className="text-teal-600">
                    ✓
                  </span>
                  Dusting and wiping surfaces
                </li>

                <li className="flex gap-3">
                  <span className="text-teal-600">
                    ✓
                  </span>
                  Vacuuming and floor cleaning
                </li>

                <li className="flex gap-3">
                  <span className="text-teal-600">
                    ✓
                  </span>
                  Kitchen and bathroom cleaning
                </li>

                <li className="flex gap-3">
                  <span className="text-teal-600">
                    ✓
                  </span>
                  General home refresh
                </li>

              </ul>

            </div>



            {/* Deep Cleaning */}
            <div className="rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition bg-gradient-to-br from-teal-600 to-blue-600 text-white">

              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <span className="text-3xl">
                  🧽
                </span>
              </div>


              <h3 className="text-3xl font-bold mb-4">
                Deep Cleaning
              </h3>


              <p className="text-white/90 mb-6">
                A detailed cleaning service designed for homes needing extra
                attention and a deeper refresh.
              </p>


              <ul className="space-y-3">

                <li className="flex gap-3">
                  <span>
                    ✓
                  </span>
                  Detailed kitchen cleaning
                </li>

                <li className="flex gap-3">
                  <span>
                    ✓
                  </span>
                  Bathroom deep cleaning
                </li>

                <li className="flex gap-3">
                  <span>
                    ✓
                  </span>
                  Hard-to-reach areas
                </li>

                <li className="flex gap-3">
                  <span>
                    ✓
                  </span>
                  Extra attention to details
                </li>

              </ul>

            </div>

          </div>

        </div>
      </section>



      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-5">
            Simple Pricing
          </h2>


          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Every home is different, so we provide personalized pricing based
            on your cleaning needs.
          </p>


          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h3 className="text-3xl font-bold text-teal-600 mb-4">
              Prices vary by home.
            </h3>


            <p className="text-gray-600 mb-8">
              Contact us with your home details and we will provide more
              information about your cleaning service options.
            </p>


            <a
              href="#contact"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition"
            >
              Text to Start Booking
            </a>

          </div>

        </div>

      </section>



      {/* Features Section */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-teal-600 font-semibold">
              Why Choose Us
            </span>


            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Cleaning You Can Trust
            </h2>

          </div>



          <div className="grid md:grid-cols-3 gap-8">


            <div className="p-8 rounded-3xl bg-teal-50">

              <div className="text-4xl mb-5">
                🏠
              </div>

              <h3 className="text-xl font-bold mb-3">
                Home Focused
              </h3>

              <p className="text-gray-600">
                We specialize in creating cleaner and more comfortable living
                spaces.
              </p>

            </div>



            <div className="p-8 rounded-3xl bg-blue-50">

              <div className="text-4xl mb-5">
                ⭐
              </div>

              <h3 className="text-xl font-bold mb-3">
                Attention To Detail
              </h3>

              <p className="text-gray-600">
                Every room receives careful attention to help your home look
                its best.
              </p>

            </div>



            <div className="p-8 rounded-3xl bg-cyan-50">

              <div className="text-4xl mb-5">
                💙
              </div>

              <h3 className="text-xl font-bold mb-3">
                Reliable Service
              </h3>

              <p className="text-gray-600">
                Friendly and dependable cleaning with your satisfaction as a
                priority.
              </p>

            </div>


          </div>

        </div>

      </section>      {/* Before & After Gallery */}
      <section id="gallery" className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <span className="text-teal-600 font-semibold">
              Before & After
            </span>


            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
              See The Difference
            </h2>


            <p className="text-gray-600 text-lg">
              A clean home can make a big difference. Here are examples of the
              transformation a detailed cleaning can provide.
            </p>

          </div>



          <div className="grid md:grid-cols-2 gap-10">


            {/* Before Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

              <div className="relative">

                <img
                  src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf"
                  alt="Before cleaning"
                  className="w-full h-80 object-cover"
                />


                <div className="absolute top-5 left-5 bg-gray-900/80 text-white px-5 py-2 rounded-full font-semibold">
                  Before
                </div>

              </div>


              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  Needs A Refresh
                </h3>


                <p className="text-gray-600">
                  Spaces can collect dust, clutter, and buildup over time.
                  Regular cleaning helps bring your home back to life.
                </p>

              </div>

            </div>



            {/* After Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

              <div className="relative">

                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
                  alt="After cleaning"
                  className="w-full h-80 object-cover"
                />


                <div className="absolute top-5 left-5 bg-teal-600 text-white px-5 py-2 rounded-full font-semibold">
                  After
                </div>

              </div>


              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  Fresh & Comfortable
                </h3>


                <p className="text-gray-600">
                  A professionally cleaned space feels brighter, healthier,
                  and more enjoyable for everyone at home.
                </p>

              </div>

            </div>


          </div>

        </div>

      </section>




      {/* Cleaning Process Section */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">


          <div className="text-center mb-16">

            <span className="text-teal-600 font-semibold">
              How It Works
            </span>


            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Simple From Start To Finish
            </h2>

          </div>



          <div className="grid md:grid-cols-3 gap-8">


            <div className="text-center">

              <div className="w-16 h-16 mx-auto rounded-full bg-teal-100 flex items-center justify-center text-2xl font-bold text-teal-600 mb-5">
                1
              </div>


              <h3 className="text-xl font-bold mb-3">
                Send A Message
              </h3>


              <p className="text-gray-600">
                Text us with information about your home and the cleaning
                service you need.
              </p>

            </div>




            <div className="text-center">

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600 mb-5">
                2
              </div>


              <h3 className="text-xl font-bold mb-3">
                Choose Your Cleaning
              </h3>


              <p className="text-gray-600">
                Select between regular cleaning or deep cleaning depending on
                your home's needs.
              </p>

            </div>




            <div className="text-center">

              <div className="w-16 h-16 mx-auto rounded-full bg-cyan-100 flex items-center justify-center text-2xl font-bold text-cyan-600 mb-5">
                3
              </div>


              <h3 className="text-xl font-bold mb-3">
                Enjoy A Cleaner Home
              </h3>


              <p className="text-gray-600">
                Relax and enjoy a cleaner, fresher living space.
              </p>

            </div>


          </div>

        </div>

      </section>




      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-teal-600 to-blue-600">

        <div className="max-w-5xl mx-auto px-6 text-center text-white">


          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready For A Cleaner Home?
          </h2>


          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Contact Jissel's House Cleaning today and start your cleaning
            request.
          </p>



          <div className="bg-white rounded-3xl p-8 md:p-12 text-gray-900 shadow-xl">


            <h3 className="text-3xl font-bold mb-4">
              Text to Start Booking
            </h3>


            <p className="text-gray-600 mb-8">
              Send a message with your home details and the type of cleaning
              you are interested in.
            </p>



            <a
              href="sms:"
              className="inline-block bg-teal-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-teal-700 transition"
            >
              Send Text Message
            </a>


          </div>


        </div>

      </section>      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10">


            {/* Company Info */}
            <div>

              <div className="flex items-center gap-3 mb-5">

                <div className="w-11 h-11 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-xl">
                  J
                </div>


                <h3 className="text-xl font-bold">
                  Jissel's House Cleaning
                </h3>

              </div>


              <p className="text-gray-400">
                Reliable cleaning services focused on making your home fresh,
                comfortable, and enjoyable.
              </p>

            </div>



            {/* Services */}
            <div>

              <h4 className="text-lg font-bold mb-5">
                Services
              </h4>


              <ul className="space-y-3 text-gray-400">

                <li>
                  Regular Cleaning
                </li>

                <li>
                  Deep Cleaning
                </li>

                <li>
                  Home Refresh
                </li>

              </ul>

            </div>



            {/* Contact */}
            <div>

              <h4 className="text-lg font-bold mb-5">
                Contact
              </h4>


              <p className="text-gray-400 mb-4">
                Ready to schedule a cleaning?
              </p>


              <a
                href="#contact"
                className="inline-block text-teal-400 font-semibold hover:text-teal-300 transition"
              >
                Text to Start Booking →
              </a>

            </div>


          </div>



          <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500 text-sm">

            <p>
              © {new Date().getFullYear()} Jissel's House Cleaning. All rights
              reserved.
            </p>

          </div>


        </div>

      </footer>


    </div>
  );
}


export default App;