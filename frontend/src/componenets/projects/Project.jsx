import React from 'react'
import ProjectMainCard from './ProjectMainCard'
import chatAppImg from '../../assets/projects/chatappMern.png'
import waverImg from '../../assets/projects/chatappMern.png'
import portfolioImg from '../../assets/projects/portfolio.png'
import AnimatedSection from '../../AnimatedSection'
import ecommerceImg from '../../assets/projects/ecom.png'
import facultyImg from '../../assets/projects/faculty.png'
import folderImg from '../../assets/projects/filefolder.png'

import newsImg from '../../assets/projects/newswebsite.png'
import casinoImg from '../../assets/projects/casino.png'

function Project () {
  const projects = [
    {
      name: '✨ Chat App <Updating...>',
      tech: [
        'Node.js',
        'Express.js',
        'JWT',
        'Mongodb',
        'React',
        'Socket.io',
        'Redux',
      ],
      githublink: 'https://github.com/anshu-kumar27/chatapplication',
      desc : [
        "💬 Created a full-duplex real-time chat application using Socket.io & WebSockets.",
        "🛡️ Implemented JWT authentication and Redux for secure state management.",
        "🧠 Backend with Express & MongoDB, Frontend with React & Tailwind.",
        "📬 Includes features like online status, message notifications, and more.",
        "🛠️ More incoming..."
      ],
      img: chatAppImg
    },
    {
        name: '✨ E-commerce',
        tech: [
          'Node.js',
          'React',
          'Redux',
          'Express.js',
          'Mongodb',
          'Nodemailer',
          'Bootstrap'
        ],
        githublink: 'https://github.com/anshu-kumar27/E-com',
        desc: [
            "🛍️ Built a full-featured e-commerce platform with a sleek user interface.",
            "👤 Users can register/login, browse products, filter by category, and manage carts.",
            "📦 Includes secure order placement and cart operations.",
            "📧 Integrated NodeMailer for password recovery via email.",
            "🛠️ Admin dashboard with product/user management and order overview.",
            "🧰 Features role-based access for users and admins with route protection.",
            "🔐 Passwords encrypted using SHA-256 & JWT-based authentication.",
            "🎨 UI styled using React, Redux, Bootstrap, and Tailwind for responsiveness.",
          ],
        img:ecommerceImg
      },
      {
        name: '✨ File_Folder_System',
        tech: ['C++', 'DSA', 'Searching', 'Array', 'Queue','Stack' ,'Sorting'],
        githublink: 'https://github.com/anshu-kumar27/File_Folder_System',
        desc: [
            "📁 Designed a file-folder simulation system using C++.",
            "🧮 Implemented data structures like Arrays and Queues for in-memory organization.",
            "🔍 Features searching & sorting algorithms for efficient access.",
            "🧭 Built with a menu-driven interface for user interaction.",
            "🛠️ Follows procedural programming principles for structured logic.",
            "💾 Simulates file and folder operations without actual disk I/O.",
            "🧑‍💻 Great for understanding low-level file system behavior and logic building.",
          ],          
        img:folderImg
      },
    {
        name: 'Portfolio <Updating...>',
        tech: ['React', 'Tailwind CSS', 'Typewriter','Framer motion','Daisyui'],
        githublink: '/',
        desc: [
            "👋 Hello there! You're already exploring the portfolio itself 🎯",
            "💻 Built using React and styled with Tailwind CSS & DaisyUI.",
            "🎞️ Smooth, engaging animations powered by Framer Motion.",
            "⌨️ Dynamic typewriter effect for text animations adds flair ✨",
            "🎨 Designed with a focus on minimalism, interactivity, and performance.",
            "🌐 Fully responsive and mobile-friendly for all screen sizes.",
            "📬 Showcases full-stack skills, projects, and tech versatility.",
          ],
        img:portfolioImg
      },
    {
      name: 'Chat-App ~waver',
      tech: ['Java', 'Springboot', 'React', 'Websocket',  'Tailwind', 'Mongodb'],
      githublink: 'https://github.com/anshu-kumar27/waverr_chatapp',
      desc: [
        "🌊 Exploring the diversity in my tech stack with a Java-based chat app!",
        "☕ Built using Java, Spring Boot, and WebSockets for real-time communication.",
        "🛠️ Frontend crafted with React and styled using Tailwind CSS.",
        "📡 Allows users to create or join chat rooms to communicate seamlessly.",
        "📁 Backend powered by MongoDB for storing messages & room data.",
        "🔄 Conceptually similar to my MERN chat app, but with a new backend flavor!",
        "🧪 A fun experiment to deepen my understanding of multi-tech architectures."
      ],      
      img:waverImg
    },
      {
        name: 'Faculty-Website',
        tech: ['Nodejs', 'Express', 'React', 'Redux', 'Bootstrap', 'Mongodb'],
        githublink: 'https://github.com/anshu-kumar27/Faculty-Website',
        desc: [
            "🏫 Developed as part of a college project at Shoolini University.",
            "📚 A full-stack Faculty Directory web app built with the MERN stack.",
            "👨‍🏫 Showcases detailed info about professors — names, departments, roles & contact details.",
            "🔍 Users can easily filter faculty by department or course selections.",
            "🧰 Built using Node.js, Express, MongoDB on the backend.",
            "🎨 Frontend crafted with React, styled using Bootstrap, with global state via Redux.",
            "🎓 A clean, functional project to represent academic structure digitally."
          ],
        img:facultyImg
      },
    //   {
    //     name: 'Newswebsite',
    //     tech: [
    //       'Html',
    //       'css',
    //       "javascript"
    //     ],
    //     githublink: 'https://github.com/anshu-kumar27/News_Web',
    //     desc : ["sample","hello"],
    //     img:newsImg
    //   },
    //   {
    //     name: 'Casino',
    //     tech: ['c++'],
    //     githublink: 'https://github.com/anshu-kumar27/casino-project-',
    //     desc : ["sample","hello"],
    //     img:casinoImg
    //   }
  ]

  return (
    <div className='w-[85%] mx-auto text-left'>
      <h1 className='text-4xl md:text-5xl font-bold mb-4 pb-4 mt-4'>
        <span
          role='img'
          aria-label='lightbulb'
          className='mr-2 text-5xl md:text-6xl'
        >
          💡
        </span>
        Projects
      </h1>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-4 pt-2'>
        {projects.map((project, index) => (
  <AnimatedSection key={index} direction={window.innerWidth >= 1024 ? index < 3 ? 'left' : 'right' : index % 2 === 0 ? 'left' : 'right'  }>
  <ProjectMainCard
    name={project.name}
    tech={project.tech}
    githublink={project.githublink}
    desc={project.desc}
    img={project.img}
  />
</AnimatedSection>
        ))}
      </div>


    </div>
  )
}

export default Project
