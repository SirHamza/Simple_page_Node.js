import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between p-8 text-sm">
        <ul className="flex space-x-8">
          <li className="hover:text-custom-green">Home</li>
          <li className="hover:text-custom-green">Project</li>
          <li className="hover:text-custom-green">Contact</li>
          <li className="hover:text-custom-green">Recent Work</li>
          <li className="hover:text-custom-green">Get In Touch</li>
        </ul>
        <ul className="flex space-x-4">
          <li className="hover:text-custom-green">LinkedIn</li>
          <li className="hover:text-custom-green">Up Work</li>
          <li className="hover:text-custom-green">Fiver</li>
        </ul>
      </nav>

      {/* Main Section (Hero) */}
      <section className="flex flex-col lg:flex-row justify-between items-center h-[80vh] px-8 lg:px-20">
        {/* Text Section */}
        <div className="max-w-lg text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-5xl font-bold mb-4">HAMZA Portfolio</h1>
          <p className="text-gray-400 text-lg mb-8">
           I am learning TypeScript, Python, and Node.js to build dynamic web applications. My focus is on creating efficient front-end and back-end solutions while improving my skills in programming.
            This portfolio showcases my projects and progress as I explore these technologies.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="bg-green-500 text-black px-8 py-3 rounded-lg font-semibold transition duration-200 hover:bg-green-600">
              Let&apos;s Get Started
            </button>
            <button className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-200 hover:bg-gray-600">
              View My Work
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mt-12 lg:mt-0 lg:ml-12 flex justify-center">
        <Image src="/images/download.jpg" alt="Profile" width={800} height={800} />
        </div>
      </section>

      {/* Footer Section with Buttons */}
      <footer className="flex flex-col items-center mt-16 mb-8">
        <p className="text-gray-400 text-lg mb-4">Interested in working together? Get in touch!</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-green-500 text-black px-8 py-3 rounded-lg font-semibold transition duration-200 hover:bg-green-600">
            Contact Me
          </button>
          <button className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-200 hover:bg-gray-600">
            Download Resume
          </button>
        </div>
      </footer>
    </div>
  );
}
