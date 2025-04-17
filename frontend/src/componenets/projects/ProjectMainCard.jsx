import React, { useState } from 'react'
import ProjectOpen from './ProjectOpen'

function ProjectMainCard({ name = '', tech = [], githublink = '', desc = [], img = '' }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* CARD */}
      <div
        className="card bg-base-100 h-[350px] shadow-md w-full cursor-pointer group transition duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
        onClick={() => setShowModal(true)}
      >
<figure className="w-[90%] h-[180px] mx-auto overflow-hidden mt-2 ">
  <img
    src={img}
    alt={name}
    className="w-full h-full object-cover"
  />
</figure>
        <div className="card-body">
          <h2 className="card-title group-hover:text-cyan-400 transition-colors duration-300">{name}</h2>
          <div className="flex flex-wrap gap-2 my-2 p-2">
            {tech.map((item, index) => (
              <span key={index} className="badge badge-outline p-2">{item}</span>
            ))}
          </div>
          {/* <div className="card-actions justify-end">
            <a
              href={githublink}
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-4 right-4 btn btn-sm btn-primary"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          </div> */}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <ProjectOpen
          name={name}
          tech={tech}
          githublink={githublink}
          desc={desc}
          img={img}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

export default ProjectMainCard
