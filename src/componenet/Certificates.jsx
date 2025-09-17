import React from "react";

function Certificates() {
  const certificates = [
    {
      title: "Git And GitHub",
      link: "https://drive.google.com/file/d/1uVHnFAutgpx3BQiXm41xVrPDvA5XTTE-/view?usp=sharing",
    },
    {
      title: "Internship Completion Letter",
      link: "https://drive.google.com/file/d/1DVCHri7_NzErpdK3sKpopC9C_bz6XiHl/view?usp=drive_link",
    },
    {
      title: "Creative Writing",
      link: "https://drive.google.com/file/d/1MxrPoFX8RnjwnryVskExMl1fFsuGIkzi/view?usp=sharing",
    },
    {
      title: "Core Java Course – QSpiders",
      link: null,
    },
    {
      title: "SQL Course – QSpiders",
      link: null,
    },
    {
      title: "Participated in Beyond Exams (Chat GPT Course)",
      link: null,
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen px-6 sm:px-10 py-16 bg-gray-900 text-white"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Certificates</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} title={cert.title} link={cert.link} />
        ))}
      </div>
    </section>
  );
}

function CertificateCard({ title, link }) {
  return (
    <div className="flex flex-col items-center justify-between bg-gray-800 shadow-md p-6 rounded-lg hover:shadow-xl transition">
      <p className="text-lg font-semibold text-gray-200 mb-4 text-center">
        {title}
      </p>

      {link ? (
        <button
          onClick={() => window.open(link, "_blank")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Certificate
        </button>
      ) : (
        <span className="px-4 py-2 bg-gray-600 text-gray-300 rounded-lg cursor-not-allowed">
          Completed (No Certificate)
        </span>
      )}
    </div>
  );
}

export default Certificates;
