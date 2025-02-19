import {
  Calendar,
  Apple as WhatsApp,
  Trophy,
  FileSpreadsheet,
  Info,
} from 'lucide-react';

function App() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section with Oracle Cloud Background */}
      <header className='relative h-[500px] flex items-center justify-center text-center overflow-hidden'>
        <div
          className='absolute inset-0 z-0 bg-cover bg-center'
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/70 to-black/90'></div>
        </div>
        <div className='relative z-10 container mx-auto px-4'>
          <img
            src='https://miro.medium.com/v2/resize:fit:1204/0*gBuyyb7q0Coqpm6A'
            height={120} // Adjusted the height to make it more proportional
            alt='Oracle Cloud Logo'
            className='h-16 mx-auto mb-6' // Adjusted margin-bottom to reduce space
          />
          <h1 className='text-5xl font-bold text-white mb-4'>
            {' '}
            {/* Reduced margin-bottom */}
            OracleAcad Low-Code Contest
          </h1>
          <p className='text-xl text-gray-200 max-w-2xl mx-auto'>
            Showcase your innovation and creativity in the world of low-code
            development
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className='container mx-auto px-4 py-8 -mt-16 relative z-10'>
        {/* Important Dates */}
        <section className='bg-white rounded-xl p-8 mb-8 shadow-lg'>
          <div className='flex items-center gap-3 mb-6'>
            <Calendar className='w-8 h-8 text-[#F80000]' />
            <h2 className='text-3xl font-bold text-gray-900'>
              Important Dates
            </h2>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6'>
            <DateCard title='Registration Opens' date='February 13, 2025' />
            <DateCard title='Submission Deadline' date='February 21, 2025' />
            <DateCard title='Final Round' date='TBD' />
            <DateCard title='Results Announcement' date='TBD' />
          </div>
        </section>

        {/* Important Links */}
        <section className='bg-white rounded-xl p-8 mb-8 shadow-lg'>
          <div className='flex items-center gap-3 mb-6'>
            <Calendar className='w-8 h-8 text-[#F80000]' />
            <h2 className='text-3xl font-bold text-gray-900'>Important Links</h2>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6'>
            <a
              href='https://oracle.com/cloud'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3 bg-[#F80000] hover:bg-[#d90000] text-white rounded-xl p-6 transition-colors shadow-lg'
            >
              <Info className='w-6 h-6' />
              <span className='text-xl font-semibold'>Learn About Oracle Cloud</span>
            </a>
            <a
              href='https://docs.oracle.com/en/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl p-6 transition-colors shadow-lg'
            >
              <FileSpreadsheet className='w-6 h-6' />
              <span className='text-xl font-semibold'>Oracle Documentation</span>
            </a>
          </div>
        </section>


        {/* About Section */}
        <section className='bg-[#F80000] rounded-xl p-8 mb-8 shadow-lg text-white'>
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
            <span className='text-2xl font-bold'>
              2. Mentoring Sessions:
            </span>{' '}
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
            1. Register between February 11th - 14th. <br />
            2. Develop your application using only Oracle Cloud Infrastructure.
            (Click Here) <br />
            3. Submit your application through a presentation between February
            18th - 21st. (Submission link will be shared soon) <br />
            4. Top submissions will make it to the final round, where the best
            will be recognized! <br />
            <br />
            <span className='font-bold'>
              Don’t miss out on this opportunity to showcase your talent,
              receive expert guidance, and win amazing prizes!{' '}
            </span>
            <br />
            <span className='font-bold'>
              Register now and get ready to build the future with Oracle!
            </span>
          </p>
        </section>

        {/* Prizes Section */}
        <section className='bg-white rounded-xl p-8 mb-8 shadow-lg'>
          <div className='flex items-center gap-3 mb-6'>
            <Trophy className='w-8 h-8 text-[#F80000]' />
            <h2 className='text-3xl font-bold text-gray-900'>
              Exciting Prizes
            </h2>
          </div>
          <div className='grid md:grid-cols-1 gap-6 text-center'>
            <PrizeCard place='TBD' prize='By Oracle' />
          </div>
        </section>

        {/* Registration Links */}
        <section className='grid md:grid-cols-2 gap-8'>
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
            className='flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl p-6 transition-colors shadow-lg'
          >
            <WhatsApp className='w-6 h-6' />
            <span className='text-xl font-semibold'>Join WhatsApp Group</span>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-gray-900 mt-16 py-8'>
        <div className='container mx-auto px-4'>
          <img
            src='https://miro.medium.com/v2/resize:fit:1204/0*gBuyyb7q0Coqpm6A'
            alt='Oracle Logo'
            className='h-8 mx-auto mb-4'
          />
          <p className='text-center text-gray-400'>
            © 2024 Oracle ACAD Low Code Contest. All rights reserved.
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

export default App;
