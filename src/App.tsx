import React from 'react';
import { Calendar, Apple as WhatsApp, Trophy, FileSpreadsheet, Info } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Oracle Cloud Background */}
      <header className="relative h-[500px] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <img 
            src="https://www.oracle.com/a/ocom/img/rh03-oracle-cloud.svg" 
            alt="Oracle Cloud Logo" 
            className="h-16 mx-auto mb-8"
          />
          <h1 className="text-5xl font-bold text-white mb-6">
            Oracle ACAD Low Code Contest
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Showcase your innovation and creativity in the world of low-code development
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 -mt-16 relative z-10">
        {/* Important Dates */}
        <section className="bg-white rounded-xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-[#F80000]" />
            <h2 className="text-3xl font-bold text-gray-900">Important Dates</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DateCard title="Registration Opens" date="March 15, 2024" />
            <DateCard title="Submission Deadline" date="April 10, 2024" />
            <DateCard title="Results Announcement" date="April 20, 2024" />
          </div>
        </section>

        {/* About Section */}
        <section className="bg-[#F80000] rounded-xl p-8 mb-8 shadow-lg text-white">
          <div className="flex items-center gap-3 mb-6">
            <Info className="w-8 h-8 text-white" />
            <h2 className="text-3xl font-bold">About the Contest</h2>
          </div>
          <p className="leading-relaxed mb-4">
            Join us in this exciting competition where students can showcase their skills
            in low-code development using Oracle APEX. Build innovative applications
            that solve real-world problems and compete for amazing prizes!
          </p>
          <p className="leading-relaxed">
            Whether you're a beginner or an experienced developer, this contest provides
            the perfect platform to demonstrate your creativity and technical abilities.
          </p>
        </section>

        {/* Prizes Section */}
        <section className="bg-white rounded-xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-[#F80000]" />
            <h2 className="text-3xl font-bold text-gray-900">Exciting Prizes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <PrizeCard place="1st Place" prize="₹50,000 + Internship Opportunity" />
            <PrizeCard place="2nd Place" prize="₹30,000 + Oracle Certification" />
            <PrizeCard place="3rd Place" prize="₹20,000 + Premium Swag Kit" />
          </div>
        </section>

        {/* Registration Links */}
        <section className="grid md:grid-cols-2 gap-8">
          <a
            href="https://forms.google.com/contest-registration"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#F80000] hover:bg-[#d90000] text-white rounded-xl p-6 transition-colors shadow-lg"
          >
            <FileSpreadsheet className="w-6 h-6" />
            <span className="text-xl font-semibold">Register Now</span>
          </a>
          <a
            href="https://chat.whatsapp.com/group-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl p-6 transition-colors shadow-lg"
          >
            <WhatsApp className="w-6 h-6" />
            <span className="text-xl font-semibold">Join WhatsApp Group</span>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 mt-16 py-8">
        <div className="container mx-auto px-4">
          <img 
            src="https://www.oracle.com/a/ocom/img/oracle-red.svg" 
            alt="Oracle Logo" 
            className="h-8 mx-auto mb-4"
          />
          <p className="text-center text-gray-400">
            © 2024 Oracle ACAD Low Code Contest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function DateCard({ title, date }: { title: string; date: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-[#F80000] mb-2">{title}</h3>
      <p className="text-gray-700">{date}</p>
    </div>
  );
}

function PrizeCard({ place, prize }: { place: string; prize: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-[#F80000] mb-2">{place}</h3>
      <p className="text-gray-700">{prize}</p>
    </div>
  );
}

export default App;