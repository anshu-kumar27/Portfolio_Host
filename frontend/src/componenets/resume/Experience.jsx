import React from 'react';

function Experience() {
  return (
    <div className="p-4 sm:p-6 cursor-default mt-4">
      <h2 className="text-xl sm:text-3xl md:text-2xl font-bold mb-6 text-foreground">
      📌 Welcome to my Professional Experience Journey
      </h2>

      <div className="mb-4 p-4 sm:p-8 ">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
  Oriserve | 
  <span className="text-base-content
 sm:text-l md:text-xl font-semibold text-xs">
    {' '}Software Developer Intern
  </span>
</h3>
        <p className="text-xs sm:text-sm mb-2 text-muted-foreground pt-2">09-2024 to 03-2025</p>

        <p className="text-sm sm:text-base mb-2 text-foreground">
          <span className="font-semibold">Tech Stack:</span> Tools & Technologies: JavaScript (Node.js, Express.js), Mongoose, Socket.io, Redis, Bull, MongoDB, MySQL, Java. 
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-foreground">
          <li>Developed and deployed voice, chat, and WhatsApp bots tailored for diverse use cases.</li>
          <li>Optimized voice bot latency using Redis for real-time state and caching mechanisms.</li>
          <li>Built complex MongoDB aggregation pipelines to support client-specific reporting and queries.</li>
          <li>Conducted API testing and debugged issues across multiple client integrations, reducing error rates and improving bot reliability. </li>
          <li>Worked on prompt engineering with GPT-4o and GPT-4o mini to enhance response accuracy.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
