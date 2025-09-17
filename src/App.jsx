import React from "react";
import Skills from "./componenet/Skills";
import Project from "./componenet/Project";
import Certificates from "./componenet/Certificates";
import profileImage from "./assets/my image.jpg";

function App() {
  return (
    <div className="font-sans scroll-smooth">
    <section className="h-[70vh] flex flex-col md:flex-row items-center px-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
  {/* Left Side - Text */}
  <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
    <h2 className="text-5xl font-extrabold mb-4 animate-fadeIn text-gray-200">
      Hi, I'm <span className="text-blue-400">Vaishnavi</span>
    </h2>
    <p className="text-xl mb-6 text-gray-300 animate-slideUp">
      Frontend Developer | Learning Backend | Aspiring Full Stack Developer
    </p>

    {/* Download Resume Button */}
    <a
      href="https://drive.google.com/file/d/1SrPQPIae80cGZ1LjRqcl9ZTgnOlRWKOQ/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105"
    >
      Download Resume
    </a>

    {/* Social Links */}
    <div className="flex justify-center md:justify-start space-x-6 mt-6">
    
      <a
        href="https://github.com/avaghadevaishnavi" // replace with your GitHub
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-blue-400 transition transform hover:scale-110"
      >
        <i className="fab fa-github fa-2x">GitHub </i>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/vaishnavi-avaghade-3aba3728b/" // replace with your LinkedIn
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-blue-400 transition transform hover:scale-110"
      >
        <i className="fab fa-linkedin fa-2x">linkedin</i>
      </a>
    </div>
  </div>

  {/* Right Side - Image */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src={profileImage}
      alt="Vaishnavi profile"
      className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-white hover:scale-105 transform transition"
    />
  </div>
</section>




<Skills/>
     




   <Project/>

     <Certificates/>

      

      {/* Footer */}
      <footer className="bg-gray-700 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Vaishnavi | Built with React & Tailwind</p>
      </footer>
    </div>
  );
}

export default App;
