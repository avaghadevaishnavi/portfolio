import React from 'react'

function Project() {
  return (
    <div>
      <section
  id="projects"
  className="min-h-screen px-10 py-20 bg-gray-900 text-white"
>
  <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* REAL DEAL */}
    <div className="border border-gray-700 p-6 rounded-lg shadow hover:shadow-lg bg-gray-800">
      <h3 className="text-2xl font-semibold mb-4">REAL DEAL (React Native)</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>
          Built the UI for a mobile application using React Native components
          and navigation libraries.
        </li>
        <li>
          Designed responsive layouts and ensured seamless user interaction
          across devices.
        </li>
        <li>
          Contributed to creating a clean, user-friendly mobile experience.
        </li>
      </ul>
    </div>

    {/* Academic Assist */}
    <div className="border border-gray-700 p-6 rounded-lg shadow hover:shadow-lg bg-gray-800">
      <h3 className="text-2xl font-semibold mb-4">
        Academic Assist (MERN Stack)
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>
          Implemented two separate login systems and integrated two chatbots for
          interactive assistance.
        </li>
        <li>
          Contributed to API integration and worked on frontend development,
          ensuring a smooth user experience.
        </li>
        <li>
          Focused on delivering a scalable and user-friendly academic support
          platform.
        </li>
      </ul>
    </div>

    {/* Aladdin Food Delivery */}
    <div className="border border-gray-700 p-6 rounded-lg shadow hover:shadow-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <h3 className="text-2xl font-semibold mb-4">
        Aladdin Food Delivery Website
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>
          Designed and developed a responsive food delivery website using HTML,
          CSS, and JavaScript.
        </li>
        <li>
          Implemented dynamic content updates and smooth navigation for better
          user engagement.
        </li>
        <li>
          Delivered as part of an internship project, focusing on usability and
          modern design.
        </li>
      </ul>
    </div>

    {/* Project Marin */}
    <div className="border border-gray-700 p-6 rounded-lg shadow hover:shadow-lg bg-gray-800">
      <h3 className="text-2xl font-semibold mb-4">Project Marin (React DOM)</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>Built the UI of the project using React DOM.</li>
        <li>
          Implemented Context API for state management to handle data
          efficiently across components.
        </li>
        <li>
          Styled the application with Tailwind CSS, ensuring a clean and
          responsive design.
        </li>
      </ul>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
