import {
  Calendar,
  Apple as WhatsApp,
  Trophy,
  FileSpreadsheet,
  Info,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      {/* Hero Section with Oracle Cloud Background */}
      <header className='relative h-[500px] flex items-center justify-center text-center overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage:
              'url("https://www.oracle.com/a/ocom/img/bgimg02-bgne-ai-services.png")',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/10 to-black/10'></div>
        </div>
        <div className='relative z-10 container mx-auto px-4 flex flex-col items-center gap-5'>
          <img
            src='https://miro.medium.com/v2/resize:fit:1204/0*gBuyyb7q0Coqpm6A'
            height={120} // Adjusted the height to make it more proportional
            alt='Oracle Cloud Logo'
            className='h-16 mx-auto mb-6' // Adjusted margin-bottom to reduce space
          />
          <h1 className='text-5xl font-bold text-[#161513] mb-4'>
            {' '}
            {/* Reduced margin-bottom */}
            OracleAcad Low-Code Contest
          </h1>
          <p className='text-xl text-[#161513] max-w-2xl mx-auto'>
            Showcase your innovation and creativity in the world of low-code
            development
          </p>
          <a href='#register'>
            <button className='w-fit px-6 py-3 text-lg font-semibold text-white bg-[#312D2A] rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-90 hover:shadow-2xl relative overflow-hidden group'>
              <span className='absolute inset-0 bg-gradient-to-r from-[#4A4038] to-[#312D2A] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
              <span className='relative z-10'>Register Now</span>
            </button>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className='container m-0 relative z-10 text-[#161513]'>
        {/* Important Dates & Links Section with a Single Background */}
        <section
          className='bg-cover bg-center rounded-xl p-8 pb-15 shadow-lg text-white'
          style={{
            backgroundImage:
              "url('https://www.oracle.com/a/ocom/img/bgimg02-bgsw-hero-ai-capabilities.png')",
          }}
        >
          {/* Important Dates */}
          <div id='important-dates' className='mb-8'>
            <div className='flex items-center gap-3 mb-6'>
              <Calendar className='w-8 h-8 text-[#F80000]' />
              <h2 className='text-3xl font-bold text-[#161513]'>
                Important Dates
              </h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6'>
              <DateCard title='Registration Opens' date='February 13, 2025' />
              <DateCard title='Submission Deadline' date='February 24, 2025' />
              <DateCard title='Final Round' date='TBD' />
              <DateCard title='Results Announcement' date='TBD' />
            </div>
          </div>

          {/* Important Links */}
          <div id='important-links'>
            <div className='flex items-center gap-3 mb-6'>
              <Info className='w-8 h-8 text-[#F80000]' />
              <h2 className='text-3xl font-bold text-[#161513]'>
                Important Links
              </h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6'>
              <a
                href='https://oracle.com/cloud'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-3 bg-[#F80000] hover:bg-[#d90000] text-white rounded-xl p-6 transition-colors shadow-lg'
              >
                <Info className='w-6 h-6' />
                <span className='text-xl font-semibold'>
                  Learn About Oracle Cloud
                </span>
              </a>
              <a
                href='https://docs.oracle.com/en/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-3 bg-[#312D2A] hover:bg-[#1f1c1b] text-white rounded-xl p-6 transition-colors shadow-lg'
              >
                <FileSpreadsheet className='w-6 h-6' />
                <span className='text-xl font-semibold'>
                  Oracle Documentation
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Announcement Section */}
        <section id='announcement' className='py-8 text-[#161513]'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center md:text-left mb-4'>
              Announcement
            </h2>
            <img
              src='https://raw.githubusercontent.com/anujsamdariya07/Oracle-acada/refs/heads/main/src/announcement-image.jpg'
              alt='Announcement'
              className='w-full rounded-lg shadow-lg'
            />
          </div>
        </section>

        {/* About Section (No change) */}
        <section id='about' className='bg-[#312D2A] p-10 shadow-lg text-white'>
          <div className='flex items-center gap-3 mb-6'>
            <Info className='w-8 h-8 text-white' />
            <h2 className='text-3xl font-bold'>About the Contest</h2>
          </div>
          <p className='leading-relaxed mb-4 text-xl'>
            <span className='text-2xl font-bold'>
              Invitation to the OracleAcad Low-Code Development Contest
            </span>
            <br />
            We are excited to announce the OracleAcad Low-Code Development
            Contest, an opportunity for all aspiring developers to showcase
            their skills and creativity!
            <br />
            <br />
            <span className='text-2xl font-bold'>Event Details:</span>
            <br />
            <span className='text-2xl font-bold'>1. Registration Period: </span>
            February 11th - 14th
            <br />
            <span className='text-2xl font-bold'>2. Submission Deadline: </span>
            February 18th - 21st
            <br />
            <br />
            <span className='text-2xl font-bold'>What to Expect:</span>
            <br />
            <span className='text-2xl font-bold'>1. Challenge:</span> Develop an
            innovative application that solves a real-world problem using the
            various services available through Oracle Cloud Infrastructure
            (OCI). <br />
            <span className='text-2xl font-bold'>2. Mentoring Sessions:</span>
            All participants will receive guidance from Oracle officials to
            ensure your project is on the right track. <br />
            <span className='text-2xl font-bold'>3. Prizes:</span> Exciting
            prizes await the winners! (Details to be announced soon, and prizes
            will be awarded by Oracle.) <br />
            <span className='text-2xl font-bold'>4. OCI Credits:</span> Every
            participant will receive $300 in Oracle Cloud Infrastructure credits
            to help you build and deploy your application! <br />
            <br />
            <span className='text-2xl font-bold'>How to Participate:</span>
            <br />
            1. Register your winning team. <br />
            2. Brain storm your idea. <br />
            3. Develop your application using only Oracle Cloud Infrastructure
            and deploy it.
            <br />
            4. Submit your application through a presentation between February
            18th - 21st. (Also provide the deployed link) <br />
            5. Top submissions will make it to the final round, where the best
            will be recognized! <br />
            <br />
            <span className='font-bold'>
              Don’t miss out on this opportunity to showcase your talent,
              receive expert guidance, and win amazing prizes!
            </span>
            <br />
            <span className='font-bold'>
              Register now and get ready to build the future with Oracle!
            </span>
          </p>
        </section>

        {/* Prizes Section & Registration Links with the Same Background */}
        <section
          className='bg-cover bg-center p-8 shadow-lg text-center'
          style={{
            backgroundImage:
              "url('https://www.oracle.com/asset/web/i/rh08-top-bg.png')",
          }}
        >
          {/* Exciting Prizes */}
          <div className='mb-8'>
            <div className='flex items-center gap-3 mb-6 justify-center'>
              <Trophy className='w-8 h-8 text-[#F80000]' />
              <h2 className='text-3xl font-bold'>Exciting Prizes</h2>
            </div>
            <div className='grid md:grid-cols-1 gap-6'>
              <PrizeCard place='TBD' prize='By Oracle' />
            </div>
          </div>

          {/* Registration Links */}
          <div id='register' className='grid md:grid-cols-2 gap-8'>
            <a
              href='https://forms.gle/EgBM1YcrLEwEG7pZ7'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3 bg-[#F80000] hover:bg-[#d90000] text-white rounded-xl p-6 transition-colors shadow-lg'
            >
              <FileSpreadsheet className='w-6 h-6' />
              <span className='text-xl font-semibold'>Register Now</span>
            </a>
            <a
              href='https://chat.whatsapp.com/EbKqGkUaykDCHIHMeDaWr3'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3 bg-[#312D2A] hover:bg-[#1f1c1b] text-white rounded-xl p-6 transition-colors shadow-lg'
            >
              <WhatsApp className='w-6 h-6' />
              <span className='text-xl font-semibold'>Join WhatsApp Group</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-[#312D2A] py-8 text-white'>
        <div className='container mx-auto px-4'>
          <img
            src='https://miro.medium.com/v2/resize:fit:1204/0*gBuyyb7q0Coqpm6A'
            alt='Oracle Logo'
            className='h-8 mx-auto mb-4'
          />
          <p className='text-center'>
            © 2024 Oracle ACAD Low Code Contest. All rights reserved.
          </p>
           <p className='text-center'>
            Made with <a href="https://www.linkedin.com/in/harsh-kumar-b0b879245/">❤️ Harsh (HRS)</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function DateCard({ title, date }: { title: string; date: string }) {
  return (
    <div className='bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow'>
      <h3 className='text-xl font-semibold text-[#F80000] mb-2'>{title}</h3>
      <p className='text-gray-700'>{date}</p>
    </div>
  );
}

function PrizeCard({ place, prize }: { place: string; prize: string }) {
  return (
    <div className='bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow'>
      <h3 className='text-xl font-semibold text-[#F80000] mb-2'>{place}</h3>
      <p className='text-gray-700'>{prize}</p>
    </div>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-[#312D2A] text-white p-4 shadow-lg relative'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Left: Oracle Logo */}
        <a href='#' className='flex items-center'>
          <img
            src='https://seekvectors.com/storage/images/Oracle%20Corporation-01.svg'
            alt='Oracle Logo'
            className='h-10'
          />
        </a>

        {/* Right Side (Desktop & Mobile View) */}
        <div className='flex items-center space-x-6'>
          {/* Announcement Link Always Visible */}
          <a
            href='#announcement'
            className='relative text-lg font-semibold hover:text-yellow-400 transition'
          >
            Announcement
            <span className='absolute -top-2 -right-4 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-bounce'>
              !
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-white focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Links */}
          <div className='hidden md:flex space-x-6'>
            <a
              href='#important-dates'
              className='block hover:text-gray-300 transition'
            >
              Important Dates
            </a>
            <a
              href='#important-links'
              className='hover:text-gray-300 transition'
            >
              Important Links
            </a>
            <a href='#register' className='hover:text-gray-300 transition'>
              Register
            </a>
            <a href='#about' className='hover:text-gray-300 transition'>
              About
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden mt-4 space-y-4 text-center bg-[#312D2A] p-4 rounded-lg'>
          <a
            href='#important-dates'
            className='block hover:text-gray-300 transition'
          >
            Important Dates
          </a>
          <a
            href='#important-links'
            className='block hover:text-gray-300 transition'
          >
            Important Links
          </a>
          <a href='#register' className='block hover:text-gray-300 transition'>
            Register
          </a>
          <a href='#about' className='block hover:text-gray-300 transition'>
            About
          </a>
        </div>
      )}
    </nav>
  );
};

export default App;
