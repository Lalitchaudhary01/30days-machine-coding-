import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-sky-700 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Text & CTAs */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Track Your Habits, Build Your Future
            </h1>
            <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto md:mx-0">
              Stay consistent and motivated with visual progress, streaks, and
              daily reminders.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 rounded-lg bg-white text-sky-700 font-semibold shadow-md hover:shadow-lg transition">
                Start Tracking
              </button>
              <button className="px-6 py-3 rounded-lg bg-transparent border border-white/30 text-white hover:bg-white/10 transition">
                Learn More
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start text-sm opacity-90">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                  🔥
                </span>
                <span>Track streaks easily</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                  📅
                </span>
                <span>Visual calendar view</span>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Card */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-full max-w-md bg-white/10 backdrop-blur rounded-2xl p-6 shadow-lg">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-sky-700 font-bold text-lg mb-4">
                  Today’s Progress
                </h2>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>🏃‍♂️ Morning Run</span>
                    <span className="text-green-500 font-bold">Done</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>📖 Read 10 pages</span>
                    <span className="text-green-500 font-bold">Done</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>💧 Drink Water</span>
                    <span className="text-yellow-400 font-bold">Pending</span>
                  </li>
                </ul>
                <div className="mt-6 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-500 w-2/3"></div>
                </div>
                <p className="mt-2 text-sm text-gray-600">66% Complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
